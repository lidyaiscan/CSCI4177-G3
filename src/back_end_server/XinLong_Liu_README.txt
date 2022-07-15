<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Lab / Assignment / Project Title
CSCI 4177 Assignment 3 Project Shopping Online (front-end and back-end)

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 10 07 2022
* *Last Modification Date*:  07 2022
* *Lab URL*: <groceryonline-csci4177-group3.herokuapp.com/>
* *Git URL (group)*: <https://git.cs.dal.ca/lidya/csci-4177-group-3-project.git>
* *git branch (myself)*: xinlong

## Authors: Liu xinlong (xn988864@dal.ca)

In our project, I am responsible for following features, and the front-end has been completed in the early stage:
(1) Authentication (users)
(2) Feedback and Reviews

According to Assignment 3, I choose the user Authentication feature to implement front-end and back-end.
[When submitting the demo, I will complete the interaction between tasks.]
This feature includs tasks below:
*registeration
*log in
*log out
*change profile
*change password

The files created by myself:
(1)front-end:
   function             file path & name
*registeration:         src/components/Reg/Reg.js
*log in                 src/components/Login/Login.js
*log out                src/components/Logout/Logout.js
*show profile           src/components/Profile/Profile.js
*update profile         src/components/Profile/Profile_Update.js
*change password        this task include in "update profile"
*set global variable    src/components/global/global.js

(2)back-end:
   function             file path & name
*http server            src/back_end_server/server.js
*middleware,router      src/back_end_server/app.js
 database connection
*"User" schema,model    src/back_end_server/api/model/user.js
*globle varaibel        src/back_end_server/api/global/global.js
*registeration:         src/back_end_server/api/router/users.js
(api:post http://localhost:8080/authen/add)
*log in                 src/back_end_server/api/router/users.js
(api:post http://localhost:8080/authen/login)
*log out                src/back_end_server/api/router/users.js
*update profile         src/back_end_server/api/router/users.js
(api:get http://localhost:8080/authen/user/:id)
(api:put http://localhost:8080/authen/update/:id)
*change password        src/back_end_server/api/router/users.js
*delete user            src/back_end_server/api/router/users.js
(api:delete http://localhost:8080/authen/delete/:id)



**[Optional]** If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Name](email@dal.ca) - *(Role)*
* [Name](email@dal.ca) - *(Role)*
* [Name](email@dal.ca) - *(Role)*
* [Name](email@dal.ca) - *(Role)*
* [Name](email@dal.ca) - *(Role)*


## Getting Started

**[Optional]** If needing to provide the marker with a copy of the project that should run on their local machine for development, testing and/or marking purposes. Please include the following sections.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Give examples or provide a list of the required software / libraries / plug-ins

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be, assume the marker just acquired a computer

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo. You may also include a quick example of what the marker should see if the installation of all required software / libraries / plug-ins was successful.


## Running the tests

If needing to run automated tests, then explain how to run the automated tests for this system. If this section is not needed, ** you may delete **.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
**

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### File Name

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*

### File Name

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
