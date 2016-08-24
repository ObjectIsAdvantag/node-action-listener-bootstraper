var ActionListenerPattern = require('node-action-listener');

var lib = new ActionListenerPattern();

lib.addListener(function(event) {
    console.log("new event received: " + JSON.stringify(event));
});

var times = 0;
lib.addListener(function(event) {
    times++;
    console.log("invoked: " + times);
});

lib.fireEvent({'id':"first", 'message':"this is it, fired!"});

lib.fireEvent({'id':"secund", 'message':"again!!!"});