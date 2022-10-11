if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const cors = require("cors")

const app = express();

// middleware
app.use(express.json());
app.use(cors());

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
