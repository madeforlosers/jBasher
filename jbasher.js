/*-----------------------------------*\
|  jBasher by James Cartwright        |
| @madeforlosers on github            |
| https://github.com/madeforlosers    |
| Version 6                           |
\*-----------------------------------*/

const request = require('request');
const prompt = require('prompt-sync')();
const fs = require('fs');

// \/ \/ update checker \/ \/
gg = parseInt(fs.readFileSync("jbasher.js", "utf-8").split("\n")[4].replace(/\D+/g, ""))
request.get('https://raw.githubusercontent.com/madeforlosers/jBasher/main/jbasher.js', function(err, res, body) {
  if (parseInt(body.split("\n")[4].replace(/\D+/g, "")) != "" && parseInt(body.split("\n")[4].replace(/\D+/g, "")) > gg) {
    console.log(
`*-----------------------------
: \x1b[1m\x1b[34mVersion \x1b[36m` + parseInt(body.split("\n")[4].replace(/\D+/g, "")) + `\x1b[0m is avaiable!\x1b[0m
: run jupdate.js to update
*----------------------------- `)
  }
  
})
// /\ /\ update checker /\ /\

function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var window = {};
if (process.argv[2] == null) {
  console.log("args required! make a .jb file and do \"node jbasher.js <filename>\"")
  return
}
var file = fs.readFileSync(process.argv[2], 'utf8')
var code = file.split("\n")
function stst(fn) {
  if (typeof eval(fn) != 'boolean') {
    return
  }
  return new Function('return ' + fn)();
}
for (var i = 0; i < code.length; i++) {
  if (code[i].match(/^##/g) != null) {
    continue
  }
  if (code[i].match(/#\w+#/g) != null) {
    tt = code[i].match(/#\w+#/g)
    if (code[i].match(/#\w+#/g).length > 1) {
      console.log(tt.length)
      for (var v = 0; v < tt.length; v++) {
        code[i] = code[i].replace(tt[0], window[tt[0].replace(/#/g, "")])
      }
    } else {
      code[i] = code[i].replace(tt[0], window[tt[0].replace(/#/g, "")])
    }
  }


  if (code[i].match(/^run javascript code: /g) != null) {
    eval(code[i].split("code: ")[1])
    continue
  }
  if (code[i].match(/^rjc /g) != null) {
    eval(code[i].split("rjc ")[1])
    continue
  }
  if (code[i].match(/^write.+to file.+with flag.+/g) != null) {
    text = code[i].split("write \"")[1].split("\" to file")[0]
    filename = code[i].split("to file \"")[1].split("\" with flag")[0]
    flags = code[i].split("flag ")[1]
    fs.writeFileSync(filename, text, { flag: flags })
    continue
  }
  if (code[i].match(/^set.+file.+to.+variable.+/g) != null) {
    window[code[i].split("variable ")[1]] = fs.readFileSync(code[i].split("file \"")[1].split("\" to")[0], "utf-8")
    continue
  }
  if (code[i].match(/@\d+/g) != null) {
    ph = code[i]
    ph = ph.replace(/@\d+/g, rnd(1, parseInt(code[i].split("@")[1])))
    code[i] = ph
  }

  if (code[i].match(/%\w+\|\d+%/g) != null) {
    code[i] = code[i].replace(/%\w+\|\d+%/g,
      window[
      code[i].match(/%\w+\|\d+%/g)[0].split("|")[0].split("%")[1]][parseInt(code[i].match(/%\w+\|\d+%/g)[0].split("|")[1].split("%")[0]) - 1])
  }
  if (code[i].match(/%\w+\|#.+#%/g) != null) {
    ph = code[i]
    ph = ph.replace(/#.+#/, window[ph.split("#")[1]])
    ph = code[i].replace(/%\w+\|.+%/g, window[ph.match(/%\w+\|.+%/g)[0].split("|")[0].split("%")[1]][parseInt(ph.match(/%\w+\|.+%/g)[0].split("|")[1].split("%")[0]) - 1])
  }
  if (code[i].match(/^set\s+string\s+\w+\sas\s\.+/g) != null) {
    window[code[i].split(" ")[2]] = code[i].split(" ")[4]
    continue
  }
  if (code[i].match(/^set\slist\s\w+/g) != null) {
    window[code[i].split(" ")[2]] = []
    continue
  }
  if (code[i].match(/^floor variable\s\w+/g) != null) {
    window[code[i].split("variable ")[1]] = Math.floor(window[code[i].split("variable ")[1]])
    continue
  }
  if (code[i].match(/^convert variable\s\w+\sto integer/g) != null) {
    window[code[i].split("variable ")[1].split(" to")[0]] = parseInt(window[code[i].split("variable ")[1].split(" to")[0]])
    continue
  }
  if (code[i].match(/^set current date to variable\s\w+/g) != null) {
    window[code[i].split("variable ")[1]] = Date.now()
    continue
  }
  if (code[i].match(/^ask for\s.+\sand set as variable\s\w+/g) != null) {
    window[code[i].split("variable ")[1]] = prompt(code[i].split("ask for \"")[1].split("\" and")[0] + "?: ")
    continue
  }
  if (code[i].match(/^add\s.+\sto\slist\s\w+/g) != null) {
    window[code[i].split("list ")[1]].push(code[i].split("add \"")[1].split("\"to ")[0])
    continue
  }
  if (code[i].match(/^add\s\w+\sto\sstring\s\w+/g) != null) {
    window[code[i].split(" ")[4]] += code[i].split(" ")[1]
    continue
  }
  if (code[i].match(/^clear console/g) != null) {
    console.clear()
    continue
  }
  if (code[i].match(/^set\s+number\s+\w+\sas\s+\d+/g) != null) {
    window[code[i].split(" ")[2]] = parseInt(code[i].split(" ")[4])
    continue
  }
  if (code[i].match(/^say\s".*"/g) != null) {
    if (code[i].match(/%/g) != null) {
      console.log(ph.split("\"")[1])
    } else {
      if (code[i].match(/#.+#/g) != null) {
        console.log(code[i].split("\"")[1].replace(/#.+#/g, window[code[i].split("#")[1]]))
      } else {
        console.log(code[i].split("\"")[1])
      }
    }
    continue
  }
  if (code[i].match(/^add\s+\d+\sto\s+\w+/g) != null) {
    if (typeof window[code[i].split(/^add\s+\d+\sto\s+/)[1]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return
    } else {
      window[code[i].split(/^add\s+\d+\sto\s+/)[1]] += parseInt(code[i].split(/\s/)[1])
      continue
    }
  }
  if (code[i].match(/^subtract\s+\d+\s+from\s+\w+/g) != null) {
    if (typeof window[code[i].split(/^subtract\s+\d+\s+from\s+/)[1]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return
    } else {
      window[code[i].split(/^subtract\s+\d+\s+from\s+/)[1]] -= parseInt(code[i].split("subtract ")[1].split(" from")[0])
      continue
    }
  }
  if (code[i].match(/^multiply\s+\w+\s+by\s+\d+/g) != null) {
    if (typeof window[code[i].split(/\s/)[1].split("by")[0]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return

    } else {
      window[code[i].split("multiply ")[1].split(" by")[0]] *= parseInt(code[i].split(/^multiply\s+\w+\sby\s+/)[1])
      continue
    }
  }
  if (code[i].match(/^expvar\s+\w+\sto the power of\s+\d+/g) != null) {
    if (typeof window[code[i].split(/\s/)[1].split("to the power of")[0]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return
    } else {
      window[code[i].split(/\s/)[1].split("to the power of")[0]] **= parseInt(code[i].split(/^expvar\s+\w+\sto the power of\s+/)[1])
      continue
    }
  }
  if (code[i].match(/^expnum\s+\d+\sto the power of\s+\w+/g) != null) {
    if (typeof window[code[i].split(/^expnum\s+\d+\sto the power of\s+/)[1]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return
    } else {
      window[code[i].split(/^expnum\s+\d+\sto the power of\s+/)[1]] = parseInt(code[i].split(/\s/)[1].split("to the power of")[0]) ** window[code[i].split(/^expnum\s+\d+\sto the power of\s+/)[1]]
      continue
    }
  }
  if (code[i].match(/^square root\s+\w+/g) != null) {
    if (typeof window[code[i].split(/^square root\s+/)[1]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return
    } else {
      window[code[i].split(/^square root\s+/)[1]] = Math.sqrt(window[code[i].split(/^square root\s+/)[1]])
      continue
    }
  }
  if (code[i].match(/^divar\s+\w+\sby\s+\d+/g) != null) {
    if (typeof window[code[i].split(/\s/)[1].split("by")[0]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return
    } else {
      window[code[i].split(/\s/)[1].split("by")[0]] /= parseInt(code[i].split(/^divar\s+\w+\sby\s+/)[1])
      continue
    }
  }
  if (code[i].match(/^dinum\s+\d+\sby\s+\w+/g) != null) {
    if (typeof window[code[i].split(/^dinum\s+\d+\sby\s+/)[1]] != "number") {
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line " + (i + 1) + ")")
      return
    } else {
      window[code[i].split(/^dinum\s+\d+\sby\s+/)[1]] = parseInt(code[i].split(/\s/)[1].split("by")[0]) / window[code[i].split(/^dinum\s+\d+\sby\s+/)[1]]
      continue
    }
  }
  if (code[i].match(/^goto\s+\d+/g) != null) {
    i = parseInt(code[i].split(/^goto\s+/g)[1]) - 2
  }
  try {
    if (code[i].match(/if\s.+\sthen\sgoto\s\d+/g) != null) {
      if (stst(code[i].replace(/#.+#/g, window[code[i].split("#")[1]]).split(" ")[1])) {
        i = parseInt(code[i].replace(/#.+#/g, window[code[i].split("#")[1]]).split(/goto\s+/g)[1]) - 2
      } else {
        continue
      }
      continue
    }
  } catch (e) {
    console.log(e)
    return
  }
}
