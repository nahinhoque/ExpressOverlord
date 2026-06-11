// import express from "express";
// import multer from "multer";
// import path from "path";
// const app = express()

// const port = 3000;

// //Middleware custom
// const logger = (req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();
// };
// app.use(logger);

// //Auth Middleware
// function authMiddleWare(req, res, next) {
//     const token = req.headers["authorization"];

//     if (token === "secret123") {
//         next();
//     } else {
//         res.status(403).send("Forbidden");
//     }
// }
// app.get("/protected", authMiddleWare, (req, res) => {
//     res.send("You have access!");
// });
// //Auth Middleware


// // Set Storage engine
// //Upload image also create storage
// const storage = multer.diskStorage({
//     destination: "uploads/",
//     filename: (req, file, cb) => {
//         const uniqueName = `${Date.now()}-${file.originalname}`;
//         cb(null, uniqueName);
//     },
// });
// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("photo"), (req, res) => {
//     console.log(req.file);
//     res.send("Photo uploaded and stored successfully!");
// });



// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// });


// //Route set
// app.get('/', (req, res) => {
//     res.send("Hello Express");
// });
// app.get('/about', (req, res) => {
//     res.send("Hello Express About!");
// });
// //listen server
// app.listen(5000, () => {
//     console.log("Server is running!");
// });
