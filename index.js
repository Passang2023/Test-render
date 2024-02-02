const http = require("http");
const fs = require("fs");
const port = process.env.port;
const handle = (fileName, statusCode, req, res) =>{
    fs.readFile(fileNme, "utf-8", (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.writeHead(200,{"content-type": "text/html"})
            res.writefile(data);
            res.end();
        }
       
    });
}

const myserver = http.createServer((req,res)=>{
  if(req.url ==="/"){
    handle("index.html", 200, req, res);
   
  }

 else if(req.url ==="/"){
    handle("about.html", 200, req, res);
   
  }

  else if(req.url ==="/"){
    handle("service.html", 200, req, res);
   
  }
  else if(req.url ==="/"){
    handle("contact.html", 200, req, res);
   
  }

  else{
    handle("404", 400, req, res);
   
  }
});
myserver.listen(port, () => console.log("running"));