const users = [
    { id: 1, name: "Alice", email: "alice@gmail.com", age: 38 },
    { id: 2, name: "Bob", email: "bob@gmail.com", age: 18 },
    { id: 3, name: "Carol", email: "carol@gmail.com", age: 24 }
];

let nextId = 4;

const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        data: users,
    });
};


const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: `User with ID ${id} not found`
        });
    }
    res.status(200).json({
        success: true,
        data: user,
    });
};


//POST
const createUser = (req, res) => {

    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({
            success: false,
            message: "name, email and age are required",
        });
    }
    const newUser = {
        id: nextId++,
        name,
        email,
        age,
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "user created successfully",
        data: newUser,
    });
};

//UPDATE
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: `User wuth id ${id} not found`,
        });
    }
    const { name, age, email } = req.body;

    users[index] = {
        ...users[index],
        ...(name && { name }),
        ...(email && { email }),
        ...(age && { age }),
    };
    res.status(200).json({
        success: true,
        data: users[index],
    });
};


//DELETE
const userDelete = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: `User wuth id ${id} not found`,
        });
    }
    const deleted = users.splice(index, 1)[0];
    res.status(200).json({
        success: true,
        message: "user deleted",
        data: deleted,
    });
};

export default { getAllUsers, getUserById, createUser, updateUser, userDelete };