var Keyboard = require("node-keylogger");


var k = new Keyboard("event2");


k.on("keyup", console.log);
k.on("keydown", console.log);
k.on("keypress", console.log);
k.on("error", console.error);
