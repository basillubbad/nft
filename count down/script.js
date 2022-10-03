let $days = $('#days_left')
let $hours = $('#hours_left')
let $mins = $('#mins_left')
let $secs = $('#secs_left')

var end = new Date('01/01/2022 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementsByTagName('h1')[0].innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);




      $("#timer").html("<div class='days'><div class='numbers day'>"+days+"</div>days</div>" + 
      "<div class='hours'><div class='numbers hour'>"+hours+"</div>hours</div>" + 
      "<div class='minutes'><div class='numbers min'>"+minutes+"</div>minutes</div>" + 
      "<div class='seconds'><div class='numbers sec'>"+seconds+"</div>seconds</div>")

    }

    timer = setInterval(showRemaining, 1000);



    



