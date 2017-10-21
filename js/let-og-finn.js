/*jslint browser: true */
/*global window, Snap */
function init() {
    'use strict';
    console.log("let-og-finn init");
    var s = new Snap("#SVG_let_og_finn");
    var group_active_zones = s.select("#g_active_zones");
    group_active_zones.addClass('show');

    function detectIE() {
        var ua = window.navigator.userAgent;
        /* Test values;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        */
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
        // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
        // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
        // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    var msie_version = detectIE();

    // workaround for browsers not supporting paint-order, namely internet explorer and edge among newer browsers
    if (msie_version !== false) {
        // msie browser detected, apply workaround
        var words = s.selectAll('#g_ord > text, #g_ord > use');
        var wordclones_container = s.select('#g_ord_clones');
        words.forEach(function (el) {
            var use = el.use();
            use.addClass('show');
            wordclones_container.append(use);
        });
    }

    var zones = group_active_zones.selectAll('path');
    zones.forEach(function (el) {
        el.click(function () {
            el.addClass('clicked');
            var t_id = this.attr("id").replace(/^z_/, "#t_");
            var text_el = s.select(t_id);
            text_el.addClass("show action");
            window.setTimeout(function () {
                text_el.removeClass("action");
            }, 710);
        });
    });
}
window.addEventListener("load", init, false);