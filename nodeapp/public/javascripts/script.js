$("#search").keyup(function() {

    var value = $(this).val().toUpperCase();

    $("table tr").each(function(index) {
        if (index != 0) {

            $row = $(this);
            var name = $row.find(".name").text().toUpperCase();

            if(name.includes(value)){
                $row.show()
            }else{
                $row.hide()
            }
        }
    });
});


$(document).ready(() => {
    var home = $(".home").text();
    switch (home) {
        case "Werder Brema":
            $(".home").find("img").attr("src", "https://i.imgur.com/AHoepHa.png");                   
            break;
        case "Chelsea":
            $(".home").find("img").attr("src", "https://i.imgur.com/fxGtaon.png");                  
            break;
        case "West Ham":
            $(".home").find("img").attr("src", "https://i.imgur.com/pOIx6Jf.png")                     
            break;    
        default:
            break;
    }
});

$(document).ready(() => {
    var away = $(".away").text();
    switch (away) {
        case "Werder Brema":
            $(".away").find("img").attr("src", "https://i.imgur.com/AHoepHa.png");                    
            break;
        case "Chelsea":
            $(".away").find("img").attr("src", "https://i.imgur.com/fxGtaon.png");                  
            break;
        case "West Ham":
            $(".away").find("img").attr("src", "https://i.imgur.com/pOIx6Jf.png")                     
            break;    
        default:
            break;
    }
});


$(document).ready(() => {
for (var e in $(".team")) {
    if ($(".team").hasOwnProperty.call($(".team"), e)) {
        var element = $(".team")[e];
        if($(element).text() == "Werder Brema"){
            var r_name = $(element).text().replace("Werder Brema","W. Brema");
            $(element).text(r_name);
            if($(element).next("td").find("img")){
                $(element).next("td").find("img").attr("src", "https://i.imgur.com/AHoepHa.png");
            }if($(element).prev("td").find("img")){
                $(element).prev("td").find("img").attr("src", "https://i.imgur.com/AHoepHa.png");
            }
        }if($(element).text() == "Chelsea"){
            if($(element).next("td").find("img")){
                $(element).next("td").find("img").attr("src", "https://i.imgur.com/fxGtaon.png");
            }if($(element).prev("td").find("img")){
                $(element).prev("td").find("img").attr("src", "https://i.imgur.com/fxGtaon.png");
            }
        }if($(element).text() == "West Ham"){
            if($(element).next("td").find("img")){
                $(element).next("td").find("img").attr("src", "https://i.imgur.com/pOIx6Jf.png");
            }if($(element).prev("td").find("img")){
                $(element).prev("td").find("img").attr("src", "https://i.imgur.com/pOIx6Jf.png");
            }
        }           
    }
}
for (var e in $(".status")) {
if ($(".status").hasOwnProperty.call($(".status"), e)) {
    var element = $(".status")[e];
        if($(element).text() == "no"){
           var temp = $(element).parents("div")[1];
           $(temp).find(".home_goals").text("/").addClass("text-secondary");
           $(temp).find(".away_goals").text("/").addClass("text-secondary");
        };
    };
};

for (const e in $(".matchday")) {
    if ($(".matchday").hasOwnProperty.call($(".matchday"), e)) {
        var element = $(".matchday")[e];
    }
}

});

$(document).ready(() => {
    var seen = {};
    $('.matchday').each(function() {
        var txt = $(this).text();
        if (seen[txt])
            $(this).remove();
        else
            seen[txt] = true;
    });
});

$(document).on("click", () => {
    if($("#playedcheck").is(':checked')){
        $("#played").val("yes");
        console.log($("#played").val());
    }else{
        $("#played").val("no");
    }
});

$(document).ready(() => {
    if($("#played").val() == "yes"){
        $("#playedcheck").prop("checked", true);
    }else{
        $("#playedcheck").prop("checked", false);
    }});

// $("#updateTable").on("click", () => {

//     $(".update").show();
//     $("#updateTable").remove();

//     var points = $(".points");

//     $(points).each( (index, element) => {
//         var text = $(element).text();
//         $(element).append('<input style="max-width: 8%; margin-left: 5%" class="text-align-center" id="points" name="points" type="number" value="'+ $(element).text() +'">');
        
//     });
// });