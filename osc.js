var osc = require("osc");
var Keyboard = require("node-keylogger");
var k = new Keyboard("event2");

var udpPort = new osc.UDPPort({
    // This is the port we're listening on.
    localAddress: "127.0.0.1",
    localPort: 57121,

    // This is where sclang is listening for OSC messages.
    remoteAddress: "127.0.0.1",
    remotePort: 57120,
    metadata: true
});

// Open the socket.
udpPort.open();

// Every second, send an OSC message to SuperCollider
function messg(args) {
    const { keyCode } = args;
    console.log(keyCode)
    
    var msg = {
        address: "/hello/from/oscjs",
        args: [
            {
                type: "f",
                value: keyCode
            }
        ]
    };

    console.log(
        "Sending message",
        msg.address,
        msg.args,
        "to",
        udpPort.options.remoteAddress + ":" + udpPort.options.remotePort
    );
    udpPort.send(msg);
}

// k.on("keydown", messg);
// k.on("keyup", console.log);
k.on("keypress", messg);
// k.on("error", console.error);
