// import express from "express";
// const app = express()

// app.get("/user/:id", (req, res) => {
//     const { id } = req.params;

//     console.log(id);

//     res.status(200).send(id);
// });

// app.listen(5000, () => {
//     console.log("Server is running!");
// });


/** */
// import express from "express";
// const app = express();

// app.get("/api/notes/:noteId", (req, res) => {
//     const { noteId } = req.params;

//     console.log(`User requested note with ID: ${noteId}`);

//     res.status(200).json({
//         success: true,
//         message: `Fetched data for note number ${noteId}`,
//         data: { id: noteId, title: "My Coding Goals", content: "Master ExpressJS" }
//     });
// });

// app.listen(5000, () => console.log("server running on 5000"));

// output
// success	true
// message	"Fetched data for note number 85"
// data
// id	"85"
// title	"My Coding Goals"
// content	"Master ExpressJS"
/** */


/** */
// import express from "express";
// const app = express();
// app.get("/api/categories/:categoryName/notes/:noteId", (req, res) => {
//     const { categoryName, noteId } = req.params;

//     res.status(200).json({
//         category: categoryName,
//         requestedNoteId: noteId,
//         status: "Success"
//     });
// });
// app.listen(5000, () => console.log("server running on 5000"));
/** */