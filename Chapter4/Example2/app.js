/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    "use strict";

    var addCommentFromInputBoxOne = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input_one input").val());
            $new_comment.hide();
            $(".comments_one").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input_one input").val("");
        }
    };

    var addCommentFromInputBoxTwo = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input_two input").val());
            $new_comment.hide();
            $(".comments_two").append($new_comment);
            $new_comment.fadeIn();
            $(".omment-input_two input").val("");
        }
    };

    $(".comment-input_one button").on("click", function (event) {
        addCommentFromInputBoxOne();
    });

    $(".comment-input_onet input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBoxOne();
        }
    });

    $(".comment-input_two button").on("click", function (event) {
        addCommentFromInputBoxTwo();
    });

    $(".comment-input_two").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBoxTwo();
        }
    });
};

$(document).ready(main);
