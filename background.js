const socket = io.connect('http://10.0.70.207:8000');

function notify(data,title, callback) {
    var options = {
        title: "Alert!",
        message: data,
        type: "basic", // Which type of notification to display - https://developer.chrome.com/extensions/notifications#type-TemplateType
        iconUrl: "alert.jpg" // A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
    };

    // The first argument is the ID, if left blank it'll be automatically generated.
    // The second argument is an object of options. More here: https://developer.chrome.com/extensions/notifications#type-NotificationOptions
    return chrome.notifications.create("", options, callback);
}

socket.on('missile', function(data) {
    notify(data,"Testing",callback);
});

callback=function callbackFunc(){

}
