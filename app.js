const express = require('express');
const dotenv = require('dotenv');
const { userData, userValidate } = require('./src/sing-in');
const path = require('path');

const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/users', (req, res) => {
    res.status(200).json({validate: userValidate, data: userData});
});

app.post("/login",
    async (req, res, next) => {
        let { email, password } = req.body;

        let existingUser;
        // try {
        //     existingUser =
        //         await User.findOne({ email: email });
        // } catch {
        //     const error =
        //         new Error(
        //             "Error! Something went wrong."
        //         );
        //     return next(error);
        // }
        // if (!existingUser
        //     || existingUser.password
        //     != password) {
        //     const error =
        //         Error(
        //             "Wrong details please check at once"
        //         );
        //     return next(error);
        // }
        let token;
        try {
            //Creating jwt token
            token = jwt.sign(
                {
                    userId: 123,
                    email: "dedu@gmail.com"
                },
                "secretkeyappearshere1",
                { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            const error =
                new Error("Error! Something went wrong.");
            return next(error);
        }

        res
            .status(200)
            .json({
                success: true,
                data: {
                    userId: 123,
                    email: "dedu@gmail.com",
                    token: token,
                },
            });
    });

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
