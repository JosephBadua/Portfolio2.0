let counter = 0;

$(document).ready(function() {
    $(".work").hide();
    $(".Joseph").hide();
    $(".all1").hide();
    $(".section").hide();
    $(".all").hide();
    $(".picture").hide();
    $(".jumbotron").hide();
    $(".goRight").hide();
    $(".borderRight").hide();
    $(".descriptionText1").hide();
    $(".descriptionText2").hide();
    $(".descriptionText3").hide();
    $(".descriptionText4").hide();
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
            }  else if(counter < 180) {
                console.log(counter);
                counter++;
                $(".jumbotron").show();
                $(".jumbotron").addClass("fade");
                $(".title").addClass("entrance");
                $(".name").addClass("tracking");
                $(".preload").hide();
            }   else if(counter < 220) {
                counter++;
                $(".section").show();
                $(".picture").show();
                $(".descriptionText1").show();
                $(".descriptionText1").addClass("fade1");
            }   else if(counter < 260) {
                $(".name").hide();
                $(".sub-name").hide();
                counter++;
                $(".descriptionText2").show();
                $(".descriptionText2").addClass("fade1");
            }   else if(counter < 300) {
                counter++;
                $(".descriptionText3").show();
                $(".descriptionText3").addClass("fade1");
            }   else if(counter < 340) {
                counter++;
                $(".descriptionText4").show();
                $(".descriptionText4").addClass("fade1");
            }   else if(counter < 380) {
                counter++;
                $(".descriptionText1").addClass("out");
                $(".descriptionText2").addClass("out");
                $(".descriptionText3").addClass("out");
                $(".descriptionText4").addClass("out");
            }   else if(counter < 420) {
                counter++;
                $(".line").hide();
                $(".goRight").show();
                $(".goRight").addClass("swing");
                $(".borderRight").show();
                $(".all").show();
                $(".all").addClass("fades");
                $(".borderRight").addClass("fades");
                $(".Joseph").show();
                $(".all1").show();
                $(".work").show();
                $(".Joseph").addClass("scale-in");
                $(".all1").addClass("scale-in");
                $(".work").addClass("scale-in");
            }  
            }, 50);
});