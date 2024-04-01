$(document).ready(function() {
    // Queries the Json file for data
    $.ajax({
        type: "GET",
        url: "./data.json",
        dataType: "json",
        success: function(responseData, status){
        var output = "";  
        // for each bit of info on the lab, create html data to display it
        $.each(responseData.Labs, function(i, item) {
            output += '<a href=\"'+item.href+'\">';
            output += '<img src=\"'+item.source+'\"';
            output += " alt=\""+item.alt+"\" class=\""+item.class+"\">"
            output += '</a>';
        });

        // for each bit of info for TBA images, create html to display it
        $.each(responseData.TBA, function(i, item) {
            output += '<img src=\"'+item.source+'\" alt=\"'+item.alt+'\" class=\"'+item.class+'\">'
        })
    
    // use Jquery to add transitions in text displaying
    $('#jsonHere').html(output);
    $("#jsonHere").slideDown(1500);
    $("#projectHead").fadeIn(1000);
    $("#projFoot").delay(1300).fadeIn(1000);

    
    }, error: function(msg) {
    alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
    });
});

$(document).ready(function() {

})
