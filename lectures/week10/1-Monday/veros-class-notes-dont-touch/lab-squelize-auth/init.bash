
sequelize model:generate --name roles --attributes name:string

sequelize model:generate --name users --attributes username:string,email:string,password:string,roleID:integer