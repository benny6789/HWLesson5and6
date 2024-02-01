// ספריית אקספרס
const express = require("express");
// מבצע מינפולציה על נתיבים בכתובות יו אר אל
const path = require("path");
// מפעיל שרת
const http = require("http");
// פונקציה שבהפעלה מגדירה ראוטים של השרת שלנו
const {routesInit} = require("./routes/configRoutes")

// מגדירים משתנה שהוא מייצג את האקפרס והיכולות שלו
const app = express();
app.use(express.json());
// מגדירים את תקיית פאבליק כתקייה סטטית שחשופה לצד לקוח
app.use(express.static(path.join(__dirname,"public")));

// מגדיר את הראוטרים של האפליקציה שלנו כשהשרת יעבוד
routesInit(app);

require("./db/connectMongo");

// מפעיל שרת
const server = http.createServer(app);
server.listen(3001);
