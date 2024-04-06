#!/usr/bin/env node
import "./src/commands.js";

// import { count } from "./utils/utils.js";
// import { others } from "./utils/others.js";
// import { wait } from "./test.js";
// import fs from "node:fs"; //Internal module in Node.js

// import fs from "fs" also works 

// fs - used for file system operations
// http - used for creating HTTP servers and clients
// path - used for working with file paths. 
// os - used for retrieving operating system-related information 

// const note = process.argv[2]; 
// const newNote = {
//   content: note, 
//   id: new Date()
// };

// console.log(count(2));
// console.log(others());
// wait(3000).then(() => {
//   console.log("Promise Resolved!"); 
// })
// .catch((err) => {
//   console.log("Promise Rejected!");
// });
// console.log(newNote.content, newNote.id);

// Module is a self-contained piece of code that could be a function, an object, or a series of instructions created to perform a specific operation. 
// Modules can be user-created, internal modules, and third-party modules like npm packages. 
// Internal modules are built into node.js and can be accessed using require or import. 

// Creating a new command under the bin field. The command is note. 
// npm link links the command so that it can be executed from anywhere in the terminal

// A hashbang is a special type of comment that tells the OS about the interpreter to use when script is running. 

// All commands in the terminal live under the bin field. 
// type field in package json specifies whether to have commonJS require keyword for importing modules or to have ES6 module syntax for importing and exporting modules.