// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();
// const PORT = 3000;

// // --- Recreate __dirname for absolute paths (ES Module standard) ---
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // --- Serve files using a Virtual Path Prefix ---
// // We mount the 'public' folder 
// app.use(express.static(path.join(__dirname, 'public')));

// // A root route to make sure server is working
// app.get('/', (req, res) => {
//     res.send('<h1>Server is running!</h1>');
// });

// app.listen(PORT, () => {
//     console.log(`Server listening at http://localhost:${PORT}`);
// });