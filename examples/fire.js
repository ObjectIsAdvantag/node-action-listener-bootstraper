var ActionListenerPattern = require('node-action-listener');

var lib = new ActionListenerPattern();

lib.addListener(function(event) {
    console.log("new event received: " + JSON.stringify(event));
});

lib.fireEvent({'id':1, 'message':"this is it, fired!"});