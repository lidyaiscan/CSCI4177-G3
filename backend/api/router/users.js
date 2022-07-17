/**
 * CSCI 4177 Assignment 3 
 * restapi for authentication
 * developed by xinlong
 */
 const express = require("express");

 const userRouter = express.Router();
// const users = require("../data/users");

 //create the "user" collection
 const mongoose = require("mongoose");
 const User = require("../model/user");
 const bcrypt = require("bcryptjs");
 const cors = require("cors");
 
 //constant for cors
 const corsoptions = {
    origin: true,
    methods: ["POST","GET","PUT","DELETE"],
    credentials: true,
    maxAge: 36000
  };

 //Check the status of Server
 userRouter.get("/", (req, res) => {
     return res.status(200).send("Hi! This is Assignment 3 Server developed by XinLong (group 3).");
 });
 

 //implements API for GET call for list of all users
 
 userRouter.get("/users", async (req, res) => {
     
    try {
        const userlist = await User.find({});
        if(userlist.length > 0) {
            res.status(200).json({
                message : "Users retrieved",
                success : true,
                users : userlist.map(user =>{
                    return {
                        email : user.email,
                        firstName : user.firstName,
                        id : user.id
                    }
                })
            });
        }
        else {
            return res.status(404).json({
                message : "User Not Found",
                success : false
            });            
        }

 
     } catch(error) {
         return res.status(500).json({
             message : "Internal Server Error",
             success : false
         });
     }
 })
 
 //implements API for POST call to create a user

 userRouter.options("/add", cors(corsoptions))
 userRouter.post("/add", cors(corsoptions), async (req, res) => {
    //if inputs is undefined, return 400
    if(typeof(req.body.email) === 'undefined' || typeof(req.body.firstName) ==='undefined' || typeof(req.body.lastName) ==='undefined' || typeof(req.body.password) ==='undefined'){
        console.log("=Add User=");
        console.log("Bad Request!");
        console.log("==========");
        return res.status(400).json({
            message : "Bad Request!",
            success : false
        });   
    }
    else {
        //check user by email
        const user1 = await User.find({email:req.body.email});
            
        if(user1.length > 0) {
            console.log("=Add User=");
            console.log("User has been exist!");
            console.log("==========");
            return res.status(400).json({
                message : "User Exist",
                success : false
            });
        }

        let saltVal = await bcrypt.genSalt(10);
        let cryptPass = await bcrypt.hash(req.body.password, saltVal);

        console.log("befor add");

        const user = new User({
            id: new mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptPass
        });
        
        try {
            await user.save();
            console.log("=Add User=");
            console.log(user);
            console.log("==========");
            


            return res.status(201).json({
                message : "User added",
                success : true
            });

        } catch(error) {
            console.log(error);
            return res.status(500).json({
                message : "Internal Server Error",
                success : false
            });
        }
    
    }
 })
 
//implements API for POST call to log in
userRouter.options("/login", cors(corsoptions))
userRouter.post("/login", cors(corsoptions), async (req, res) => {
   //if inputs is undefined, return 400
   if(typeof(req.body.email) === 'undefined' || typeof(req.body.password) ==='undefined'){
       console.log("=User Login=");
       console.log("Bad Request!");
       console.log("============");
       return res.status(400).json({
           message : "Bad Request!",
           success : false
       });   
   }
   else {
       //check user
    //    let saltVal = await bcrypt.genSalt(10);
    //    let cryptPass = await bcrypt.hash(req.body.password, saltVal);
    //    console.log(cryptPass);

       const user = await User.findOne({email:req.body.email});
       if(!user) {
            console.log("=User Login==");
            console.log("User not found!");
            console.log("=============");
            return res.status(404).json({
                message : "User not found",
                success : false
            })        
       }
       else {
            if(!await bcrypt.compare(req.body.password, user.password)) {
                console.log("=User Login==");
                console.log("Password Error!");
                console.log("=============");
                return res.status(404).json({
                    message : "Password Error",
                    success : false
                })
            } else {
                console.log("=User Login==");
                console.log("Authen Correct!");
                console.log("=============");
                return res.status(200).json({
                    message : "Authen Correct",
                    username:user.firstName,
                    id:user.id,
                    success : true
                });
            }
       }
    }
})


 //implements API for PUT call to update a user profile
 userRouter.options("/update/:id", cors(corsoptions))
 userRouter.put('/update/:id', cors(corsoptions), async (req, res) => {
     let userid = req.params.id
     let email = req.body.email;
     let firstname = req.body.firstName; 
     let password = req.body.password;

     //if inputs is undefined, return 400
     if(!mongoose.isValidObjectId(userid) || (typeof(email) === 'undefined' && typeof(firstname) ==='undefined')){
         console.log("=Update User=");
         console.log("Bad Request!");
         console.log("==========");
         return res.status(400).json({
             message : "Bad Request!",
             success : false
         });   
     }
     else {
        let saltVal = await bcrypt.genSalt(10);
        let cryptPass = await bcrypt.hash(req.body.password, saltVal);
        req.body.password = cryptPass;

         try {
            const user = await User.updateOne({id:userid}, {$set:req.body})
            // console.log(user);
            // console.log(req.body);
            if(user.matchedCount > 0  && user.modifiedCount > 0) {
                //update sucessfully,return 200
                console.log("=Update User=");
                console.log("user id :");
                console.log(userid);
                console.log("==========");
                return res.status(200).json({
                    message : "User updated",
                    success : true
                });                
            }
            else if(user.matchedCount == 0) {
                //user can not be found,return 404
                return res.status(404).json({
                    message : "User can not be found!",
                    success : false
                });                 
            }
            else if(user.modifiedCount == 0) {
                //User can not be modified,return 400
                return res.status(400).json({
                    message : "User can not be modified!",
                    success : false
                });  
            }
         } catch(error) {
             return res.status(500).json({
                 message : "Internal Server Error",
                 success : false,
             });        
         }
     }
 })
 
//implements API for GET specific user profile
 userRouter.options("/user/:id", cors(corsoptions))
 userRouter.get('/user/:id', cors(corsoptions), async (req, res) => {
     let userid = req.params.id;

     //if input is not objectid, return 400
     if(!mongoose.isValidObjectId(userid) ) {
         console.log("=Get User=");
         console.log("Bad Request!");
         console.log("==========");
         return res.status(400).json({
             message : "Bad Request!",
             success : false
         });
     }
     else {
         try {
            const user = await User.find({id:userid});
            
            if(user.length == 0) {
                console.log("=Get User=");
                console.log("user can not be found!");
                console.log("==========");
                return res.status(404).json({
                    message : "User can not be found!",
                    success : false
                }); 
            }
            else {
                
                console.log("=Get User=");
                console.log("username :");
                console.log(user[0].firstName);
                console.log("==========");
                return res.status(200).json({
                    success : true,
                    user : {
                        firstName : user[0].firstName,
                        lastName : user[0].lastName,                       
                        email : user[0].email,
                        id : user[0].id
                    }
                });   
            } 
        } catch(error) {
             return res.status(500).json({
                 message : "Internal Server Error",
                 success : false
             });              
         }
     }
 })
 //implements API for DELETE call for deleting a user
 userRouter.options("/user/:id", cors(corsoptions))
 userRouter.delete('/delete/:id',  cors(corsoptions), async (req, res) => {
    let userid = req.params.id;

    //if input is not objectid, return 400
    if(!mongoose.isValidObjectId(userid) ) {
        console.log("=delete User=");
        console.log("Bad Request!");
        console.log("==========");
        return res.status(400).json({
            message : "Bad Request!",
            success : false
        });
    }
    else {
        try {
           const user = await User.find({id:userid}).remove();
           console.log(user);
           if(user.deletedCount == 0) {
               console.log("=delete User=");
               console.log("user can not be found!");
               console.log("==========");
               return res.status(404).json({
                   message : "User can not be found!",
                   success : false
               }); 
           }
           else {
               
               console.log("=delete User=");
               console.log("userid :");
               console.log(userid);
               console.log("==========");
               return res.status(200).json({
                message : "User deleted",
                success : true
            });    
           } 
       } catch(error) {
            return res.status(500).json({
                message : "Internal Server Error",
                success : false
            });              
        }
    }
})


 module.exports = userRouter;