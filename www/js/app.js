
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    var $ = require('zepto');

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    // require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    // require('./install-button');

    // Write your app here.
    // require('./something');

    var $app_menu = $("#app-menu");
    var $app_panel = $('#app-panel');

    $("#open-menu").on('click', function (e) {
        e.preventDefault();

        if ($app_menu.attr("data-state") === "drawer") {
            $app_menu.attr("data-state", "none").css({
                marginLeft: '-80%'
            });

            $app_panel.css({
                marginLeft: 0
            });            
        } else {
            $app_menu.attr("data-state", "drawer").css({
                marginLeft: 0
            });

            $app_panel.css({
                marginLeft: '80%'
            });
        }
    });
});

