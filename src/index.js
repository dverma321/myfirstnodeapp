const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");


require("./db/conn");
const Register = require("./models/registers");

//automatic generate port number using const port line

const port = process.env.PORT || 3000;

// static website path and loading index.html page

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.json()); // perfect for postman
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

app.use(express.static(static_path));

// If index.html page is not found i.e static_page then move to another

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(path.join(__dirname, "../public")); // checking path directory

// For Static page use below i.e index.html

// app.get("/", (req, res) => {

//     res.send("Hello from verma Enterprises... Thank you for visiting")

// });

// For using hbs use below code


app.get("/", (req, res) => {

    res.render("index");

});

app.get("/freeSoftwares", (req, res) => {

    res.render("freeSoftwares");

})

app.get("/paidsoftwares", (req, res) => {

    res.render("paidsoftwares");

})


app.get("/registration", (req, res) => {

    res.render("registration");

})

// Add a route for the registration success page
app.get("/registration-successful", (req, res) => {
    res.render("registration-success");
});

app.get("*", (req, res) => {
    res.render("pagenotfound");
});

// create a new user in our database

app.post("/registration", async (req, res) => {

    try {

        const pass = req.body.password;
        const cpass = req.body.confirmpassword;


        if (pass === cpass) {
            const registeredUsers = new Register({

                fullname: req.body.fullname,
                email: req.body.email,
                mobile: req.body.phone,
                gender: req.body.gender,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword


            });

            const registered = await registeredUsers.save();

            // res.status(201).render("index");

             // Render the registration success page with a success message
             res.status(201).render("registration-successful", { message: "Registration successful" });

        }
        else {
            // Render the registration page with an error message
            res.status(400).render("registration", { error: "Password is not the same" });

            // res.send("Password is not the same");

        }



    }
    catch (error) {
        res.status(400).send(error);
    }


})


// app.listen(port, () => {
//     console.log(`Server is running at port no ${port}`);
// })

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server is running at port no ${port}`);
    }
});
