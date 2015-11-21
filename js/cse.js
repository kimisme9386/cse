var CSE_SETTING = {
    key: 'your google cse key',
    near_element_id: 'demo_div',
    near_position: 'bottom',
    cse_input_width: 180,
    result_width: 400
};
//input your element id, gogole cse will show near the element.
var CSE_LOADED = false;
var CSE_CHK_BODY_W = "";

jQuery.noConflict();

jQuery(function () {
    //google cse
    if (jQuery("#cse-search-container").length > 0) {
        CSE.resetPosition(true);
    }
});

//<![CDATA[
google.load("search", "1", {language: 'zh-TW', style: google.loader.themes.ESPRESSO});
//]]>

google.setOnLoadCallback(function () {
    var customSearchControl = new google.search.CustomSearchControl(CSE_SETTING.key);
    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);

    //customSearchControl.setLinkTarget(google.search.Search.LINK_TARGET_SELF);
    var options = new google.search.DrawOptions();
    options.setSearchFormRoot('cse-search-form');

    options.setAutoComplete(true);
    customSearchControl.draw('cse', options);

    jQuery("#cse-search-container .gsc-input").css("background", "");
    jQuery("#cse-search-container .gsc-clear-button").hide();

    CSE.bindEnterEvent();
    CSE.bindSearchBtnEvent();
    CSE.bindClearBtnEvent();
    CSE_LOADED = true;

}, true);

var CSE = {
    bindEnterEvent: function () {
        jQuery("#cse-search-form input").eq(0).keydown(function (e) {
            e.stopPropagation();
            if (e.keyCode == 13) {
                if (this.value.length != 0) {
                    CSE.resizeResult();
                }

            }
        });
    },
    bindSearchBtnEvent: function () {
        jQuery("#cse-search-form input.gsc-search-button").click(function (e) {
            e.stopPropagation();
            if (jQuery("#cse-search-form input").eq(0).val().length != 0) {
                CSE.resizeResult();
            }
        });
    },
    bindClearBtnEvent: function () {
        jQuery("div.gsc-clear-button").click(function (e) {
            e.stopPropagation();
            jQuery("#cse_result").fadeOut(100);
        });
    },
    doCloseResult: function () {
        jQuery("#cse_result").fadeOut(100);
    },
    resizeResult: function () {
        var cseContainer = jQuery("#cse-search-container");
        var cseContainerPos = cseContainer.offset();
        var cse_result_top = cseContainerPos.top + jQuery("#cse-search-form input").height() + 25;
        if (window.matchMedia) {
            if (window.matchMedia("(min-width: 768px)").matches) {
                var cse_result_left = cseContainerPos.left;
                if ((cseContainerPos.left + jQuery("#cse_result").width()) > jQuery("body").width()) {
                    cse_result_left -= ((cseContainerPos.left + jQuery("#cse_result").width()) - jQuery("body").width() + 10);
                }
                jQuery("#cse_result").css({
                    top: cse_result_top,
                    left: cse_result_left,
                    width: CSE_SETTING.result_width + "px"
                }).fadeIn(1000);
            } else if (window.matchMedia("(max-width: 767px)").matches) {
                var cse_result_top = cseContainerPos.top + jQuery("#cse-search-form input").height() + 15;
                var cse_result_left = (jQuery("body").width() / 10) / 2;
                jQuery("#cse_result").css({top: cse_result_top, left: cse_result_left, width: "90%"}).fadeIn(1000);
            }
        } else {
            //jQuery("#cse_result").css("top", "37px").css("left", cse_pos.left + "px").css("width", "400px");
            jQuery("#cse_result").css({
                top: cse_result_top,
                left: cseContainerPos.left,
                width: CSE_SETTING.result_width + "px"
            }).fadeIn(1000);
        }
    },
    resetPosition: function (init) {
        if (CSE_LOADED == true) {
            if (init == true) {
                //var ready_remove = jQuery("#cse-search-container").parent().parent().parent().parent();
                jQuery("#cse-search-container").appendTo("body");
                jQuery("#cse_result").appendTo("body");
                jQuery("#cse-search-container #cse-search-form .gsc-input input").css({width:CSE_SETTING.cse_input_width+"px"});
                //ready_remove.hide();
            }
            var cseContainer = jQuery("#cse-search-container");
            var nearElement = jQuery("#" + CSE_SETTING.near_element_id);
            var nearElementOffSet = nearElement.offset();
            var containerPos = {};
            switch (CSE_SETTING.near_position) {
                case 'top':
                    containerPos.left = nearElementOffSet.left;
                    containerPos.top = nearElementOffSet.top - cseContainer.height();
                    break;
                case 'left':
                    containerPos.left = nearElementOffSet.left - cseContainer.width();
                    containerPos.top = nearElementOffSet.top;
                    break;
                case 'right':
                    containerPos.left = nearElementOffSet.left + nearElement.width()+10;
                    containerPos.top = nearElementOffSet.top;
                    break;
                default:
                    containerPos.left = nearElementOffSet.left;
                    containerPos.top = nearElementOffSet.top + nearElement.height();
            }
            jQuery("#cse-search-container").css({
                top: containerPos.top,
                left: containerPos.left,
                position: 'absolute'
            }).show();
        } else {
            setTimeout("CSE.resetPosition(" + true + ")", 500);
        }
    }
};

window.onresize = function (event) {
    if (CSE_CHK_BODY_W != jQuery("body").width()) {
        CSE_CHK_BODY_W = jQuery("body").width();
        //google cse
        if (jQuery("#cse-search-container").length > 0) {
            CSE.resetPosition(true);
        }
    }
};