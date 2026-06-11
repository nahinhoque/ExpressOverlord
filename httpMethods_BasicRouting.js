// import express from "express";
// const app = express();

// app.use(express.json());

// // GET Method
// app.get("/products", (req, res) => {
//     res.send("সব প্রোডাক্ট দেখানো হচ্ছে।");
// });

// // POST Method
// app.post("/products", (req, res) => {
//     const newProduct = req.body;

//     console.log(newProduct);

//     res.send(`নতুন প্রোডাক্ট যোগ হয়েছে: ${JSON.stringify(newProduct)}`);
// });

// // PUT Method
// app.put("/products/:id", (req, res) => {
//     const id = req.params.id; //20
//     const updatedProduct = req.body;
//     res.send(
//         `প্রোডাক্ট (ID: ${id}) আপডেট করা হয়েছে: ${JSON.stringify(updatedProduct)}`
//     );
// });
// // DELETE Method
// app.delete("/products/:id", (req, res) => {
//     const id = req.params.id;

//     res.send(`প্রোডাক্ট (ID: ${id}) ডিলিট করা হয়েছে`);
// });


//File download
// import express from 'express';
// import { fileURLToPath } from 'url';

// const app = express();

// app.get('/download', (req, res) => {
//     const filePath = fileURLToPath(new URL('files/download (1).jpg', import.meta.url));

//     res.download(filePath, (err) => err && res.status(404).send("File not found"));
// });

// //Redirect
// app.get('/GOOGLE', (req, res) => {
//     res.redirect("https://www.google.com");
// })

// //Header set
// app.get("/custom-header", (req, res) => {
//     res.set("X-custom-Header", "ExpressDemo");
//     res.send("Header send")
// });
// app.listen(5000, () => console.log("Server running on port 5000"));



//**POST */
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(express.json());
const port = 5000;

// //**get,post in same */
// app.get("/OPTIMUS", (req, res) => {
//     res.send("GET OPTIMUS");
// });

// app.post("/OPTIMUS", (req, res) => {
//     res.send("POST OPTIMUS");
// });
// //**get,post in same */


// //**QueryParam. */
// app.post("/search", (req, res) => {
//     const { keyword } = req.query;
//     res.send(`POST search for: ${keyword}`);
// });
// //**QueryParam. */



//**Receive body data by Post from client*/
// app.post("/user", (req, res) => {
//     console.log(req.body);
//     const { username, age, is_developer } = req.body;
//     // res.send(`Received JSON data: ${username} || ${age}`);
//     res.status(201).json({
//         status: true,
//         msg: 'User Created',
//         data: req.body,
//     });
// });
// //**Receive body data by Post from client*/


// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// });

//**POST */