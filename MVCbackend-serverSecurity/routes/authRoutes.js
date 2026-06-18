import express from "express";
import cookieAuth from "../middlewares/cookieAuth.js";
const router = express.Router();

const users = {
    Nahin: {
        id: 1,
        name: "Nahin",
        password: "1234",
        sessionToken: "session-nahin-xyz",
    },
    Mahin: {
        id: 2,
        name: "Mahin",
        password: "pass",
        sessionToken: "session-nahin-xyz",
    },
};

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users[username];

    if (!user || user.password !== password) {
        return res.status(401).json({
            success: false,
            message: "Invalid username or password",
        });
    }

    res.cookie("sessionToken", user.sessionToken, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 1000
    });
    res.status(200).json({
        success: true,
        cookieInfo: {
            name: "sessionToken",
        },
    });
});

router.get("/profile", cookieAuth, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    });
});

//HIJACKING - httponly cookie = true
router.get("/hijack-demo", (req, res) => {
    res.cookie("dangerousCookie", "steal-me-1234", {
        httpOnly: false,
        maxAge: 5 * 60 * 1000,
    });
    res.cookie("safeCookie", "protected-1234", {
        httpOnly: true,
        maxAge: 5 * 60 * 1000,
    });
    res.json({
        success: true,
    });
});

export default router;