var express = require("express");
var app = express();

app.get("", function(req, res){
    res.redirect('http://google.com');
});

app.get("/search/:search", function(req, res){
   var search = req.params.search;
   res.send("google.com/search?q=search "+ search);
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
