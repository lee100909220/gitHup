/**
 * Created by Administrator on 2016/7/15.
 */
$(function() {



    //鼠标滚轮事件
    function mousewheel(obj, upfun, downfun) {
        if (obj.attachEvent) {
            obj.attachEvent("onmousewheel", scrollFn);
            //IE、 opera
        } else if (obj.addEventListener) {
            obj.addEventListener("mousewheel", scrollFn, false);
            //chrome,safari -webkit
            obj.addEventListener("DOMMouseScroll", scrollFn, false);
            //firefox -moz-
        }
        function scrollFn(e) {
            var ev = e || window.event;

            if (ev.preventDefault)
                ev.preventDefault();
            //阻止默认浏览器动作(W3C)
            else
                ev.returnValue = false;
            //阻止默认浏览器动作IE


            if (ev.detail == -3 || ev.wheelDelta == 120) {
                if (upfun) {
                    upfun.call(obj);
                }
            } else if (ev.detail == 3 || ev.wheelDelta == -120) {
                if (downfun) {
                    downfun.call(obj);
                }
            }

        }

    }



    /////////顶部导航条
    var hbtn = $(".header-btn");
    var headers = $(".header-s");
    var btnflag = 1;
    hbtn.click(function() {
        if (btnflag == 1) {
            $(this).css("transform", "rotate(90deg)");
            $(this).css("transform", "rotate(90deg)");
            $(this).css("transform", "rotate(90deg)");
            $(this).css("transform", "rotate(90deg)");
            btnflag = 2;
        } else {
            $(this).css("transform", "rotate(0deg)");
            btnflag = 1;
        }
        headers.slideToggle(500);
        $(".header-s li p").each(function(i) {
            $(this).css({
                animation: "linew 0.5s ease 1 " + 0.2 * i + "s forwards"
            })
        })
    })

    $("#header").attr("ani", "ani4");
    $("#banner").attr("ani", "ani5");


    $(".phonepic img").mouseover(function() {
        $(".webew").fadeToggle(300)
    })
    $(".webew").mouseout(function() {
        $(this).fadeToggle(300)
    })


    $(window).scroll(function(e) {
        var sct = $("body").scrollTop();


        var f1 = $("#floor1")[0].offsetTop;
        if (sct > (f1 - $(window).height() / 2)) {
            $("#header").css("background", "rgba(23,24,32,0.8)")
            $("#floor1 .hh").attr("ani", "ani5")
            $("#floor1 .content").attr("ani", "ani7")
        } else {
            $("#header").css("background", "rgba(23,24,32,0)")
        }



        var f2 = $("#floor2")[0].offsetTop;
        //console.log(aa)
        if (sct > (f2 - $(window).height() / 2)) {
            $("#floor2 .content").attr("ani", "ani2")
        }

        var f3 = $("#floor3")[0].offsetTop;
        //console.log(aa)
        if (sct > (f3 - $(window).height() / 2)) {
            $("#floor3 .content").attr("ani", "ani3")
            $("#floor3 .zbox-out").each(function(i) {
                $(this).css({
                    animation: "ani6 1.2s ease-in-out " + i * 0.2 + "s 1 forwards"
                })
            })
        }

        var f4 = $("#floor4")[0].offsetTop;
        //console.log(aa)
        if (sct > (f4 - $(window).height() / 2)) {
            //alert(1)
            $("#floor4 .text .fa").each(function(i) {
                $(this).css({
                    animation: "ani8 1.2s ease-in-out " + i * 0.2 + "s 1 forwards"
                })
            })
        }



    })

    $("#floor3 .zhans .zbox-inner").hover(function() {

        $(this).find(".left").stop(true).animate({
            width: "50%"
        }, 800)
        $(this).find(".right").stop(true).animate({
            width: "50%"
        }, 800)
        $(this).find("p").fadeIn(200)
    }, function() {
        $(this).find("p").fadeOut(200)
        $(this).find(".left").stop(true).animate({
            width: "0%"
        }, 800)
        $(this).find(".right").stop(true).animate({
            width: "0%"
        }, 800)

    })

    var positionArr = [];
    $(".fff").each(function(i) {
        positionArr.push($(this)[0].offsetTop)
    })

    $(".navli1").click(function() {
        var index = $(this).index();
        $("body").animate({
            scrollTop: positionArr[index]
        }, 800)
    })


    $(".navli2").click(function() {
        headers.slideToggle(500);
        var index = $(this).index();
        for (var i = $(".header-s li p").length - 1; i > 0; i--) {
            $(".header-s li p").eq(i).css({
                animation: "lineh 0.5s ease 1 " + 0.2 * i + "s forwards"
            })
        }
        $("body").animate({
            scrollTop: positionArr[index]
        }, 800)
    })


    $("#logo").click(function() {
        $("body").animate({
            scrollTop: 0
        }, 800)
    })
    $(".next").click(function() {
        var index = $(this).index();

        if (index == 1) {

            $("body").animate({
                scrollTop: positionArr[index - 1]
            }, 800)
        } else if (index == 3) {

            $("body").animate({
                scrollTop: positionArr[index - 2]
            }, 800)
        } else if (index == 4) {

            $("body").animate({
                scrollTop: positionArr[index - 2]
            }, 800)
        }

    })

    var topArr = [0]
    $(".fff").each(function(i) {
        topArr.push(this.offsetTop)
    })

    var topFlag = true;
    var topNum = 0;
    mousewheel($(window)[0], function() {
        if (topFlag) {
            topFlag = false;
            topNum--;
            if (topNum < 0) {
                topNum = 0;
            }
            $("body").animate({
                scrollTop: topArr[topNum]
            }, 1000, function() {
                topFlag = true;
            });
        }

    }, function() {
        if (topFlag) {
            topFlag = false;
            topNum++;
            if (topNum == 5) {
                topNum = 4;
            }
            $("body").animate({
                scrollTop: topArr[topNum]
            }, 1000, function() {
                topFlag = true;

            });
        }


    })

})
