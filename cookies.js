// //SET-COOKIES
// import express from 'express';
// import cookieParser from 'cookie-parser';

// const app = express();
// app.use(cookieParser());
// const port = 5000;

// // app.get("/set-cookie", (req, res) => {
// //     res.cookie("token", "abc123", { httpOnly: true });
// //     res.send("Cookie set");
// // });

// // //clear
// // app.get("/clear-cookie", (req, res) => {
// //     res.clearCookie("token");
// //     res.send("Cookie cleared");
// // });


// //Query
// // app.get("/search", (req, res) => {
// //     const { name } = req.query;
// //     console.log({ name });
// //     res.send(`Searching for: ${name}`);
// // });

// // /** */
// // app.get("/user/:id", (req, res) => {
// //     const { id } = req.params;
// //     console.log({ id });
// //     res.send(`User ID: ${id}`);
// // });
// // /** */


// //** */
// app.get("/hello", (req, res) => {
//     console.log(req.method);
//     console.log(req.url);

//     //**Header */
//     // console.log(req.headers); 
//     const userAgent = req.headers["user-agent"];
//     console.log(userAgent);

//     const customHeader = req.headers["x-custom-header"];
//     console.log(customHeader);
//     //**Header */

//     res.send("Hello From express!!!!");
// });
// //** */

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// });