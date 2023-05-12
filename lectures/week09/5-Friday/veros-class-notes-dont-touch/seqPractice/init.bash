
sequelize model:generate --name category --attributes title:string,description:string,imageURL:string

sequelize model:generate --name blogs --attributes title:string,content:string,isPublished:boolean,commentCount:integer,publishDate:date,categoryID:integer

sequelize model:generate --name comments --attributes username:string,content:string,isApproved:boolean,blogID:integer