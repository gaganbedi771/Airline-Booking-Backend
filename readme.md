Error handling:
    //controllers/middlewares will be first hit by api, if user is sending bad request or invalid inputs or unauthorised, throw client side errors here
    //services might handle internal server errors
    //repository will be handling database errors

sequelize cli:
    install sequelize, mysql2, sequelize-cli

    commands:
    => npx sequelize-cli init 
    //outside src coz it will replace models and other folders. Move all folders inside except config.Change user, pass and database in config file
    => npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
    //model and migration file is created. Check and modify attributes accordingly.
    //models will be used by node and migrations will be used by database
    //by now only files are created but not synced with db thus no model exists in actual db.
    //model name should be singular and actual tables will be plural
    => npx sequelize db:migrate 
    //it checks whatever new migrations we have and apply those to database, thus updates the schema
    => npx sequelize db:undo or db:undo:all
    //to undo changes
    => npx sequelize migration:create --name updateTable
    //to make any further changes in the table, then cahnge migration accordingly
    => npx sequelize seed:generate --name file_name
    //to create seed file
    =>npx sequelize db:seed:all



How to run?
clone to local
open terminal with serviceFolder/src/index.js path
npm install
create .env file in serviceFolder and add
//env file contents

create src/config/config.js and add
//config file contents

run "npx sequelize db:create"
"npx sequelize db:migrate"
"npx sequelize seed:generate --name add-cities"
"npx sequelize db:seed:all"

Git:
=> git status
=> git add .
=> git commit -m "message"
=> git push origin master







TODO:
Input validation wherever necessary