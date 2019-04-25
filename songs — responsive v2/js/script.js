// ---Responsive Main Menu--------------------------------
(function($) {
    $(document).ready(function() {
        // Cache the elements we'll need
        var menu = $('#cssmenu');
        var menuList = menu.find('ul:first');
        var listItems = menu.find('li').not('#responsive-tab');

        // Create responsive trigger
        menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

        // Toggle menu visibility
        menu.on('click', '#responsive-tab', function() {
            listItems.slideToggle('fast');
            listItems.addClass('collapsed');
        });
    });
})(jQuery);

// ---Scroller-----------------------------------------
$(document).ready(function() {
    //fade in/out based on scrollTop value
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#scroller').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// ---Preloader-----------------------------------------
$(window).load(function() {
    $("#loaderInner").fadeOut();
    $("#loader").delay(400).fadeOut("slow");
});

// ---Position Indicator--------------------------------
(function($, window, document, undefined) {
    $.extend({
        scrolline: function(options) {
            var defaults = {
                backColor: '#ecf0f1',
                direction: 'horizontal',
                frontColor: '#DC3023',
                opacity: 0.5,
                position: 'top',
                reverse: false,
                weight: 3,
                zindex: 10,
                scrollEnd: function() {}
            };

            function Plugin(options) {
                this.params = $.extend(defaults, options);
                this.$back = $(document.createElement('div'));
                this.$front = $(document.createElement('div'));
                this.init();
            }

            Plugin.prototype = {
                init: function() {
                    var self = this,
                        tBack, rBack, bBack, lBack, bgBack,
                        tFront, rFront, bFront, lFront, bgFront;

                    // Direction and position
                    if (self.params.direction != 'vertical') self.params.direction = 'horizontal';
                    if (self.params.direction == 'vertical' && self.params.position != 'right') self.params.position = 'left';
                    if (self.params.direction == 'horizontal' && self.params.position != 'bottom') self.params.position = 'top';

                    if (self.params.direction == 'vertical') {
                        bBack = tBack = 0;
                        if (self.params.position == 'right') {
                            rBack = 0;
                            lBack = 'auto';
                        } else {
                            rBack = 'auto';
                            lBack = 0;
                        }
                    } else {
                        rBack = lBack = 0;
                        if (self.params.position == 'bottom') {
                            tBack = 'auto';
                            bBack = 0;
                        } else {
                            tBack = 0;
                            bBack = 'auto';
                        }
                    }

                    if (self.params.reverse && self.params.reverse === true) {
                        if (self.params.direction == 'vertical') {
                            bFront = rFront = lFront = 0;
                            tFront = 'auto';
                        } else {
                            bFront = rFront = rFront = 0;
                            lFront = 'auto';
                        }
                    } else {
                        tFront = lFront = 0;
                        bFront = rFront = 'auto';
                    }

                    self.$front.css({
                        background: self.params.frontColor,
                        bottom: bFront,
                        height: 0,
                        left: lFront,
                        margin: 0,
                        overflow: 'hidden',
                        padding: 0,
                        position: 'absolute',
                        right: rFront,
                        top: tFront,
                        width: 0
                    }).appendTo(self.$back);

                    self.$back.css({
                        background: self.params.backColor,
                        bottom: bBack,
                        height: 0,
                        left: lBack,
                        opacity: self.params.opacity,
                        margin: 0,
                        overflow: 'hidden',
                        position: 'fixed',
                        padding: 0,
                        right: rBack,
                        top: tBack,
                        width: 0,
                        zIndex: self.params.zindex,
                    }).appendTo('body');

                    $(window).on("load resize scroll orientationchange", function() {
                        self.scrollListener();
                    });
                },

                scrollListener: function() {
                    var self = this,
                        hWin = $(window).height(),
                        wWin = $(window).width(),
                        hDoc = $(document).height(),
                        scrollValue = $(window).scrollTop(),
                        wBack, hBack, wFront, hFront, scrollineVal, wRef;

                    if (self.params.direction == 'vertical') {
                        scrollineVal = (scrollValue + hWin) * hWin / hDoc;
                        wBack = self.params.weight;
                        hBack = wRef = hWin;
                        wFront = self.params.weight;
                        hFront = scrollineVal;
                    } else {
                        scrollineVal = (scrollValue + hWin) * wWin / hDoc;
                        wBack = wRef = wWin;
                        hBack = self.params.weight;
                        wFront = scrollineVal;
                        hFront = self.params.weight;
                    }

                    self.$back.css({
                        height: hBack,
                        width: wBack
                    });
                    self.$front.css({
                        height: hFront,
                        width: wFront
                    });

                    if (scrollineVal >= wRef) {
                        self.params.scrollEnd();
                    }
                }
            };

            new Plugin(options);
        }
    });
})(jQuery, window, document);

// float aside
/*
$(function() {
    var offset = $("aside").offset();
    var asideHeight = $("aside").outerHeight();
    var docHeight = $(document).outerHeight();
    var footerHeight =$("footer").outerHeight();
    var topPadding = 15;


  $(window).scroll(function() {

    if ($(window).scrollTop() > asideHeight) {
      $("aside").stop().animate({
        marginTop: $(window).scrollTop() + offset.top + topPadding
      });
    }
    else {
      $("aside").stop().animate({
        marginTop: 0
      });
    }
  });
});
*/

