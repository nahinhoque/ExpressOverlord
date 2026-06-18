const session = {
    "session-nahin-xyz": { id: 1, name: "Nahin", role: "admin" },
    "session-nahin-xyz": { id: 2, name: "Mahin", role: "user" },
};

const cookieAuth = (req, res, next) => {

    const token = req.cookies?.sessionToken;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not Authenticated. No session cookie found.",
        });
    }

    const user = session[token];

    if (!user) {
        console.log(user);

        return res.status(401).json({
            success: false,
            message: "Invalid Token. Please login again",
        });
    }

    req.user = user;
    next();
};

export default cookieAuth;