import express from "express";
import { query, body, validationResult } from "express-validator";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

//INPUT VALIDATION
app.post("/api/register",
    body("name")
        .trim()
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage("Name must be at least 5 characters long")
        .isLength({ max: 31 })
        .withMessage("Name can have maximum 31 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Not a valid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is missing")
        .isLength({ min: 5 })
        .withMessage("password must have at least 5 characters"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errorOccured: errors.array() });
        }
        next();
    },
    (req, res) => {
        try {
            const { name, email, password, dob } = req.body;
            const newUser = { name, email, password, dob }
            return res.status(201).json({
                message: "user was created",
                newUser
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    });


//MANUAL VALIDATION
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || name.length < 2) {
        return res.status(400).json({ error: 'Invalid name' });
    }

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email' });
    }
    return res.status(200).json({ message: 'User data is valid!' });
});


app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
