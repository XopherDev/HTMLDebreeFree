function GoToLogin() {

    $('#bodyId').addClass('animated slideOutLeft');
    $('#bodyId').fadeOut(200);

    var delayInMilliseconds = 200; //1/2 of a second

    setTimeout(function () {
        $.ajax({
            url: '../Login/GoToLogin',
            type: "GET",
            success: function (partialView) {
                $('#bodyId').removeClass('animated slideOutLeft');
                $('#bodyId').fadeIn(500);
                $('#bodyId').addClass('animated slideInRight');
                $('#bodyId').html(partialView);
            }
        });
    }, delayInMilliseconds);
   
}

function RegisterContactInfo() {
    $('#bodyId').addClass('animated slideOutLeft');
    $('#bodyId').fadeOut(200);

    var delayInMilliseconds = 200; //1/2 of a second

    setTimeout(function () {
        $.ajax({
            url: '../Login/RegisterContactInfo',
            type: "GET",
            success: function (partialView) {
                $('#bodyId').removeClass('animated slideOutLeft');
                $('#bodyId').fadeIn(500);
                $('#bodyId').addClass('animated slideInRight');
                $('#bodyId').html(partialView);
            }
        });
    }, delayInMilliseconds);

}

function GoToDashboard() {
    $('#bodyId').addClass('animated fadeOutUp');
    $('#bodyId').fadeOut(300);

    var delayInMilliseconds = 300; //1/2 of a second

    setTimeout(function () {
        $.ajax({
            url: '../Dashboard/GoToDashboard',
            type: "GET",
            success: function (partialView) {
                $('#bodyId').removeClass('animated slideOutLeft');
                $('#bodyId').fadeIn(500);
                $('#bodyId').addClass('animated slideInUp');
                $('#bodyId').html(partialView);
            }
        });
    }, delayInMilliseconds);

}




function GoToUserSetUp() {
    $('#bodyId').addClass('animated fadeOutUp');
    $('#bodyId').fadeOut(300);

    var delayInMilliseconds = 300; //1/2 of a second

    setTimeout(function () {
        $.ajax({
            url: '../Login/UsernameSetUp',
            type: "GET",
            success: function (partialView) {
                $('#bodyId').removeClass('animated slideOutLeft');
                $('#bodyId').fadeIn(500);
                $('#bodyId').addClass('animated slideInUp');
                $('#bodyId').html(partialView);
            }
        });
    }, delayInMilliseconds);

}


function AddressSetUp() {
    $('#bodyId').addClass('animated fadeOutUp');
    $('#bodyId').fadeOut(300);

    var delayInMilliseconds = 300; //1/2 of a second

    setTimeout(function () {
        $.ajax({
            url: '../Login/AddressSetUp',
            type: "GET",
            success: function (partialView) {
                $('#bodyId').removeClass('animated slideOutLeft');
                $('#bodyId').fadeIn(500);
                $('#bodyId').addClass('animated slideInUp');
                $('#bodyId').html(partialView);
            }
        });
    }, delayInMilliseconds);

}