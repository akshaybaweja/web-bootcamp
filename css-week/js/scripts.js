// window.onload = function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {

//     var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=ce5184d98dd778aa5be8fb2e7af4f5d1";
//     var request = new XMLHttpRequest();

//     request.open('GET', url, true);

//     request.onload = function () {
//         var data = JSON.parse(this.response);
//         document.getElementById("location").innerHTML = data.name;
//         var tempreature = Math.round(1.8 * (data.main.temp - 273) + 32);
//         document.getElementById("tempreature").innerHTML = tempreature.toString() + "°";
//         document.getElementById("description").innerHTML = data.weather[0].main;
//         document.getElementById("container-bg").style.background = "url(" + encodeURI('https://source.unsplash.com/1920x1080/?' + "New York landmark") + ")";
        
//         if (data.dt > data.sys.sunset) {
//             document.body.classList.add("body-night");
//             document.getElementById("weather-data").style.color = "white";
            
//             var rays = document.getElementsByClassName("ray");
//             for (var i = 0; i < rays.length; i++) {
//                 rays[i].style.display = "none";
//             }

//             var circle = document.getElementById("innerCircle").style;
//             circle.stroke = "#f5f2d0";
//             circle.fill = "#f5f2d0";            

//             document.getElementById("sun").style.display = "block";

//         } else {
//             document.body.classList.remove("body-night");
//             document.getElementById("weather-data").style.color = "black";
            
//             var rays = document.getElementsByClassName("ray");
//             for (var i = 0; i < rays.length; i++) {
//                 rays[i].style.display = "block";
//             }

//             var circle = document.getElementById("innerCircle").style;
//             circle.stroke = "#e65c00";
//             circle.fill = "#F9D423";

//             document.getElementById("sun").style.display = "block";
//         }
//     }

//     request.send();
// }