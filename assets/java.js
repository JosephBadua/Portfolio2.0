let counter = 0;

$(document).ready(function() {
    $(".jumbotron").hide();
        setInterval(function() {
            if (counter < 25) {
                counter++;
                $(".counter").text(counter + "%");
            } else if (counter < 50 ) {
                counter++;
                $(".counter").text(counter + "%")
                $("div.loader").css("border-bottom", "16px solid #3498db");
            } else if (counter < 75) {
                counter++;
                $(".counter").text(counter + "%")
                $("div.loader").css("border-top", "16px solid #3498db");
            } else if (counter < 100) {
                counter++;
                $(".counter").text(counter + "%")
                $("div.loader").css("border-right", "16px solid #3498db");
            }  else if (counter < 130) {
                counter++
                $("div.loader").css("border-left", "16px solid #3498db");
                $("div.loader").animate({opacity: '0'}, "slow");
                $(".hello").animate({opacity: '0'}, "slow");
                $(".counter").animate({opacity: '0'}, "slow");
                return;
            }  else if(counter === 130) {
                $(".jumbotron").show();
                $(".jumbotron").addClass("fade");
                $(".title").addClass("entrance");
                $(".name").addClass("tracking");
                $(".preload").hide();
            } 
            },);
});