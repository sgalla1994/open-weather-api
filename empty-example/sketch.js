var weather;
var input;

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var APIKey = '&APPID=305d30eda03f741a83ca1e076644ffeb&';
var units = 'units=metric'; 

function setup() {
    createCanvas(800,800);
    
    var button = select('#submit');
    button.mousePressed(weatherAsk);
    
    input = select('#city');
}

function weatherAsk() {
        var url = api + input.value() + APIKey + units;
        loadJSON(url, gotData);
}

function gotData(data) {
		weather = data;
}

function draw() {
    background(255);
    
    if (weather) {
       
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        var temp_min = weather.main.temp_min;
        var temp_max = weather.main.temp_max;
        var wind_speed = weather.wind.speed;
        var wind_degrees = weather.wind.deg;
        var coordlon = weather.coord.lon;
        var coordlat = weather.coord.lat;
        
        var element = document.getElementById("id01");
        element.innerHTML = 'The temperature right now is ' + temp + ' Degrees Celsius.';
        
        var element = document.getElementById("id02");
        element.innerHTML = 'The humidity right now is ' + humidity + '%.';
        
        var element = document.getElementById("id03");
        element.innerHTML = 'The minimum temperature today is ' + temp_min + ' Degrees Celsius.';
        
        var element = document.getElementById("id04");
        element.innerHTML = 'The maximum temperature today is ' + temp_max + ' Degrees Celsius.';
        
        var element = document.getElementById("id05");
        element.innerHTML = 'The wind speed today is ' + wind_speed + 'miles per hour and it is moving at ' + wind_degrees + ' Degrees.';
        
        var element = document.getElementById("id06");
        element.innerHTML = 'The longitude for the chosen country is ' + coordlon + ' and the latitude is ' + coordlat + '.';
        
        //humidity
        ellipse(200,300, temp, temp);
        //temperature
        ellipse(600,300, humidity, humidity);
        //temp_min
        rect(175,600, humidity, humidity);
        //temp_max
        rect(575,600, humidity, humidity);   
    }
}