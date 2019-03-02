function GoToJob() {
    $('#bodyId').addClass('animated fadeOutUp');
    $('#bodyId').fadeOut(300);

    var delayInMilliseconds = 300; //1/2 of a second

    setTimeout(function () {
        $.ajax({
            url: 'jobs.html',
            type: "GET",
            success: function (partialView) {
                $('#bodyId').removeClass('animated fadeOutUp');
                $('#bodyId').fadeIn(500);
                $('#bodyId').addClass('animated slideInUp');
                $('#bodyId').html(partialView);
            }
        });
    }, delayInMilliseconds);
}

function ViewContractJob() {
    window.location.href = "contractor_jobsview.html";
}