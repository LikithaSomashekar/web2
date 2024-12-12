$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        $.ajax({
            url: "submit.php",
            type: "POST",
            data: $(this).serialize(),
            success: function (response) {
                $("#result").html(response).fadeIn();
            },
            error: function () {
                $("#result").html("An error occurred. Please try again.").fadeIn();
            },
        });
    });
});
