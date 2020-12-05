// array of questions for user
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
const do_thing = require("colors")
const http = require("http");


const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log(do_thing.america("Welcome to my cli"))
    inq.prompt([{ type: "input", name: "title", message: "What is your name?" }]).then(res => {
        console.log(res)
        fs.writeFile("GENERATED.md", generateMarkdown(res), () => {
            console.log(do_thing.green("Successfully made a file"))
        })
    })

}

// function call to initialize program
init()


// http.createServer((req, res) => {
//     res.write("Welcome to the machine")
//     res.end()
// }).listen(8000)