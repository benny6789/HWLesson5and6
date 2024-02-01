const indexR = require("./index");
const usersR = require("./users");
const vipsR = require("./vips");
const showsR = require("./shows");


exports.routesInit = (app) => {
    app.use("/",indexR);
    app.use("/users",usersR);
    app.use("/vips",vipsR);
    app.use("/shows",showsR);
}