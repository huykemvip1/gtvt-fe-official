
const path = require("path");
const express = require("express");
const http = require("http");
const app = express();

app.use(express.static(__dirname + '/dist/gtvt-fe-v1'));


app.get('/*', function (req, res) {
   
    res.sendFile(path.join(__dirname,'/dist/gtvt-fe-v1/index.html'));
}
);
app.listen(process.env.PORT || 5000, function () {
    console.log("bat dau thanh cong");
})
// Start the app by listening on the default Heroku port



    
    
