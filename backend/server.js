
const app = require("./app.js")

let port = process.env.PORT;

if (port == null || port == ""){
    port = 4000;
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});