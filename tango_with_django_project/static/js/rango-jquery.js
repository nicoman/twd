$(document).ready(function() {
    // # select by html ID
    $("#about-btn").click( function(event) {
        alert('You cicked the button using JQuery!');
    });
    // . Select a class
    $(".ouch").click (function(event) {
        alert("You clicked me! ouch!");
    });
    // By tag selector
    $("p").hover( function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'blue');
    });
    // Add a class
    $("#about-btn").addClass('btn btn-primary');
    //
    $("#about-btn").click( function(event) {
        msgstr = $("#msg").html()
            msgstr = msgstr + "o"
            $("#msg").html(msgstr)
    });
});