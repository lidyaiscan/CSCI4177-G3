## Project repository
* Project: https://git.cs.dal.ca/lidya/csci-4177-group-3-project.git
* Individual branch: https://git.cs.dal.ca/lidya/csci-4177-group-3-project/-/tree/xinlong

## Heroku link
https://food4u-csci4177.herokuapp.com/

## README author
* [Liu Xinlong](xn988864@dal.ca) - *(Developer)*
# Feature developed
In our project, I am responsible for following features, and the front-end has been completed in the early stage:
(1) Authentication (users)
(2) Feedback and Reviews

According to Assignment 3, I choose the user Authentication feature to implement front-end and back-end.
[When submitting the demo, I will complete the interaction between tasks.]

# This feature includs tasks below:
*registeration
*log in
*log out
*change profile
*change password

# The files created by myself:
## (1)front-end
   function             file path & name
*registeration:         src/components/Reg/Reg.js
*log in                 src/components/Login/Login.js
*log out                src/components/Logout/Logout.js
*show profile           src/components/Profile/Profile.js
*update profile         src/components/Profile/Profile_Update.js
*change password        this task include in "update profile"
*set global variable    src/components/global/global.js

## (2)back-end
   function             file path & name
*http server            src/back_end_server/server.js
*middleware,router      src/back_end_server/app.js
 database connection
*"User" schema,model    src/back_end_server/api/model/user.js
*globle varaibel        src/back_end_server/api/global/global.js
*registeration:         src/back_end_server/api/router/users.js
(api:post https://deploy_ip:deploy_port/authen/add)
*log in                 src/back_end_server/api/router/users.js
(api:post https://deploy_ip:deploy_port/authen/login)
*log out                src/back_end_server/api/router/users.js
*update profile         src/back_end_server/api/router/users.js
(api:get https://deploy_ip:deploy_port/authen/user/:id)
(api:put https://deploy_ip:deploy_port/authen/update/id)
*change password        this task include in "update profile"
*delete user            src/back_end_server/api/router/users.js
(api:delete https://deploy_ip:deploy_port/authen/delete/:id)


# References
The feature is done by myself without the use of any external sources.
