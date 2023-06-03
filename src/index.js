const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const path = require("path");
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    return res.render("home");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});