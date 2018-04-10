$(document).ready(function(){
    $('#need-img').on("click", function (event) {
        event.preventDefault();
        $('#imgModal').modal('toggle');
    }
    )

    $('.img-option').on("click", function (event) {
        event.preventDefault();
        $('#photo').val($(this).children($('<img>')).attr('src'));
        $('#imgModal').modal('toggle');
    }
    )

    $("#submit").on("click", function (event) {
        event.preventDefault();
        if ($("#name").val() == "" || $("#photo").val() == "" || $(".chosen-select") == "Please Choose...") {
            $("#match-name").text('Form incomplete: Please Fill Out All Options');
            $("#match-img").attr('src', '../images/lama.jpg');
            $('#myModal').modal('toggle');
        }
        else {
            var newProfile = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };

            $.post("/api/friends", newProfile,
                function (data) {
                    if (data) {
                        $("#match-name").text('You Matched: ' + data.name);
                        $("#match-img").attr('src', data.photo);
                        $('#myModal').modal('toggle');
                    }
                    else {
                        $("#match-name").text("Error - Please try again");
                        $("#match-img").attr('src', '../images/frog.png');
                        $('#myModal').modal('toggle');
                    }
                    $("#name").val("");
                    $("#photo").val("");
                    $(".chosen-select").val('0');
                });
        }

    });
})