var spinnerStart = function () {
    var mainDiv = document.createElement('div');
    mainDiv.id = 'shadowBoxSpinner';
    mainDiv.className = 'shadow';
    var spinnerContainer = document.createElement('div');
    spinnerContainer.id = 'spinnercontainer';
    spinnerContainer.className = 'spinnercontainer';
    var spinner = document.createElement('div');

    spinner.className = 'inner-circles-loader';
    spinnerContainer.appendChild(spinner);

    document.body.appendChild(mainDiv);
    document.body.appendChild(spinnerContainer);
}

var spinnerStop = function () {
    document.getElementById('shadowBoxSpinner').remove();
    document.getElementById('spinnercontainer').remove();
}

function showLoadingBar() {
    waitingDialog.show();
    $("#loadingBarId").before("<div id=\"loadingBarBackdrop\" class=\"modal-backdrop fade in\" style=\"z-index: 9999\"></div>");
}

function hideLoadingBar() {
    waitingDialog.hide();
    $("#loadingBarId").prev("#loadingBarBackdrop").remove();
}

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div id="loadingBarId" class="modal fade" data-backdrop="false" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;z-index: 10000;">' +
        '<div id="preloader"><div id="loader"></div></div>' +
        '</div>');

    return {
        /**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Loading';
            }
            var settings = $.extend({
                dialogSize: 'm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }
            $dialog.find('h3').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }

            // Opening dialog
            $dialog.modal("show");
        },
        /**
		 * Closes dialog
		 */
        hide: function () {
            $dialog.modal("hide");
        }
    };

})(jQuery);