const socket = io.connect('http://10.0.70.207:8000');

const configAreas = [];
configAreas.push({
  cityId: 1,
  cityName: 'תל אביב',
  cityArea: 'מרכז',
});
configAreas.push({
  cityId: 2,
  cityName: 'רמת גן',
  cityArea: 'מרכז',
});
configAreas.push({
  cityId: 3,
  cityName: 'אילת',
  cityArea: 'דרום',
});
configAreas.push({
  cityId: 4,
  cityName: 'באר שבע',
  cityArea: 'דרום',
});
configAreas.push({
  cityId: 5,
  cityName: 'חיפה',
  cityArea: 'צפון',
});
configAreas.push({
  cityId: 6,
  cityName: 'חיפה',
  cityArea: 'צפון',
});
configAreas.push({
  cityId: 7,
  cityName: 'שדרות',
  cityArea: 'עוטף עזה',
});
configAreas.push({
  cityId: 8,
  cityName: 'זיקים',
  cityArea: 'עוטף עזה',
});
configAreas.push({
  cityId: 9,
  cityName: 'בית שמש',
  cityArea: 'שפלה',
});
configAreas.push({
  cityId: 10,
  cityName: 'רמלה',
  cityArea: 'שפלה',
});
var bkg = chrome.extension.getBackgroundPage();

function notify(data, title, callback) {
  var options = {
    title: title,
    message: data,
    type: 'basic', // Which type of notification to display - https://developer.chrome.com/extensions/notifications#type-TemplateType
    iconUrl: 'alert.jpg', // A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
  };
  // The first argument is the ID, if left blank it'll be automatically generated.
  // The second argument is an object of options. More here: https://developer.chrome.com/extensions/notifications#type-NotificationOptions
  return chrome.notifications.create('', options, callback);
}

function getAlertedCities(data) {
  //notify(data.event, 'Testing', callback);
  let citiesAlerted = configAreas.filter(function(city) {
    return data.polygon.includes(city.cityId);
  });

  let alertMessage = 'שים לב התרעה בישובים: ';
  citiesAlerted.forEach(city => {
    alertMessage += city.cityName + ', ';
  });
  return alertMessage.substring(0, alertMessage.length - 2);
}

socket.on('missile', function(data) {
  alert(getAlertedCities(data));
});

socket.on('nonErgant', function(data) {
  notify(getAlertedCities(data), 'שים לב!', callback);
});

callback = function callbackFunc() {};
