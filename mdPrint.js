const fs = require('fs')
const script = JSON.parse(fs.readFileSync('./scripts.json').toString())

let result = ''
for (let [key, value] of Object.entries(script)) {
    let temp = `\n# ${key}\n${value.replace('](/core/', '] -> (')}\n`
    for(let i=0; i<20; i++){
        temp = temp.replace('](/core/', '] -> (')
    }
    result += temp
    // result += `# ${key}\n${value}\n`
}
fs.writeFileSync('./mdScript.md', result)