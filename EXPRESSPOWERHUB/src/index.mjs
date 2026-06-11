import express from "express";
import { query } from "express-validator";
import fs from 'fs';

const app = express();
app.use(express.json());

const mockUsers = [
    { id: 1, username: "Nahin", displayName: "Nahin" },
    { id: 2, username: "Nabil", displayName: "Nabil" },
    { id: 3, username: "Karim", displayName: "Karim" },
    { id: 4, username: "Farid", displayName: "Farid" },
    { id: 5, username: "Tofazzal", displayName: "Tofazzal" },
    { id: 6, username: "Mahin", displayName: "Mahin" },
];


const PORT = process.env.PORT || 3000;


//MIDDLEWARE-PLUGIN
// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     // console.log("Hello from middleware 1");
//     // return res.json({ mgs: "Hello from middleware 1" });
//     fs.appendFile(
//         "log.txt",
//         `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}`,
//         (err, data) => {
//             next();
//         }
//     );
// });


const loggingMiddleware = (request, response, next) => {
    console.log(`${request.method} - ${request.url}`);
    next();
};

//MIDDLEWARE 2
const resolveIndexByUserId = (request, response, next) => {
    const {
        body,
        params: { id },
    } = request;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) return response.sendStatus(404);
    request.findUserIndex = findUserIndex;
    next();
};


app.use(loggingMiddleware);

app.get(
    "/",
    (request, response, next) => {
        console.log("Base URL 1");
        next();
    },
    (request, response, next) => {
        console.log("Base URL 2");
        next();
    },
    (request, response, next) => {
        console.log("Base URL 3");
        next();
    },
    (request, response) => {
        response.status(201).send({ msg: "Hello" });
    }
);

// app.use((req, res, next) => {
//     console.log("Hello from middleware 2");
//     return res.end("Hey");
// });



//ROUTE PARAMETERS
app.get("/api/users/:id", (request, response) => {
    console.log(request.params);
    const parsedId = parseInt(request.params.id);
    if (isNaN(parsedId))
        return response.status(400).send({ msg: "Bad Request. Invalid ID." });
    const findUser = mockUsers.find((user) => user.id === parsedId);
    if (!findUser) return response.sendStatus(404);
    return response.send(findUser);
});


//QUERY PARAMETERS
app.get("/api/users", (request, response) => {
    console.log(request);
    const {
        query: { filter, value },
    } = request;
    // when filter and value are undefined
    if (!filter && !value) return response.send(mockUsers);
    if (filter && value) {
        return response.send(
            mockUsers.filter((user) => user[filter].includes(value))
        );
    }
    return response.send(mockUsers);
});

//MIDDLEWARE 1
app.use(loggingMiddleware, (request, response, next) => {
    console.log("Finished Logging...");
    next();
});


//POST REQUEST
app.post("/api/users", (request, response) => {
    const { body } = request;
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
    mockUsers.push(newUser);
    return response.status(201).send(newUser);
});


//PUT REQUEST
app.put("/api/users/:id", (request, response) => {
    const {
        body,
        params: { id },
    } = request;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) return response.sendStatus(404);
    mockUsers[findUserIndex] = { id: parsedId, ...body };
    return response.sendStatus(200);
});

//MIDDLEWARE 2
app.put("/api/users/:id", resolveIndexByUserId, (request, response) => {
    const { body, findUserIndex } = request;
    mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
    return response.sendStatus(200);
});
//PUT REQUEST


//PATCH REQUEST
app.patch("/api/users/:id", (request, response) => {
    const {
        body,
        params: { id },
    } = request;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) return response.sendStatus(404);
    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
    return response.sendStatus(200);
});
//MIDDLEWARE 2
app.patch("/api/users/:id", resolveIndexByUserId, (request, response) => {
    const { body, findUserIndex } = request;
    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
    return response.sendStatus(200);
});
//PATCH REQUEST


//DELETE REQUEST
app.delete("/api/users/:id", (request, response) => {
    const {
        params: { id },
    } = request;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) return response.sendStatus(404);
    mockUsers.splice(findUserIndex, 1);
    return response.sendStatus(200);
});
//MIDDLEWARE 2
app.delete("/api/users/:id", resolveIndexByUserId, (request, response) => {
    const { findUserIndex } = request;
    mockUsers.splice(findUserIndex, 1);
    return response.sendStatus(200);
});
//DELETE REQUEST


app.get("/api/products", (request, response) => {
    response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});