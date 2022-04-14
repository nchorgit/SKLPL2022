$(document).ready(function () {
    $("#searchopen").click(function () {
        $(".searchpl2").slideToggle("slow");
    })
};
});

$(document).ready(function () {
    $("#mlines").click(function () {
        $(".dropm-out").slideToggle("slow");
    })
};
});
$("body").click(function () {
    $(".hide").fadeOut()
}; $(".search .closep").fadeOut(); $(".bgblack").fadeOut();
});
$(".pimg2bg").click(function () {
    $(".pimg2").fadeOut()
}; $(".pimg2bg").fadeOut();
});
$(".pimg2").click(function () {
    $(".pimg2").fadeOut()
}; $(".pimg2bg").fadeOut();
});
$(".closep").click(function () {
    $(".pimg2").fadeOut()
}; $(".pimg2bg").fadeOut(); $(".bgblack").fadeOut(); $(".hide").fadeOut(); $(".search .closep")
.fadeOut();
});
$(".pimg").click(function () {
    $(".pimg2").fadeIn()
}; $(".pimg2bg").fadeIn();
});
$(".stext").keyup(function () {
    $(".search .closep").fadeIn()
}; $(".bgblack").show(); $(".hide p").hide();
});
$(".fakos2").click(function () {
    $(".search").load("/search.html")
};
});
/*$(function() {$('.hide a').before('<img src="/media/images/low/marata-epitrapezio-nero-phghs-xhtos-6x1.5l.jpg" class="flickr" />')};
        });*/
