const request = require('request');
const fs = require("fs")
console.log("Checking for updates...")
gg = parseInt(fs.readFileSync("jbasher.js", "utf-8").split("\n")[0].split("version ")[1])
request.get('https://raw.githubusercontent.com/madeforlosers/James-Archives/main/jBashInterpreter/jbasher.js', function(err, res, body) {
  if(body.split("\n")[0].split("version ")[1] != undefined && parseInt(body.split("\n")[0].split("version ")[1]) > gg ){
  console.log("Version "+body.split("\n")[0].split("version ")[1]+" is avaiable. overwriting jbasher.js..")
    fs.writeFileSync("jbasher.js", body, {flag: "w+"})
    console.log("updated.")
  }else{
    console.log("jBasher is up to date. ")
  }
})
