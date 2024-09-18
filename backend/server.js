import express from "express";

const app = express();
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send("Hello");
});