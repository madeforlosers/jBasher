const request = require('request');
const prompt = require('prompt-sync')();
const fs = require('fs');
gg = parseInt(fs.readFileSync("jbasher.js", "utf-8").split("\n")[4].replace(/\D+/g, ""))
request.get('https://raw.githubusercontent.com/madeforlosers/jBasher/main/jbasher.js', function(err, res, body) {
  if (parseInt(body.split("\n")[4].replace(/\D+/g, "")) != "" && parseInt(body.split("\n")[4].replace(/\D+/g, "")) > gg) {
   console.log("Version "+body.split("\n")[0].split("version ")[1]+" is avaiable. overwriting jbasher.js..")
    fs.writeFileSync("jbasher.js", body, {flag: "w+"})
    console.log("updated jbasher.js")
    updateReadme()
  } else{
    console.log("seems to be up to date.")
  }
})
function updateReadme(){
request.get('https://raw.githubusercontent.com/madeforlosers/jBasher/main/readme.md', function(err, res, body) {
    console.log("updating readme.md")
   fs.writeFileSync("readme.md", body, {flag: "w+"})
    console.log("updated")
})
}
