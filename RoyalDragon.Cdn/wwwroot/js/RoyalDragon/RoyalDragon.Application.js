var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MAF;
(function (MAF) {
    var Utils;
    (function (Utils) {
        /**
         * Get user thumbnail from abook url
         * @param id of the user
         */
        function UserThumbnail(id) {
            return "/abook/Telecom/GetEmployeeThumbnail/" + id;
        }
        Utils.UserThumbnail = UserThumbnail;
        // class Logout {
        //     constructor(elem) {
        //         $("body").html("<h2>Please press cancel button on the login window and close the tab or your browser.</h2>");
        //         $.ajax({
        //             url: $(elem).attr("href"),
        //             statusCode: {
        //                 401: () => { $("body").html("<h2>You are now logged out!</h2>"); }
        //             }
        //         });
        //         return false;
        //     }
        // }
        $.fn.konami = function (callback) {
            var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
            $(this).keydown(function (e) {
                kkeys.push(e.keyCode);
                if (kkeys.toString().indexOf(konami) >= 0) {
                    if (typeof (callback) !== "undefined") {
                        callback();
                    }
                    kkeys = [];
                }
                if (kkeys.toString().indexOf(konami) < 0) {
                    kkeys = [];
                }
            });
        };
        /**
         * init selector for modules. Detect many types and convert to JQuery object
         * http://stackoverflow.com/questions/28287499/jquery-check-if-variable-is-dom-element
         * http://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string
         * tested with these cases:
         * console.log(MAF.Utils.initSelector());
         * console.log(MAF.Utils.initSelector("#modal-lg"));
         * console.log(MAF.Utils.initSelector($("#modal-lg")));
         * console.log(MAF.Utils.initSelector(document.getElementById("#modal-lg")));
         * console.log(MAF.Utils.initSelector({}));
         *
         * @export
         * @param {*} [$container=undefined]
         * @returns
         */
        function initSelector($container) {
            if ($container === void 0) { $container = undefined; }
            if (($container instanceof jQuery && $container.length)
                || $container instanceof HTMLElement
                || (typeof $container === "string" || $container instanceof String)) {
                return $($container);
            }
            return $("body");
        }
        Utils.initSelector = initSelector;
        /**
         * load common components
         *
         * @export
         * @param {*} $container
         */
        function initCommonModules($container) {
            //TODO: re-use main module
            MAF.Phone.loadAll($container);
            MAF.Select2.loadAll($container);
            MAF.PeoplePicker.loadAll($container);
            MAF.XEditable.loadAll($container);
            MAF.AjaxButton.loadAll($container);
            MAF.CModal.loadAll($container);
            MAF.Badge.loadAll($container);
            MAF.Datatable.loadAll($container);
            MAF.DateLabel.loadAll($container);
            MAF.DateTimePicker.loadAll($container);
            MAF.LyncPresence.loadAll($container);
            MAF.MassAction.loadAll($container);
            MAF.Popover.loadAll($container);
            MAF.SidePanel.loadAll($container);
            MAF.Switch.loadAll($container);
            MAF.Tooltip.loadAll($container);
            MAF.DragDropFile.loadAll($container);
            MAF.CurrencyPicker.loadAll($container);
        }
        Utils.initCommonModules = initCommonModules;
        /**
         * This function is extracted from https:* github.com/aspnet/jquery-ajax-unobtrusive/blob/master/src/jquery.unobtrusive-ajax.js
         * and is capable of handling BOTH: convert string to function name and create new function from user-input javascript
         * For example:
         * Case 1: OnSuccess = "showResult" --> convert to function
         * Use: MAF.Utils.getFunction($(this).data('on-begin-callback'), ["xhr"]).apply(this, arguments);
         *
         * Case 2: OnComplete = "showResult(xhr.responseJSON);" --> convert to new antonymous function to run js script
         * function(xhr, status) {
         *    showResult(xhr.responseJSON);
         * }
         * Use: MAF.Utils.getFunction($(this).data('on-complete-callback'), ["xhr", "status"]).apply(this, arguments);
         *
         * @export
         * @param {any} code - function name or code
         * @param {Array<string>} argNames - list of params name
         * @param {any} thisArg -
         * @param {any} args - put arguments of original function
         * @returns
         */
        function execFunction(code, argNames, thisArg, args) {
            var fn = window, parts = (code || "").split(".");
            while (fn && parts.length) {
                fn = fn[parts.shift()];
            }
            if (typeof (fn) === "function") {
                return fn.apply(thisArg, args);
            }
            argNames.push(code);
            var newFunction = Function.constructor.apply(null, argNames);
            return newFunction.apply(thisArg, args);
        }
        Utils.execFunction = execFunction;
        /**
        * Execute a function by its string representation
        * Works with namespace names such as My.namespace.function
        */
        function executeFunctionByName(functionName, context) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return execFunction(functionName, [''], context, args);
        }
        Utils.executeFunctionByName = executeFunctionByName;
        function getAjaxErrorView() {
            var message = 'Something went wrong. Please contact 911.';
            return "<p class='text-center text-danger' style='padding:15px 0px;'>" + message + "</p>";
        }
        Utils.getAjaxErrorView = getAjaxErrorView;
    })(Utils = MAF.Utils || (MAF.Utils = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Utils;
    (function (Utils) {
        var Level = (function () {
            function Level() {
            }
            Level.success = "success"; //to compatible with JsonSuccess(...) from server
            Level.danger = "danger";
            Level.error = "error"; //to compatible with JsonError(...) from server
            Level.warning = "warning";
            Level.info = "info";
            return Level;
        }());
        function alertBuilder(level) {
            switch (level) {
                case Level.success:
                    return new AlertSuccess();
                case Level.warning:
                    return new AlertWarning();
                case Level.danger:
                    return new AlertDanger();
                case Level.error:
                    return new AlertDanger();
                case Level.info:
                    return new AlertInfo();
                default:
            }
        }
        var AlertLevel = (function () {
            function AlertLevel(title, level) {
                this.title = title;
                this.level = level;
            }
            return AlertLevel;
        }());
        var AlertSuccess = (function (_super) {
            __extends(AlertSuccess, _super);
            function AlertSuccess() {
                return _super.call(this, "Success", Level.success) || this;
            }
            return AlertSuccess;
        }(AlertLevel));
        var AlertWarning = (function (_super) {
            __extends(AlertWarning, _super);
            function AlertWarning() {
                return _super.call(this, "Attention", Level.warning) || this;
            }
            return AlertWarning;
        }(AlertLevel));
        var AlertDanger = (function (_super) {
            __extends(AlertDanger, _super);
            function AlertDanger() {
                return _super.call(this, "Error", Level.danger) || this;
            }
            return AlertDanger;
        }(AlertLevel));
        var AlertInfo = (function (_super) {
            __extends(AlertInfo, _super);
            function AlertInfo() {
                return _super.call(this, "Information", Level.info) || this;
            }
            return AlertInfo;
        }(AlertLevel));
        var Popup = (function () {
            function Popup(msg, level) {
                this.alert = alertBuilder(level);
                this.message = msg || "";
                this.tpl =
                    "<div class=\"popup alert alert-" + this.alert.level + "\" style=\"display:none;\">\n<button type=\"button\" class= \"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span>\n</button>\n<h4>" + this.alert.title + "!</h4>\n<p class=\"content\">" + this.message + "</p>\n</div>";
            }
            return Popup;
        }());
        function show(n) {
            var $tpl = $(n.tpl);
            $("body").append($tpl);
            $tpl.show(500);
            setTimeout(function () {
                $tpl.hide("fast").remove();
            }, 5000);
        }
        var JsonResult = (function () {
            function JsonResult() {
            }
            return JsonResult;
        }());
        Utils.JsonResult = JsonResult;
        /**
         * show result from the response of JsonSuccess or JsonError
         * auto detect status and display correct notification
         *
         * @export
         * @param {JsonResult} result
         */
        function showResult(result) {
            if (isValidResponse(result)) {
                show(new Popup(result.message, result.status));
            }
            else {
                showError("An error has ocurred or server response is unexpected.");
            }
        }
        Utils.showResult = showResult;
        /**
         * show warning notification
         *
         * @export
         * @param {string} message
         */
        function showWarning(message) {
            show(new Popup(message, Level.warning));
        }
        Utils.showWarning = showWarning;
        /**
         * show error notification
         *
         * @export
         * @param {string} message
         */
        function showError(message) {
            show(new Popup(message, Level.danger));
        }
        Utils.showError = showError;
        /**
         * show info notification
         *
         * @export
         * @param {string} message
         */
        function showInfo(message) {
            show(new Popup(message, Level.info));
        }
        Utils.showInfo = showInfo;
        /**
         * show success notification
         *
         * @export
         * @param {string} message
         */
        function showSuccess(message) {
            show(new Popup(message, Level.success));
        }
        Utils.showSuccess = showSuccess;
        /**
         * Validate a server response in json format
         * @param response - the server response
         * @return true if and only if response is not null and contains a status
         */
        function isValidResponse(response) {
            return response != null && response.status != null;
        }
    })(Utils = MAF.Utils || (MAF.Utils = {}));
})(MAF || (MAF = {}));
/// <reference path="typings/Lync/Lync.d.ts"/>
/// <reference path="Utils/Utils.ts"/>
/// <reference path="Utils/Notification.ts"/>
// ReSharper disable once InconsistentNaming
var MAF;
(function (MAF) {
    var modules = [];
    //TODO: what is this function used for ?
    function toggleQuality(eventObject) {
        var elem = $(eventObject.target);
        if (!elem.hasClass("fa")) {
            //search descendants for icon
            elem = elem.find(".fa");
        }
        var classes = elem.attr("class").split(" ");
        var cls = $.grep(classes, function (item, index) { return (item.substr(0, 3) === "fa-" && isNaN(parseInt(item.charAt(3)))); })[0];
        var toggleClass;
        if (cls.charAt(cls.length - 1) === "o") {
            toggleClass = cls.substring(0, cls.length - 2);
        }
        else {
            toggleClass = cls + "-o";
        }
        elem.removeClass(cls);
        elem.addClass(toggleClass);
    }
    function handleAjaxError() {
        $(document).ajaxError(function (event, jqXHR, ajaxSettings, thrownError) {
            if (jqXHR.status >= 400) {
                var element = $(event.target.activeElement);
                if (element != undefined && element.data('toggle') == 'modal') {
                    var htmlError = "<div class='modal-header'>\n                                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\n                                            <span aria-hidden='true'>\u00D7</span>\n                                        </button> \n                                        <h4 class='modal-title'>Error</h4> \n                                    </div>\n                                    <div class='modal-body'>\n                                        " + MAF.Utils.getAjaxErrorView() + "\n                                    </div>";
                    $(element.data('target')).find(".modal-content").html(htmlError);
                }
            }
        });
    }
    // https://github.com/vitalets/x-editable/issues/322
    function initializeFakeAuth() {
        if (document.getElementById("fakeAuth") !== null) {
            $("#userMenu").on("show.bs.dropdown", function () {
                setTimeout(function () {
                    $("#fakeAuth").find(".toSelect2").select2("open");
                }, 0);
                var $container = $(".feedback>.flag").closest(MAF.Feedback.containerClass);
                if ($container.hasClass(MAF.Feedback.className)) {
                    $container.removeClass(MAF.Feedback.className);
                }
            });
            $("#fakeAuth .toSelect2").on("change", function () {
                $(this).parents("form:first").submit();
            });
        }
    }
    /**
     * disable cache by default
     *
     */
    function setupAjaxRequests() {
        $.ajaxSetup({ cache: false });
    }
    function setActiveMenu() {
        $('#navbar a[href="' + location.pathname + '"]').closest('li').addClass('active');
        $('#navbar a[href="' + location.pathname + '"]').closest('li.dropdown').addClass('active');
    }
    /**
     * Main module to init everything of AA
     *
     * @export
     * @class Main
     * @implements {Module}
     */
    var Main = (function () {
        function Main() {
            this.name = "MAF.Main";
            this.defaults = {
                ajaxSetup: {
                    cache: false
                }
            };
        }
        /**
         * init this module, called once on init Main module
         *
         */
        Main.prototype.initModule = function () {
            for (var i = 0; i < modules.length; i++) {
                if (typeof (modules[i].initModule) === "function") {
                    modules[i].initModule();
                }
            }
        };
        ;
        Main.prototype.init = function () {
            setActiveMenu();
            setupAjaxRequests();
            initializeFakeAuth();
            handleAjaxError();
            $(".btn-quality").click(toggleQuality);
            for (var i = 0; i < modules.length; i++) {
                if (typeof (modules[i].init) === "function") {
                    modules[i].init();
                }
            }
            return this;
        };
        Main.addModule = function (m) {
            modules.push(m);
            return this;
        };
        return Main;
    }());
    MAF.Main = Main;
})(MAF || (MAF = {}));
///<reference path="Main.ts"/>
$(function () {
    var main = window["main"] = new MAF.Main();
    main.initModule();
    main.init();
});
function loadAllSelect2($container) {
    MAF.Select2.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("loadAllSelect2", "MAF.Select2.loadAll");
}
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        function loadAllSelect2($container) {
            MAF.Select2.loadAll($container);
            MAF.Utils.Internal.Compatibility.obsoleteWarning("MAF.Select2.loadAllSelect2", "MAF.Select2.loadAll");
        }
        Select2.loadAllSelect2 = loadAllSelect2;
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
function loadAllDateTimePicker($container) {
    MAF.DateTimePicker.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("loadAllDateTimePicker", "MAF.DateTimePicker.loadAll");
}
(function (MAF) {
    var DateTimePicker;
    (function (DateTimePicker) {
        function initDatetimePickers($container) {
            MAF.DateTimePicker.loadAll($container);
            MAF.Utils.Internal.Compatibility.obsoleteWarning("DatetimePicker.initDatetimePickers", "MAF.DateTimePicker.loadAll");
        }
        DateTimePicker.initDatetimePickers = initDatetimePickers;
    })(DateTimePicker = MAF.DateTimePicker || (MAF.DateTimePicker = {}));
})(MAF || (MAF = {}));
function loadAllXeditable($container) {
    MAF.XEditable.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("loadAllXeditable", "MAF.XEditable.loadAll");
}
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        function loadAllXeditable($container) {
            MAF.XEditable.loadAll($container);
            MAF.Utils.Internal.Compatibility.obsoleteWarning("MAF.XEditable.loadAllXeditable", "MAF.XEditable.loadAll");
        }
        XEditable.loadAllXeditable = loadAllXeditable;
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var loadMassAction = function ($container) {
    MAF.MassAction.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("loadMassAction", "MAF.MassAction.loadAll");
};
function loadAllTooltip($container) {
    MAF.Tooltip.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("loadAllTooltip", "MAF.Tooltip.loadAll");
}
function loadAllPopover($container) {
    MAF.Popover.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("loadAllPopover", "MAF.Popover.loadAll");
}
function loadAllBadges($container) {
    MAF.Badge.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("loadAllBadges", "MAF.Badge.loadAll");
}
(function (MAF) {
    var Utils;
    (function (Utils) {
        function initLyncPresence() {
            MAF.LyncPresence.loadAll("");
            MAF.Utils.Internal.Compatibility.obsoleteWarning("MAF.Utils.initLyncPresence", "MAF.LyncPresence.loadAll");
        }
        Utils.initLyncPresence = initLyncPresence;
    })(Utils = MAF.Utils || (MAF.Utils = {}));
})(MAF || (MAF = {}));
function initLyncPresence($container) {
    MAF.LyncPresence.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("initLyncPresence", "MAF.LyncPresence.loadAll");
}
function InitLyncPresence($container) {
    MAF.LyncPresence.loadAll($container);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("InitLyncPresence", "MAF.LyncPresence.loadAll");
}
function showResult(result) {
    MAF.Utils.showResult(result);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("showResult", "MAF.Utils.showResult");
}
function showWarning(message) {
    MAF.Utils.showWarning(message);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("showWarning", "MAF.Utils.showWarning");
}
function showError(message) {
    MAF.Utils.showError(message);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("showError", "MAF.Utils.showError");
}
function showInfo(message) {
    MAF.Utils.showInfo(message);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("showInfo", "MAF.Utils.showInfo");
}
function showSuccess(message) {
    MAF.Utils.showSuccess(message);
    MAF.Utils.Internal.Compatibility.obsoleteWarning("showSuccess", "MAF.Utils.showSuccess");
}
(function (MAF) {
    var Utils;
    (function (Utils) {
        var Internal;
        (function (Internal) {
            var Compatibility;
            (function (Compatibility) {
                function obsoleteWarning(obsoleteFunction, recommendedFunction) {
                    console.warn("function '" + obsoleteFunction + "' is obsoleted, replaced by function '" + recommendedFunction + "'");
                }
                Compatibility.obsoleteWarning = obsoleteWarning;
            })(Compatibility = Internal.Compatibility || (Internal.Compatibility = {}));
        })(Internal = Utils.Internal || (Utils.Internal = {}));
    })(Utils = MAF.Utils || (MAF.Utils = {}));
})(MAF || (MAF = {}));
/**
 * check attribute
 * @param {string} name - attribute name
 * @returns {boolean}
 */
$.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
};
/**
 * check data attribute
 * @param {string} name - data attribute name
 * @returns {boolean}
 */
$.fn.hasData = function (name) {
    return this.data(name) !== undefined;
};
var MAF;
(function (MAF) {
    var Paging;
    (function (Paging) {
        //TODO: move to Nlog page or remove it
        function gotoPage(formSelector, page) {
            var form = $(formSelector);
            form.find("[name='page']").val(page);
            form.submit();
        }
        Paging.gotoPage = gotoPage;
    })(Paging = MAF.Paging || (MAF.Paging = {}));
})(MAF || (MAF = {}));
$.validator.setDefaults({
    highlight: function (element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-error');
    }
});
var MAF;
(function (MAF) {
    var AjaxButton;
    (function (AjaxButton_1) {
        /**
         * load all ajax buttons
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new AjaxButton().init($container);
        }
        AjaxButton_1.loadAll = loadAll;
        var AjaxButton = (function () {
            function AjaxButton() {
                this.defaults = {};
                this.name = "ajaxbutton";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            AjaxButton.prototype.initModule = function () {
            };
            ;
            AjaxButton.prototype.init = function ($container) {
                var _this = this;
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $.each($container.find("[data-control='" + this.name + "']"), function (index, elt) {
                    var $elt = $(elt);
                    var options = $.extend({}, _this.defaults, $elt.data());
                    //MAF.Utils.addEvent($elt, "click", "MAF.AjaxButton.onClick");
                });
            };
            return AjaxButton;
        }());
        MAF.Main.addModule(new AjaxButton());
        AjaxButton_1.Spinner = "<i class='fa fa-spinner fa-pulse fa-fw'></i>";
        /**
         * used as a bridge to add indicator, then execute user-specified on-begin function with arguments
         *
         * @export
         */
        function onBegin() {
            if ($(this).is("form")) {
                var $button = $(this).find("[data-control='ajaxbutton']");
            }
            else {
                var $button = $(this);
            }
            //add indicator to the left of button's inner html
            $button.html(AjaxButton_1.Spinner + ' ' + $button.html());
            //disable
            $button.prop('disabled', true);
            $button.parent().css('cursor', 'not-allowed');
            //callback
            MAF.Utils.execFunction($button.data('on-begin-callback'), ["xhr"], this, arguments);
        }
        AjaxButton_1.onBegin = onBegin;
        /**
         * used as a bridge to remove indicator, then execute user-specified on-complete function with arguments
         *
         * @export
         */
        function onComplete() {
            if ($(this).is("form")) {
                var $button = $(this).find("[data-control='ajaxbutton']");
            }
            else {
                var $button = $(this);
            }
            //remove indicator from button's inner html
            $button.find("i:first").remove();
            //enable
            $button.prop("disabled", false);
            $button.parent().css('cursor', '');
            //callback
            MAF.Utils.execFunction($(this).data('on-complete-callback'), ["xhr", "status"], this, arguments);
        }
        AjaxButton_1.onComplete = onComplete;
        function onClick() {
            MAF.Utils.execFunction($(this).data('on-click-callback'), ["event"], this, arguments);
        }
        AjaxButton_1.onClick = onClick;
    })(AjaxButton = MAF.AjaxButton || (MAF.AjaxButton = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var CModal;
    (function (CModal_1) {
        /**
         * load all confirmation modals
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new CModal().init($container);
        }
        CModal_1.loadAll = loadAll;
        var CModal = (function () {
            function CModal() {
                this.defaults = {
                    headerText: "Confirm",
                    message: "Are you sure?",
                    confirmText: "Confirm",
                    cancelText: "Cancel",
                    draggable: true
                };
                this.name = "CModal";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            CModal.prototype.initModule = function () {
            };
            ;
            CModal.prototype.init = function ($container) {
                var _this = this;
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $.each($container.find("[data-control='cmodal']"), function (index, elt) {
                    var $elt = $(elt);
                    var options = $.extend({}, _this.defaults, $elt.data());
                    $elt.click(function (event) {
                        var id = '#' + options.target;
                        if ($("body").find(id).length == 0) {
                            _this.createModal(options);
                        }
                        if (options.draggable && options.draggable === true) {
                            $(id).modal({ backdrop: false });
                            $(id + ' div.modal-dialog').draggable({
                                cursor: "move",
                                handle: ".modal-header"
                            });
                        }
                        else {
                            $(id).modal({ backdrop: "static" });
                        }
                    });
                });
                MAF.Tooltip.loadAll($container);
            };
            /**
             * get modal template, add close event, add to body
             *
             * @param {CModalOptions} options
             * @memberof CModal
             */
            CModal.prototype.createModal = function (options) {
                var modal = $(this.modalTemplate(options));
                modal.find('#btnConfirm').on('click', function () {
                    if (options.confirmCallback != undefined) {
                        MAF.Utils.execFunction(options.confirmCallback, ['eventObject'], this, arguments);
                    }
                    if (options.url != undefined) {
                        window.location.replace(options.url);
                    }
                    $('#' + options.target).modal("hide");
                });
                if (options.onShow) {
                    modal.on("show.bs.modal", function (evt) {
                        MAF.Utils.execFunction(options.onShow, ['evt'], this, arguments);
                    });
                }
                if (options.onHide) {
                    modal.on("hide.bs.modal", function (evt) {
                        MAF.Utils.execFunction(options.onHide, ['evt'], this, arguments);
                    });
                }
                ;
                if (options.draggable && options.draggable === true) {
                    modal.on("hidden.bs.modal", function (evt) {
                        $("#" + options.target + " div.modal-dialog").css({
                            "top": "auto",
                            "left": "auto"
                        });
                    });
                }
                $("body").append(modal);
            };
            CModal.prototype.modalTemplate = function (options) {
                var template = "<div class=\"modal modal-" + options.decoration + " fade\" role=\"dialog\" id=\"" + options.target + "\" aria-labelledby=\"id-label\">\n                        <div class=\"modal-dialog modal-sm\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">                                \n                                    <h4 class=\"modal-title\" id=\"id-label\">" + options.headerText + "</h4>\n                                </div>\n                                <div class=\"modal-body\"> \n                                    <p class=\"text-center\">" + options.message + "</p> \n                                </div> \n                                <div class=\"modal-footer\"> \n                                   <button type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\">" + options.cancelText + "</button> \n                                   <button type=\"button\" id=\"btnConfirm\" class=\"btn btn-" + options.decoration + "\">" + options.confirmText + "</button> \n                                </div> \n                            </div> \n                        </div> \n                   </div>";
                return template;
            };
            return CModal;
        }());
        MAF.Main.addModule(new CModal());
    })(CModal = MAF.CModal || (MAF.CModal = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var DateTimePicker;
    (function (DateTimePicker) {
        /**
         * load all dtp
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new DatetimePicker().init($container);
        }
        DateTimePicker.loadAll = loadAll;
        var DatetimePicker = (function () {
            function DatetimePicker() {
                this.name = "DatetimePicker";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            DatetimePicker.prototype.initModule = function () {
            };
            ;
            DatetimePicker.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $.each($container.find("[data-control='datetimepicker']"), function (index, elt) {
                    var $elt = $(elt);
                    var options = $elt.data();
                    var events = {
                        change: options.change,
                        hide: options.hide,
                        show: options.show,
                        error: options.error,
                        update: options.update
                    };
                    //remove tmp data attribute to prevent error from control
                    options.change = undefined;
                    options.hide = undefined;
                    options.show = undefined;
                    options.error = undefined;
                    options.update = undefined;
                    var picker = $elt.mafDatepicker(options);
                    $.each(events, function (propertyName, propertyValue) {
                        if (propertyValue) {
                            picker.on("dp." + propertyName, function (e) {
                                MAF.Utils.execFunction(propertyValue.toString(), ['e'], this, arguments);
                            });
                        }
                    });
                });
            };
            return DatetimePicker;
        }());
        /**
         * setup moment to standardize week
         *
         */
        function setupMoment() {
            moment.updateLocale("en", {
                week: {
                    dow: 1,
                    doy: 4 // The week that contains Jan 4th is the first week of the year.}});
                }
            });
        }
        setupMoment();
        MAF.Main.addModule(new DatetimePicker());
    })(DateTimePicker = MAF.DateTimePicker || (MAF.DateTimePicker = {}));
})(MAF || (MAF = {}));
/**
 * since we have hidden input with iso value, a corresponding validator is also added
 * https://gist.github.com/philipashlock/8830168.
 * http://stackoverflow.com/questions/28020805/regex-validate-correct-iso8601-date-string-with-time
 *
 */
$(document).ready(function () {
    var regexDateTimeIso = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    jQuery.validator.addMethod("datetimeiso", function (value, element) {
        return this.optional(element) || regexDateTimeIso.test(value);
    }, "Please enter a valid datetime.");
});
var MAF;
(function (MAF) {
    var Badge;
    (function (Badge_1) {
        /**
         * load all badges
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new Badge().init($container);
        }
        Badge_1.loadAll = loadAll;
        var Badge = (function () {
            function Badge() {
                this.name = "badge";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Badge.prototype.initModule = function () {
            };
            ;
            Badge.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                var badgeElems = $container.find("[data-trigger=\"badge\"]");
                $.each(badgeElems, function (index, elem) {
                    $(elem).badge();
                });
            };
            return Badge;
        }());
        $.fn.badge = function () {
            var that = $(this);
            if (that.length === 0)
                return;
            var url = that.data("badge-url") + "";
            var badgeType = that.data("badge-type");
            $.get(url, function (data) {
                if (data.status === "success") {
                    that.toggleClass("badge", true);
                    that.toggleClass("progress-bar-" + badgeType, true);
                    that.text(data.value);
                }
            });
        };
        MAF.Main.addModule(new Badge());
    })(Badge = MAF.Badge || (MAF.Badge = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Copy;
    (function (Copy_1) {
        /**
        * load all copies
        *
        * @export
        * @param {*} $container
        */
        function loadAll($container) {
            new Copy().init($container);
        }
        Copy_1.loadAll = loadAll;
        var Copy = (function () {
            function Copy() {
                this.name = "copy";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Copy.prototype.initModule = function () {
            };
            ;
            Copy.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                var $copies = $container.find("[data-control='" + this.name + "']");
                var that = this;
                $.each($copies, function (index, elt) {
                    var $elt = $(elt);
                    var options = $elt.data();
                    new Clipboard(this);
                });
            };
            return Copy;
        }());
        MAF.Main.addModule(new Copy());
    })(Copy = MAF.Copy || (MAF.Copy = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var DateLabel;
    (function (DateLabel_1) {
        /**
        * load all date label
        *
        * @export
        * @param {*} $container
        */
        function loadAll($container) {
            new DateLabel().init($container);
        }
        DateLabel_1.loadAll = loadAll;
        var DateLabel = (function () {
            function DateLabel() {
                this.defaults = {
                    format: "DD/MM/YYYY HH:mm"
                };
                this.name = "date-label";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            DateLabel.prototype.initModule = function () {
            };
            ;
            DateLabel.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                var $copies = $container.find("[data-control='" + this.name + "']");
                var that = this;
                $.each($copies, function (index, elt) {
                    var $elt = $(elt);
                    var opts = $.extend({}, that.defaults, $elt.data());
                    if (opts.value) {
                        $elt.text(moment(opts.value).format(opts.format));
                    }
                });
            };
            return DateLabel;
        }());
        MAF.Main.addModule(new DateLabel());
    })(DateLabel = MAF.DateLabel || (MAF.DateLabel = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var LyncPresence;
    (function (LyncPresence_1) {
        /**
         * load all lync
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new LyncPresence().init($container);
        }
        LyncPresence_1.loadAll = loadAll;
        var LyncPresence = (function () {
            function LyncPresence() {
                this.name = "LyncPresence";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            LyncPresence.prototype.initModule = function () {
            };
            ;
            LyncPresence.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                try {
                    new Lync().InsertLyncs();
                }
                catch (e) {
                    console.warn(e);
                }
            };
            return LyncPresence;
        }());
        MAF.Main.addModule(new LyncPresence());
    })(LyncPresence = MAF.LyncPresence || (MAF.LyncPresence = {}));
})(MAF || (MAF = {}));
//TODO: Revamp mass action
var MAF;
(function (MAF) {
    var MassAction;
    (function (MassAction_1) {
        /**
         * load all mass action related controls
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new MassAction("").init($container);
        }
        MassAction_1.loadAll = loadAll;
        /**
         * mass action option, init default values
         *
         * @export
         * @class MassActionOptions
         */
        var MassActionOptions = (function () {
            function MassActionOptions(selector) {
                this.submit = ".mass-action";
                this.checkbox = ".mass-checkbox";
                this.selectAll = ".mass-selectall";
                this.count = ".mass-selected";
                this.selector = selector;
            }
            return MassActionOptions;
        }());
        var MassAction = (function () {
            function MassAction(selector) {
                this.name = "MassAction";
                this.options = new MassActionOptions(selector);
            }
            /**
             * init this module, called once on init Main module
             *
             */
            MassAction.prototype.initModule = function () {
            };
            ;
            MassAction.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $.each($container.find('.mass-selectall'), function (index, element) {
                    if ($(element).hasData("mass-action"))
                        $(element).removeData("mass-action");
                    var selector = $(element).data("selector");
                    var massAction = new MassAction(selector + "");
                    massAction.load();
                    $(element).data("mass-action", massAction);
                });
            };
            MassAction.prototype.selected = function () {
                return $(this.options.checkbox + ":checked");
            };
            MassAction.prototype.insertInputs = function () {
                $(this.options.submit).parent().find("input").remove();
                var inputs = [];
                this.selected().map(function (index, element) {
                    var name = "[" + index + "]";
                    var value = $(element).data("value");
                    inputs.push($("<input>").attr({
                        "type": "hidden",
                        "value": value,
                        "name": name
                    }));
                });
                $(this.options.submit).parent().append(inputs);
            };
            MassAction.prototype.toggleDisabled = function () {
                var checked = this.selected().length > 0;
                $(this.options.submit).attr("disabled", checked ? null : "true");
            };
            MassAction.prototype.updateCount = function () {
                //TODO: Error prone, selecting by class won't work on multiple MA controls on the same page
                var $headCheckbox = $(this.options.selectAll);
                var count = this.selected().length;
                var totalCount = $(".ma-selector.mass-checkbox").length;
                if (count != 0 && totalCount > count) {
                    //if at least one isn't and not all are selected toggle indeterminate
                    $headCheckbox.prop("indeterminate", true);
                }
                else {
                    $headCheckbox.prop("indeterminate", false);
                }
                $(this.options.count).html(count + "");
            };
            MassAction.prototype.initAction = function () {
                //Using click with namespace so that it will not clear user-binded events
                $(this.options.submit).off("click.massaction");
                $(this.options.submit).on("click.massaction", this.insertInputs.bind(this));
            };
            MassAction.prototype.initSelectionCheckboxes = function () {
                $(this.options.checkbox).off("change.massaction");
                $(this.options.checkbox).on("change.massaction", this.toggleDisabled.bind(this));
                $(this.options.checkbox).on("change.massaction", this.updateCount.bind(this));
            };
            MassAction.prototype.initSelectAll = function () {
                var that = this;
                $(that.options.selectAll).off("click.massaction");
                $(that.options.selectAll).on("click.massaction", function (e) {
                    var $selectAll = $(this);
                    var checked = $selectAll.prop("checked");
                    $(that.options.checkbox).prop("checked", checked);
                    var $label = $($selectAll.parent());
                    if (checked)
                        $label.attr("title", $label.data("true-title") + "").tooltip("fixTitle").tooltip("show");
                    else
                        $label.attr("title", $label.data("false-title") + "").tooltip("fixTitle").tooltip("show");
                    that.toggleDisabled();
                    that.updateCount();
                });
            };
            MassAction.prototype.load = function () {
                this.options = $.extend(this.options, $(this.options.submit).data());
                if (this.options.selector) {
                    for (var key in this.options) {
                        if (this.options.hasOwnProperty(key)) {
                            this.options[key] = this.options.selector + this.options[key];
                        }
                    }
                }
                this.initAction();
                this.initSelectionCheckboxes();
                this.initSelectAll();
            };
            return MassAction;
        }());
        MAF.Main.addModule(new MassAction(""));
    })(MassAction = MAF.MassAction || (MAF.MassAction = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Popover;
    (function (Popover_1) {
        /**
         * load all popovers
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new Popover().init($container);
        }
        Popover_1.loadAll = loadAll;
        var Popover = (function () {
            function Popover() {
                this.name = "popover";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Popover.prototype.initModule = function () {
            };
            ;
            Popover.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $container.find("[data-toggle='" + this.name + "']").popover();
            };
            return Popover;
        }());
        MAF.Main.addModule(new Popover());
    })(Popover = MAF.Popover || (MAF.Popover = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var SidePanel;
    (function (SidePanel_1) {
        /**
        * load all side panels
        *
        * @export
        * @param {*} $container
        */
        function loadAll($container) {
            new SidePanel().init($container);
        }
        SidePanel_1.loadAll = loadAll;
        var SidePanel = (function () {
            function SidePanel() {
                this.AUTO_LOAD_COUNT = 2;
                this.name = "sidepanel";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            SidePanel.prototype.initModule = function () {
            };
            ;
            SidePanel.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                var that = this;
                var $sidePanels = $container.find("[data-control='" + that.name + "']");
                var $backdrop = "<div id='sidepanel-backdrop'></div>";
                // One backdrop, no matter what
                if ($sidePanels.length > 0 && $("body #sidepanel-backdrop").length == 0) {
                    $("body").append($backdrop);
                    that.setOnBlur('#sidepanel-backdrop');
                }
                // Default values - Left side panel with small size            
                $.each($container.find(":not([data-position])[data-control='" + that.name + "']"), function (index, elt) {
                    $(elt).attr('data-position', 'left');
                });
                $.each($container.find(":not([data-size])[data-control='" + that.name + "']"), function (index, elt) {
                    $(elt).attr('data-size', 'sm');
                });
                // Check and print warning message if there are more than 2 marked as auto load in the page.
                var numOfAutoLoad = $container.find("[data-control='" + that.name + "'][data-auto-load='true']").length;
                if (numOfAutoLoad > that.AUTO_LOAD_COUNT) {
                    console.warn("There are more than 2 auto-loading side panels in the page. All panels will be loaded on demand.");
                }
                $.each($sidePanels, function (index, elt) {
                    var $elt = $(elt);
                    var options = $elt.data();
                    var id = "" + options.id;
                    var $div = $("<div id='" + options.id.substring(1) + "' data-pinned='" + options.pinned + "' class='sidepanel card-bs-6 sidepanel-" + options.size + " sidepanel-" + options.position + "'><div id='sidepanel-loading' class='loading'></div></div>");
                    if ($elt.data().autoLoad && numOfAutoLoad <= that.AUTO_LOAD_COUNT && $(id).length == 0) {
                        that.load(id, options, $div);
                    }
                    if (options.open) {
                        that.open(id, options, $div);
                    }
                    // Check and print error message if there is no trigger 
                    if ($("[data-target='" + options.id + "']").length == 0) {
                        console.error("No target was found for the side panel " + options.id + ".");
                    }
                    else {
                        $("body").off('click.sidepanel', "[data-target='" + options.id + "']");
                        $("body").on('click.sidepanel', "[data-target='" + options.id + "']", function () {
                            that.open(id, options, $div);
                        });
                    }
                });
            };
            SidePanel.prototype.load = function (id, options, $div) {
                $.ajax({
                    url: options.url,
                    contentType: "application/json; charset=utf-8",
                    beforeSend: function (response) {
                        $("body").append($div);
                    },
                    success: function (response) {
                        var $loading = $(id).find('#sidepanel-loading:first-child');
                        if ($loading.length > 0) {
                            $div.html(response);
                            MAF.Utils.initCommonModules($div);
                            if ($loading.length > 0)
                                $loading.remove();
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        // Since input's target cannot be retrieved if AutoLoad = true, have to catch the error here instead of group them in main.ts
                        $div.html(MAF.Utils.getAjaxErrorView());
                    }
                });
            };
            SidePanel.prototype.setOnBlur = function (target) {
                $("body").on('click', target, function () {
                    $(".sidepanel").not("[data-pinned='" + true + "']").removeClass("sidepanel-left-in");
                    $(".sidepanel").not("[data-pinned='" + true + "']").removeClass("sidepanel-right-in");
                    $(".sidepanel").not("[data-pinned='" + true + "']").removeClass("sidepanel-bottom-in");
                    $("#sidepanel-backdrop").toggleClass("sidepanel-backdrop-in");
                    $("#sidepanel-backdrop").removeClass("backdrop-no-opacity");
                });
            };
            SidePanel.prototype.open = function (id, options, $div) {
                if ($(id).length == 0)
                    //To prevent the quick click on button just after page load
                    this.load(id, options, $div.addClass("sidepanel-" + options.position + "-in"));
                else
                    $(id).addClass("sidepanel-" + options.position + "-in");
                if (options.pinned) {
                    var pinnedClass = "sidepanel-pinned-" + options.position + "-" + options.size;
                    if ($("#main").hasClass(pinnedClass)) {
                        $("#main").removeClass(pinnedClass);
                        $(id).removeClass("sidepanel-" + options.position + "-in");
                        $("#sidepanel-backdrop").addClass("no-backdrop");
                    }
                    else
                        $("#main").addClass(pinnedClass);
                }
                else {
                    $("#sidepanel-backdrop").toggleClass("sidepanel-backdrop-in");
                    $("#sidepanel-backdrop").removeClass("no-backdrop");
                }
                if (!options.showBackdrop)
                    $("#sidepanel-backdrop").addClass("backdrop-no-opacity");
            };
            return SidePanel;
        }());
        MAF.Main.addModule(new SidePanel());
    })(SidePanel = MAF.SidePanel || (MAF.SidePanel = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var SmartPartial;
    (function (SmartPartial_1) {
        /**
         * load all smartpartial
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new SmartPartial().init($container);
        }
        SmartPartial_1.loadAll = loadAll;
        var SmartPartial = (function () {
            function SmartPartial() {
                this.name = "smartpartial";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            SmartPartial.prototype.initModule = function () {
            };
            ;
            SmartPartial.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $.each($container.find("div[data-control='" + this.name + "']"), function (index, elt) {
                    var options = $(elt).data();
                    $(elt).off("click.smartpartial", ".spbutton");
                    $(elt).on("click.smartpartial", ".spbutton", function () {
                        var that = this;
                        $.ajax({
                            type: "GET",
                            url: options.url,
                            success: function (data) {
                                if (data.hasContent) {
                                    $(elt).replaceWith(data.view);
                                    MAF.Utils.initCommonModules($(elt));
                                }
                                else
                                    $(elt).show();
                            }
                        });
                    });
                    $.ajax({
                        type: "GET",
                        url: options.url,
                        success: function (data) {
                            if (data.hasContent) {
                                $(elt).replaceWith(data.view);
                                MAF.Utils.initCommonModules($(elt));
                            }
                            else
                                $(elt).show();
                        }
                    });
                });
            };
            return SmartPartial;
        }());
        MAF.Main.addModule(new SmartPartial());
    })(SmartPartial = MAF.SmartPartial || (MAF.SmartPartial = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Switch;
    (function (Switch_1) {
        /**
         * load all switches
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new Switch().init($container);
        }
        Switch_1.loadAll = loadAll;
        var Switch = (function () {
            function Switch() {
                this.name = "switch";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Switch.prototype.initModule = function () {
            };
            ;
            //https://stackoverflow.com/a/11424091/3161505
            Switch.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $.each($container.find("input[data-type='" + this.name + "']"), function (index, elt) {
                    var $element = $(elt);
                    $("<label></label>").prop('for', $(this).prop('id')).insertAfter($element);
                    var options = $element.data();
                    var events = {
                        click: function defaultSwitchOnClick(eventObject) {
                            console.log($(this).prop("checked"));
                            $(this).val($(this).prop("checked"));
                            if (options.click) {
                                return MAF.Utils.execFunction(options.click.toString(), ['eventObject'], this, arguments);
                            }
                        }
                    };
                    $.each(events, function (propertyName, propertyValue) {
                        if (propertyValue) {
                            $element.on(propertyName, function (eventObject) {
                                if (typeof (propertyValue) !== "function") {
                                    return MAF.Utils.execFunction(propertyValue.toString(), ['eventObject'], this, arguments);
                                }
                                else {
                                    propertyValue.apply(this, arguments);
                                }
                            });
                        }
                    });
                });
            };
            return Switch;
        }());
        MAF.Main.addModule(new Switch());
    })(Switch = MAF.Switch || (MAF.Switch = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Tooltip;
    (function (Tooltip_1) {
        /**
         * load all tooltips
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new Tooltip().init($container);
        }
        Tooltip_1.loadAll = loadAll;
        var Tooltip = (function () {
            function Tooltip() {
                this.name = "tooltip";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Tooltip.prototype.initModule = function () {
            };
            ;
            Tooltip.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $container.find("[data-toggle=\"tooltip\"]").tooltip();
                //show tooltip for modal button instead of using a default tooltip
                $container.find("[data-toggle=\"modal\"]").tooltip();
            };
            return Tooltip;
        }());
        MAF.Main.addModule(new Tooltip());
    })(Tooltip = MAF.Tooltip || (MAF.Tooltip = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Utils;
    (function (Utils) {
        /**
        * Register an event handler to an event.
        */
        function addEvent(element, eventName, eventHandlerName) {
            // Check if there is an event handler provided.
            if (eventHandlerName) {
                element.on(eventName, function (evt) {
                    MAF.Utils.execFunction(eventHandlerName, ['evt'], this, arguments);
                });
            }
        }
        Utils.addEvent = addEvent;
    })(Utils = MAF.Utils || (MAF.Utils = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Utils;
    (function (Utils) {
        var Internal;
        (function (Internal) {
            function string2Bin(str) {
                var result = "";
                for (var i = 0; i < str.length; i++) {
                    result += (str.charCodeAt(i).toString(16));
                }
                return result;
            }
            /**
             * Custom jquery validation method
             */
            $.validator.addMethod("invalidWords", function (value, element, params) { return (string2Bin(value.toLowerCase()).indexOf("616d61726973") === -1); }, "");
            /**
             * and an unobtrusive adapter
             */
            $.validator.unobtrusive.adapters.add("invalidwords", function (options) {
                options.rules["invalidWords"] = true;
                options.messages["invalidWords"] = options.message;
            });
        })(Internal = Utils.Internal || (Utils.Internal = {}));
    })(Utils = MAF.Utils || (MAF.Utils = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var worker;
            function initWorkers() {
                worker = new Internal.AjaxBufferWorker();
            }
            Internal.initWorkers = initWorkers;
            //https://datatables.net/examples/server_side/pipeline.html
            function preloadAjaxFunction(opts) {
                return function (request, drawCallback, settings) {
                    //modify request to sync with server, since server could not know if it mass selection support or not
                    if (opts.massSelection) {
                        //map [{column: 1, dir: 'asc'}] to [{column: 1, dir: 'asc'}]
                        request.order = request.order.map(function (val) {
                            return { column: val.column - 1, dir: val.dir };
                        });
                    }
                    // settings.oApi.fnCustomErrorCallback();
                    //console.log("request active");
                    Internal.processRequest(opts, request, function (json, error, thrown) {
                        //handle error case
                        if (error != undefined) {
                            settings.oApi.fnCustomErrorCallback(json, error, thrown, settings);
                            return;
                        }
                        //handle success case
                        //console.log("request resolved");
                        json.draw = request.draw;
                        if (json.IsRowTemplate === true) {
                            //update setting at runtime
                            settings.isRowTemplate = true;
                            convertRowTemplateToHtmlCells(json, opts.columns);
                        }
                        drawCallback(json);
                        if (json.isObsoleted !== true) {
                            Internal.addRequests(opts, request, json.recordsFiltered);
                        }
                        if (worker.isActive())
                            return;
                        worker.buffering();
                    });
                    if (worker.isActive())
                        return;
                    worker.buffering();
                };
            }
            Internal.preloadAjaxFunction = preloadAjaxFunction;
            /**
             * from html string of a raw <tr><td>....</tr>
             * split into cells and link to columns definition
             *
             * @param {any} json
             * @param {any} columns
             * @returns
             */
            function convertRowTemplateToHtmlCells(json, columns) {
                var dataArray = json.data;
                //build dataJson
                var dataJson = [];
                for (var row = 0; row < dataArray.length; row++) {
                    var $row = $(dataArray[row]);
                    var $cols = $row.find('td');
                    var itemJson = [];
                    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                        itemJson[columns[colIndex].data] = $cols.get(colIndex).outerHTML;
                    }
                    var attrs = {};
                    $.each($row[0].attributes, function () {
                        if (this.specified) {
                            attrs[this.name] = this.value;
                        }
                    });
                    itemJson["TrAttributes"] = attrs;
                    dataJson.push(itemJson);
                }
                json.data = dataJson;
                return json;
            }
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var RequestStatus;
            (function (RequestStatus) {
                RequestStatus[RequestStatus["Pending"] = 0] = "Pending";
                RequestStatus[RequestStatus["Requesting"] = 1] = "Requesting";
                RequestStatus[RequestStatus["Obsolete"] = 2] = "Obsolete"; //request should be cleared or data won't be added to cache
            })(RequestStatus || (RequestStatus = {}));
            var inNeedRequests = new Array();
            function removeRequest(requestId) {
                for (var index = 0; index < inNeedRequests.length; index++) {
                    var element = inNeedRequests[index];
                    if (requestId == element.id) {
                        inNeedRequests.splice(index, 1);
                        break;
                    }
                }
            }
            //buffer +- n pages
            var nBufferingPages = 1;
            /**
             * check in the cached data and decide which page should be loaded
             * Now: load +-1, first, last page
             *
             * @param {any} request
             * @param {any} pageLength
             * @param {any} totalCount
             * @memberof AjaxBufferWorker
             */
            function addRequests(opts, request, totalCount) {
                // inNeedRequests = [];
                var nPages = Math.floor(((totalCount - 1) / opts.pageLength) + 1);
                var iPage = Math.floor(request.start / opts.pageLength);
                //create a set object as `set` data structure to store page+-1, first and last page
                var set = {};
                for (var index = iPage + 1; index <= iPage + nBufferingPages; index++) {
                    if (index < nPages) {
                        set[index] = index;
                    }
                }
                for (var index = iPage - nBufferingPages; index < iPage; index++) {
                    if (index > 0) {
                        set[index] = index;
                    }
                }
                set[0] = 0;
                set[nPages - 1] = nPages - 1;
                $.each(set, function (setPage, setValue) {
                    addRequestIfNotCached(inNeedRequests, opts, request, setValue);
                });
                inNeedRequests = inNeedRequests.sort(function (a, b) { return -(a.weight - b.weight); });
                //console.dir(inNeedRequests.slice());
                //console.log(`addRequests queue: ${inNeedRequests.length}`);
            }
            Internal.addRequests = addRequests;
            function processRequest(opts, request, callback) {
                var iPage = Math.floor(request.start / opts.pageLength);
                var requestId = Internal.Caching.hash(opts.tableId, request, iPage);
                if (Internal.Caching.hasData(requestId)) {
                    var cachedData = Internal.Caching.getData(requestId);
                    callback(cachedData);
                    return;
                }
                //if a request in the queue already, intercept it with new callback
                for (var index = 0; index < inNeedRequests.length; index++) {
                    var element = inNeedRequests[index];
                    if (requestId == element.id) {
                        element.callback = callback;
                        //console.log("intercept callback");
                        return;
                    }
                }
                //add request to queue
                addRequestIfNotCached(inNeedRequests, opts, request, iPage, callback);
                inNeedRequests = inNeedRequests.sort(function (a, b) { return -(a.weight - b.weight); });
                //console.dir(inNeedRequests.slice());
            }
            Internal.processRequest = processRequest;
            function addRequestIfNotCached(needRequests, opts, request, page, callback) {
                if (callback === void 0) { callback = undefined; }
                var requestId = Internal.Caching.hash(opts.tableId, request, page);
                if (!Internal.Caching.hasData(requestId)) {
                    needRequests.push({
                        id: requestId,
                        weight: request.draw,
                        request: $.extend({}, request, {
                            start: page * opts.pageLength
                        }),
                        callback: callback,
                        status: RequestStatus.Pending,
                        opts: opts,
                    });
                }
            }
            function markObsoletedRequests(query) {
                var obsoletedRequestIds = [];
                for (var idx = 0; idx < inNeedRequests.length; idx++) {
                    var request = inNeedRequests[idx];
                    if (request.id.match(query) != null) {
                        request.status = RequestStatus.Obsolete;
                        obsoletedRequestIds.push(request.id);
                    }
                }
                for (var idx = 0; idx < obsoletedRequestIds.length; idx++) {
                    var requestId = obsoletedRequestIds[idx];
                    removeRequest(requestId);
                }
            }
            Internal.markObsoletedRequests = markObsoletedRequests;
            var AjaxBufferWorker = (function () {
                function AjaxBufferWorker() {
                    this._isActive = false;
                }
                AjaxBufferWorker.prototype.isActive = function () {
                    return this._isActive;
                };
                /**
                 * The method to deal with buffering data
                 *
                 * @param {any} request
                 * @param {any} settings
                 * @param {any} totalCount
                 */
                AjaxBufferWorker.prototype.buffering = function () {
                    //console.log("--worker start");
                    //console.log(`--queue: ${inNeedRequests.length}`);
                    var thisClass = this;
                    this._isActive = true;
                    var nextRequest;
                    for (var index = 0; index < inNeedRequests.length; index++) {
                        var element = inNeedRequests[index];
                        if (element.status == RequestStatus.Pending) {
                            nextRequest = element;
                            break;
                        }
                    }
                    // inNeedRequests.shift();
                    if (nextRequest) {
                        nextRequest.status = RequestStatus.Requesting;
                        //console.log(`----request ${nextRequest.id}`)
                        $.ajax({
                            "type": "POST",
                            "url": nextRequest.opts.url,
                            "data": nextRequest.request,
                            "dataType": "json",
                            "success": function (json) {
                                var requestId = Internal.Caching.hash(nextRequest.opts.tableId, nextRequest.request, Math.floor(nextRequest.request.start / nextRequest.opts.pageLength));
                                //console.log(`----response ${nextRequest.id}`)
                                if (nextRequest.status != RequestStatus.Obsolete) {
                                    Internal.Caching.setData(requestId, nextRequest.opts.expiredTimeInSeconds, json);
                                }
                                else {
                                    json.isObsoleted = true;
                                }
                                var call = nextRequest.callback;
                                removeRequest(nextRequest.id);
                                if (call) {
                                    call(json);
                                }
                                //console.log("--worker end");
                                thisClass.buffering();
                            },
                            error: function (xhr, error, thrown) {
                                removeRequest(nextRequest.id);
                                thisClass.buffering();
                                var call = nextRequest.callback;
                                if (call) {
                                    call(xhr, error, thrown);
                                }
                            }
                        });
                    }
                    else {
                        this._isActive = false;
                        //console.log("--worker end");
                    }
                };
                return AjaxBufferWorker;
            }());
            Internal.AjaxBufferWorker = AjaxBufferWorker;
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        /**
         * basic types that supported by our datatables
         *
         * @enum {number}
         */
        var JsType;
        (function (JsType) {
            JsType["Number"] = "number";
            JsType["String"] = "string";
            JsType["Datetime"] = "datetime";
        })(JsType || (JsType = {}));
        var DatatableComponent = (function () {
            function DatatableComponent() {
                this._selectedIds = [];
            }
            DatatableComponent.prototype.getSelectedIds = function () {
                return this._selectedIds;
            };
            /**
             * init this module, called once on init Main module
             *
             */
            DatatableComponent.initModule = function () {
                if ($.fn.dataTable) {
                    //set default value for datatable option
                    $.extend($.fn.dataTable.defaults, {
                        pageLength: 25,
                        //https://datatables.net/reference/option/dom
                        dom: "<'row'<'col-sm-12'f>>" +
                            "<'row'<'col-sm-12'tr>>" +
                            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                    });
                    Datatable.Internal.initWorkers();
                    //This function mimics behavior of ajax request, implemented by datatables
                    //how to add custom function
                    //http://m.datatables.net/forums/discussion/11444/error-handling-for-serverside-processing-data-table
                    $.fn.dataTable.ext.oApi.fnCustomErrorCallback = function (xhr, error, thrown, oSettings) {
                        //This function is port from core.ajax.js from DataTablesSrc
                        var ret = this._fnCallbackFire(oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR]);
                        if ($.inArray(true, ret) === -1) {
                            if (error == "parsererror") {
                                this._fnLog(oSettings, 0, 'Invalid JSON response', 1);
                            }
                            else if (xhr.readyState === 4) {
                                this._fnLog(oSettings, 0, 'Ajax error', 7);
                            }
                        }
                        this._fnProcessingDisplay(oSettings, false);
                        MAF.Utils.showError("There is an error with an ajax request");
                        console.error("There is an issue with a request from table " + oSettings.sTableId);
                    };
                    $.fn.dataTable.ext.errMode = "none";
                }
            };
            ;
            /**
             * setup columns definition, basic option for datatable
             *
             * @param {*} [$container=undefined]
             * @memberof Datatable
             */
            DatatableComponent.prototype.init = function (elt) {
                var that = this;
                var $table = $("<table class='table table-hover table-bordered' style='width:100%'><thead></thead><tbody></tbody></table>");
                var $element = $(elt);
                var options = $.extend({}, DatatableComponent.defaults, $element.data());
                var columnDefinitions = options.columnDefinitions;
                // console.log(columnDefinitions)
                var _columns = [];
                if (options.massSelection) {
                    _columns.push({
                        orderable: false,
                        render: function (data, type, row, meta) {
                            var rowId = row[options.massSelection];
                            //TODO: improve id, for attr
                            return "\n                            <div class=\"checkbox checkbox-big\">\n                                <label>\n                                    <input class=\"mass-checkbox\" for=\"mass-selectall.ma-selector\" data-value=\"" + rowId + "\" type=\"checkbox\"></input>\n                                    <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\n                                </label>\n                            </div>\n                            ";
                        },
                        data: "MassSelection",
                        title: "\n                        <div class=\"checkbox checkbox-big\">\n                            <label data-container=\"body\" data-false-title=\"Select all\" data-toogle=\"tooltip\" data-true-title=\"Unselect all\">\n                                <input data-control=\"MassAction2\" id=\"mass-selectall.ma-selector\" type=\"checkbox\">\n                                </input>\n                                <span class=\"cr\"><i class=\"cr-icon fa fa-check\"></i></span>\n                                <span class=\"badge\">0</span>\n                            </label>\n                        </div>\n                        "
                    });
                }
                columnDefinitions.forEach(function (columnDefinition, index) {
                    //Converting datetime to moment using default format before displaying
                    if (columnDefinition.Type.toLowerCase() == JsType.Datetime.toLowerCase())
                        _columns.push({
                            orderable: columnDefinition.Sortable,
                            render: function (data, type, row, meta) {
                                if (meta.settings.isRowTemplate === true) {
                                    return data;
                                }
                                return moment(data).format("DD/MM/YYYY");
                            },
                            data: columnDefinition.ColumnId,
                            title: columnDefinition.Header
                        });
                    else
                        _columns.push({
                            orderable: columnDefinition.Sortable,
                            data: columnDefinition.ColumnId,
                            title: columnDefinition.Header
                        });
                });
                var orderColumns = [];
                columnDefinitions.forEach(function (col, idx) {
                    var shiftColumn = options.massSelection ? 1 : 0;
                    if (col.Sortable) {
                        orderColumns.push([idx + shiftColumn, col.SortDirection.toLowerCase()]);
                    }
                });
                $table.insertAfter($element);
                var datatable = $table.DataTable({
                    serverSide: true,
                    ajax: Datatable.Internal.preloadAjaxFunction({
                        tableId: $element.attr("id"),
                        url: options.url,
                        pageLength: options.pageLength || $.fn.dataTable.defaults.pageLength,
                        columns: _columns,
                        expiredTimeInSeconds: options.ajaxExpiredTimeInSeconds,
                        massSelection: options.massSelection
                    }),
                    columns: _columns,
                    order: orderColumns.length > 0 ? [orderColumns[0]] : [],
                    processing: true,
                    paging: true,
                    deferRender: true,
                    scrollX: (options.fixedColumns != undefined),
                    fixedColumns: (options.fixedColumns != undefined ? { leftColumns: options.fixedColumns } : false),
                    fixedHeader: options.fixedHeader,
                    //responsive cannot be used with fixed column
                    responsive: (options.fixedColumns == undefined),
                    pageLength: options.pageLength,
                    //hide pagination control when there is only one page
                    drawCallback: function (settings) {
                        var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
                        pagination.toggle(this.api().page.info().pages > 1);
                        MAF.Utils.initCommonModules($table);
                        if (that._massSelectionComp) {
                            that._massSelectionComp.load();
                            that._massSelectionComp.update();
                        }
                        else {
                            var $massSelection = $table.find("[data-control=" + MAF.MassSelection.Internal.MassSelectionComponent.componentName + "]");
                            that._massSelectionComp = new MAF.MassSelection.Internal.MassSelectionComponent($massSelection, {
                                id: $massSelection.attr("id"),
                                onMassSelectionChange: function (selectedIds) { return that._selectedIds = selectedIds; }
                            });
                        }
                    },
                    language: {
                        processing: "<div class='loading'></div>",
                        search: ""
                    },
                    createdRow: function (row, data, dataIndex) {
                        var $row = $(row);
                        var attrs = data["TrAttributes"];
                        $.each(attrs, function (idx, attr) {
                            if (idx == "class") {
                                $row.addClass(attr);
                            }
                            else {
                                $row.attr(idx, attr);
                            }
                        });
                    }
                });
                that.registerEvents(datatable, options);
                that.setupCustomSearchBar($table, datatable, columnDefinitions);
            };
            /**
             * remove old search bar and add new advanced search component, hook on change event to update datatable accordingly
             *
             * @param {JQuery} $element
             * @param {DataTables.DataTable} datatable
             * @param {Array<string>} columnIds
             * @memberof Datatable
             */
            DatatableComponent.prototype.setupCustomSearchBar = function ($element, datatable, columns) {
                var $filter = $element.closest('.dataTables_wrapper').find('div.dataTables_filter');
                $filter.children().remove();
                var onSearchBarChange = function (searchCols, searchGlobal) {
                    //clear global search and columns search
                    datatable.search("");
                    $.each(columns, function (colId) {
                        datatable.column(colId).search("");
                    });
                    $.each(searchCols, function (idx, searchCol) {
                        var splits = searchCol.id.split(':'); //example: searchCol = `EmployeeId:1`
                        var colId;
                        $.each(columns, function (colIndex, col) {
                            if (col.ColumnId == splits[0])
                                colId = colIndex;
                        });
                        datatable.column(colId).search(splits[1]);
                        //console.log(`${colId}, ${searchCol.id}`)
                    });
                    datatable.search(searchGlobal);
                    //console.log('search global:' + searchGlobal)
                    datatable.draw();
                };
                var searchBar = new Datatable.Internal.AdvancedSearch.SearchBarComponent($filter, {
                    id: $filter.attr("id"),
                    localList: columns,
                    onChange: onSearchBarChange
                });
                $element.data().searchBar = searchBar;
            };
            DatatableComponent.prototype.registerEvents = function (datatable, options) {
                /**
                * On responsive display event
                * https://datatables.net/reference/event/responsive-display
                * @param {DataTables.DataTable} datatable
                * @memberof Datatable
                *
                * @param {MAFDataTablesSettings} options
                * @memberof DataTables.Settings
                */
                if (options.fixedColumns == undefined) {
                    datatable.on('responsive-display', function (e, datatable, row, showHide, update) {
                        if (showHide) {
                            MAF.Utils.initCommonModules(row.selector.rows.next());
                        }
                    });
                }
            };
            DatatableComponent.componentName = "datatables";
            DatatableComponent.defaults = {
                massSelection: false
            };
            return DatatableComponent;
        }());
        Datatable.DatatableComponent = DatatableComponent;
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable_1) {
        /**
         * load all datatables
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new Datatable().init($container);
        }
        Datatable_1.loadAll = loadAll;
        var Datatable = (function () {
            function Datatable() {
                this.name = "datatable";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Datatable.prototype.initModule = function () {
                Datatable_1.DatatableComponent.initModule();
            };
            ;
            /**
             * setup columns definition, basic option for datatable
             *
             * @param {*} [$container=undefined]
             * @memberof Datatable
             */
            Datatable.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                var that = this;
                $container = MAF.Utils.initSelector($container);
                $.each($container.find("div[data-control='" + this.name + "']"), function (index, elt) {
                    var dtComponent = new Datatable_1.DatatableComponent();
                    dtComponent.init(elt);
                    var $element = $(elt);
                    $element.data(Datatable_1.DatatableComponent.componentName, dtComponent);
                });
            };
            return Datatable;
        }());
        MAF.Main.addModule(new Datatable());
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        /**
         * clear cache of table with table id
         *
         * @export
         * @param {string} tableId
         */
        function clearCache(tableId) {
            //remove in cache
            var query = "^" + (tableId.indexOf("#") != -1 ? tableId.slice(1) : tableId) + "*"; //"#simple" becomes "^simple*"
            var removingList = Datatable.Internal.Caching.list(query);
            for (var idx = 0; idx < removingList.length; idx++) {
                var hashKey = removingList[idx];
                Datatable.Internal.Caching.removeData(hashKey);
            }
            Datatable.Internal.markObsoletedRequests(query);
        }
        Datatable.clearCache = clearCache;
        // function getComponent(selectorId: string): DatatableComponent {
        //     return $(selectorId).data(DatatableComponent.componentName)
        // }
        $.fn.getDatatables = function () {
            var $element = this;
            return $element.data(Datatable.DatatableComponent.componentName);
        };
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var Caching;
            (function (Caching) {
                var cachedDatas = {};
                /**
                 * build hash key for the stored data
                 *
                 * @export
                 * @param {string} tableId
                 * @param {*} request
                 * @param {number} page
                 * @returns {string}
                 */
                function hash(tableId, request, page) {
                    var hashKey;
                    var searchColumnsKey = "";
                    $.each(request.columns, function (idx, col) {
                        searchColumnsKey += col.data + ":" + col.search.value + ";";
                    });
                    var columnOrderKey = "";
                    request.order.forEach(function (value) { return columnOrderKey += value.column + "_" + value.dir; });
                    hashKey = tableId + "_" + request.search.value + "_" + searchColumnsKey + "_" + columnOrderKey + "_" + page;
                    // console.log(hashKey)
                    return hashKey;
                }
                Caching.hash = hash;
                /**
                 * check data and expired time, if data becomes out of date, then clean it up to
                 *
                 * @export
                 * @param {string} requestHashId
                 * @returns {boolean}
                 */
                function hasData(requestHashId) {
                    var item = cachedDatas[requestHashId];
                    if (!item) {
                        return false;
                    }
                    if (item.expiredTime < moment()) {
                        cachedDatas[requestHashId] = undefined; //clear cache
                        return false;
                    }
                    return true;
                }
                Caching.hasData = hasData;
                /**
                 * get data by key
                 *
                 * @export
                 * @param {string} requestHashId
                 * @returns {MAFDataTablesResponseObject}
                 */
                function getData(requestHashId) {
                    if (hasData(requestHashId)) {
                        var item = cachedDatas[requestHashId];
                        return $.extend({}, item.data);
                    }
                    return undefined;
                }
                Caching.getData = getData;
                /**
                 * set data by key + timeout
                 *
                 * @export
                 * @param {string} requestHashId
                 * @param {number} expiredTimeInSeconds
                 * @param {*} response
                 */
                function setData(requestHashId, expiredTimeInSeconds, response) {
                    var item = {
                        expiredTime: moment().add(expiredTimeInSeconds, "s"),
                        data: $.extend({}, response)
                    };
                    //TODO: clone the response
                    cachedDatas[requestHashId] = item;
                }
                Caching.setData = setData;
                /**
                 * get list of hash key from query regex
                 *
                 * @export
                 * @param {string} query
                 * @returns {Array<string>}
                 */
                function list(query) {
                    var result = [];
                    for (var propertyName in cachedDatas) {
                        if (propertyName.match(query) != null) {
                            result.push(propertyName);
                        }
                    }
                    return result;
                }
                Caching.list = list;
                /**
                 * remove data with hash key
                 *
                 * @export
                 * @param {string} requestHashId
                 */
                function removeData(requestHashId) {
                    if (hasData(requestHashId)) {
                        cachedDatas[requestHashId] = undefined;
                    }
                }
                Caching.removeData = removeData;
            })(Caching = Internal.Caching || (Internal.Caching = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var DragDropFile;
    (function (DragDropFile) {
        var Internal;
        (function (Internal) {
            function previewTemplateFunc(showDeleteButton) {
                return "\n        <div class=\"files\">\n            <div class=\"row\">\n                <!-- This is used as the file preview template -->\n                <div class=\"col-md-2\" style=\"display: none;\">\n                    <span class=\"preview\"><img data-dz-thumbnail /></span>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"col-md-12\">\n                        <span class=\"name\" data-dz-name></span> (<span class=\"size\" data-dz-size></span>)\n                    </div>\n                    <div class=\"col-md-12 file-preview\">\n                        <div class=\"progress progress-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\">\n                            <div class=\"progress-bar progress-bar-success\" style=\"width:0%;\" data-dz-uploadprogress></div>\n                        </div>\n                        " + (showDeleteButton ? "\n                            <button data-dz-remove class=\"btn-delete btn btn-danger btn-outline-danger btn-circle\">\n                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                            </button>" : "") + "\n                        \n                    </div>\n                    <div class=\"col-md-12\">\n                        <strong class=\"error text-danger\" data-dz-errormessage></strong>\n                    </div>\n                    \n                </div>\n    \n            </div>\n      \n      </div>\n      ";
            }
            Internal.previewTemplateFunc = previewTemplateFunc;
        })(Internal = DragDropFile.Internal || (DragDropFile.Internal = {}));
    })(DragDropFile = MAF.DragDropFile || (MAF.DragDropFile = {}));
})(MAF || (MAF = {}));
///<reference path="Template.ts"/>
var MAF;
(function (MAF) {
    var DragDropFile;
    (function (DragDropFile_1) {
        /**
        * load all copies
        *
        * @export
        * @param {*} $container
        */
        function loadAll($container) {
            new DragDropFile().init($container);
        }
        DragDropFile_1.loadAll = loadAll;
        var onChangeType;
        (function (onChangeType) {
            onChangeType[onChangeType["addedFile"] = 0] = "addedFile";
            onChangeType[onChangeType["removingFile"] = 1] = "removingFile";
        })(onChangeType || (onChangeType = {}));
        var DragDropFile = (function () {
            function DragDropFile() {
                this.name = "drag-drop-file";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            DragDropFile.prototype.initModule = function () {
                Dropzone.autoDiscover = false;
            };
            ;
            DragDropFile.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                var $copies = $container.find("[data-control='" + this.name + "']");
                var that = this;
                $.each($copies, function (index, elt) {
                    var $elt = $(elt);
                    var rawOptions = $elt.data();
                    var defaults = DragDropFile_1.Internal.GetDefaultOptions(rawOptions);
                    var options = $.extend({}, defaults, rawOptions, {
                        previewTemplate: DragDropFile_1.Internal.previewTemplateFunc(rawOptions.onChange != undefined)
                    });
                    $elt.addClass("dropzone");
                    var myDropzone = new Dropzone(elt, options);
                });
            };
            return DragDropFile;
        }());
        function initFunction() {
            // var mocks: Array<any> = [{ name: "myimage.jpg", size: 12345, type: 'image/jpeg', url: "" }]
            var addedFiles = this.options.addedFiles;
            if (addedFiles) {
                for (var i = 0; i < addedFiles.length; i++) {
                    var addedFile = addedFiles[i];
                    addedFile.accepted = true;
                    this.files.push(addedFile);
                    this.emit('addedfile', addedFile);
                    this.createThumbnailFromUrl(addedFile, addedFile.url);
                    this.emit('complete', addedFile);
                    addedFile.previewElement.classList.add('dz-success');
                    addedFile.previewElement.classList.add('dz-complete');
                    $(addedFile.previewElement).find(".progress-bar").addClass("progress-bar-success");
                    $(addedFile.previewElement).find(".progress-bar").css("width", "100%");
                    // this.options.thumbnail.call(this, mockFile, "http://someserver.com/myimage.jpg");
                }
            }
            this.on("addedfile", function (file) {
                var onAddedFileFunc = this.options.onChange;
                if (onAddedFileFunc) {
                    MAF.Utils.executeFunctionByName(onAddedFileFunc, this, { file: file, eventType: onChangeType.addedFile });
                }
                // myDropzone.enqueueFile(file);
            });
            this.on("removedfile", function (file) {
                var onRemovingFunc = this.options.onChange;
                if (onRemovingFunc) {
                    MAF.Utils.executeFunctionByName(onRemovingFunc, this, { file: file, eventType: onChangeType.removingFile });
                }
                // console.log(file)
                // if (this.options.deleteUrl) {
                //     $.ajax(this.options.deleteUrl, {
                //         data: { id: file.id },
                //         success: () => {
                //             MAF.Utils.showSuccess(`${file.name} has ben removed`)
                //         }
                //     })
                // }
            });
            // Update the total progress bar
            this.on("totaluploadprogress", function (progress) {
            });
            this.on("sending", function (file) {
            });
            this.on("error", function (file, errorMessage) {
                this.removeFile(file);
                MAF.Utils.showError(errorMessage);
                // file.previewElement.querySelector(".error").innerHTML = "something went wrong"
            });
            // Hide the total progress bar when nothing's uploading anymore
            this.on("queuecomplete", function (progress) {
            });
        }
        DragDropFile_1.initFunction = initFunction;
        MAF.Main.addModule(new DragDropFile());
    })(DragDropFile = MAF.DragDropFile || (MAF.DragDropFile = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var DragDropFile;
    (function (DragDropFile) {
        var Internal;
        (function (Internal) {
            var defaultsSingle = {
                paramName: "file",
                maxFilesize: 2,
                maxFiles: 1,
                createImageThumbnails: true,
                ignoreHiddenFiles: true,
                autoProcessQueue: true,
                init: DragDropFile.initFunction
            };
            var defaultsMultiple = $.extend({}, defaultsSingle, {
                maxFiles: 2,
            });
            function GetDefaultOptions(rawOptions) {
                var defaults;
                if (rawOptions.multiple) {
                    defaults = defaultsMultiple;
                }
                else {
                    defaults = defaultsSingle;
                }
                return defaults;
            }
            Internal.GetDefaultOptions = GetDefaultOptions;
        })(Internal = DragDropFile.Internal || (DragDropFile.Internal = {}));
    })(DragDropFile = MAF.DragDropFile || (MAF.DragDropFile = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Elmah;
    (function (Elmah_1) {
        function trace() {
            var trace = [];
            var current = this;
            while (current) {
                trace.push(current.signature());
                current = current.caller;
            }
            return trace;
        }
        ;
        function signature() {
            var signature = {
                name: this.getName(),
                params: [],
                toString: function () {
                    var params = this.params.length > 0 ?
                        "'" + this.params.join("', '") + "'" : "";
                    return this.name + "(" + params + ")";
                }
            };
            if (this.arguments) {
                for (var x = 0; x < this.arguments.length; x++)
                    signature.params.push(this.arguments[x]);
            }
            return signature;
        }
        ;
        function getName() {
            if (this.name)
                return this.name;
            var definition = this.toString().split("\n")[0];
            var exp = /^function ([^\s(]+).+/;
            if (exp.test(definition))
                return definition.split("\n")[0].replace(exp, "$1") || "anonymous";
            return "anonymous";
        }
        ;
        var logErrorUrl;
        var logError = function (ex, stack) {
            if (ex == null)
                return;
            if (logErrorUrl == null) {
                console.warn('Elmah: logErrorUrl must be defined.');
                return;
            }
            var url = ex.fileName != null ? ex.fileName : document.location;
            if (stack == null && ex.stack != null)
                stack = ex.stack;
            // format output
            var out = ex.message != null ? ex.name + ": " + ex.message : ex;
            out += ": at document path '" + url + "'.";
            if (stack != null)
                out += "\n  at " + stack.join("\n  at ");
            // send error message
            $.ajax({
                type: "POST",
                url: logErrorUrl,
                data: { message: out }
            });
        };
        /**
         * override window.onerror with our callback, make ajax request to server.
         *
         * @class Elmah
         * @implements {Module}
         */
        var Elmah = (function () {
            function Elmah() {
                this.name = "Elmah";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Elmah.prototype.initModule = function () {
            };
            ;
            Elmah.prototype.init = function () {
                logErrorUrl = $("#elmah").data("url");
                window.onerror = this.onError;
            };
            Elmah.prototype.onError = function (msg) {
                if (arguments != null && arguments.callee != null && arguments.callee.trace)
                    logError(msg, arguments.callee.trace());
            };
            return Elmah;
        }());
        MAF.Main.addModule(new Elmah());
    })(Elmah = MAF.Elmah || (MAF.Elmah = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Feedback;
    (function (Feedback_1) {
        Feedback_1.className = "feedback-open";
        Feedback_1.containerClass = ".feedback-container";
        /**
         * toggle feedback by class; add ctrl event to open clip
         *
         * @param {Event} ev
         * @returns
         */
        function toggleClass(ev) {
            var $this = $(this);
            var $container = $this.closest(Feedback_1.containerClass);
            if (ev && ev.ctrlKey) {
                var clipsUrl = $container.data("clips");
                window.open(clipsUrl);
            }
            else {
                if ($container.hasClass(Feedback_1.className)) {
                    $container.removeClass(Feedback_1.className);
                }
                else {
                    $container.addClass(Feedback_1.className);
                    if ($("#userMenu").hasClass("open")) {
                        $("#userMenu").find("[data-toggle='dropdown']").dropdown("toggle");
                        if (document.getElementById("fakeAuth") !== null) {
                            $("#fakeAuth").find(".toSelect2").select2("close");
                        }
                    }
                }
            }
            return false;
        }
        var Feedback = (function () {
            function Feedback() {
                this.name = "Feedback";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Feedback.prototype.initModule = function () {
            };
            ;
            Feedback.prototype.init = function () {
                var flag = $(".feedback>.flag");
                flag.on("click", toggleClass);
                var $container = flag.closest(Feedback_1.containerClass);
                var right = -$container.width() + 33;
                $container.css("right", right);
                $container.mouseenter(function () {
                    $container.css("right", right + 41);
                }).mouseleave(function () {
                    $container.css("right", right);
                });
                // retro compatibility with old Feedback version
                window["FeedbackSuccess"] = this.feedbackSuccess;
                window["FeedbackFailure"] = this.feedbackFailure;
                window["FeedbackOnBegin"] = this.feedbackOnBegin;
                window["FeedbackOnComplete"] = this.feedbackOnComplete;
            };
            Feedback.prototype.feedbackSuccess = function (data) {
                if (data.error) {
                    MAF.Utils.showError("An error occurred while sending your feedback :( </br>" + data.errorMessage);
                }
                else {
                    MAF.Utils.showInfo("Your feedback has been sent! Thank you for contributing to our application");
                }
            };
            Feedback.prototype.feedbackFailure = function () {
                MAF.Utils.showError("An error occurred while sending your feedback :( Please contact 911");
            };
            Feedback.prototype.feedbackOnBegin = function () {
                MAF.Utils.showInfo("Please wait while we are processing to your request...");
            };
            Feedback.prototype.feedbackOnComplete = function () {
                $("#modal").modal("hide");
            };
            return Feedback;
        }());
        MAF.Main.addModule(new Feedback());
    })(Feedback = MAF.Feedback || (MAF.Feedback = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Modal;
    (function (Modal_1) {
        var Modal = (function () {
            function Modal() {
                this.name = "modal";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Modal.prototype.initModule = function () {
            };
            ;
            /**
             * inject event onLoad and onHidden for modal
             *
             * @param {*} [$container=undefined]
             * @memberof Modal
             */
            Modal.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $(".modal").on("loaded.bs.modal", onModalLoaded);
                // empty modal on hide
                $("body").on("hidden.bs.modal", ".modal", onModalHidden);
                $("[data-toggle='modal']").each(function (index, elem) {
                    if ($(elem).attr("title") !== "undefined") {
                        //if title is present, by current tooltip init code, we will set it as tooltip. WHICH IS WRONG!
                        $(elem).click(function (event) {
                            $(elem).tooltip("hide");
                        });
                    }
                });
            };
            return Modal;
        }());
        function onModalLoaded(eventObject) {
            // enable modal validation
            $.validator.unobtrusive.parse($(eventObject.target));
            MAF.Utils.initCommonModules($(eventObject.target));
            var options = $(this).data("bs.modal").options;
            if (options &&
                options.draggable &&
                options.draggable === true) {
                $(options.target + " div.modal-dialog").draggable({
                    handle: ".modal-header",
                    cursor: "move"
                });
            }
        }
        function onModalHidden(eventObject) {
            var options = $(this).data("bs.modal").options;
            if (options.remote != undefined) {
                $(this).removeData("bs.modal");
                //$(this).find(".modal-content").html("<span class=\"loading\"></span>");
                $(this).find(".modal-content").html("<div id=\"loader\" style=\"margin: 0px; left: 44%; width: 77px; height: 77px\"></div>");
            }
            if (options &&
                options.draggable &&
                options.draggable === true) {
                $(options.target + " div.modal-dialog").css({
                    "top": "auto",
                    "left": "auto"
                });
            }
        }
        MAF.Main.addModule(new Modal());
    })(Modal = MAF.Modal || (MAF.Modal = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var PushNotification;
    (function (PushNotification_1) {
        /**
        * load all popovers
        *
        * @export
        * @param {*} $container
        */
        function loadAll($container) {
            new PushNotification().init();
        }
        PushNotification_1.loadAll = loadAll;
        var PushNotification = (function () {
            function PushNotification() {
                this.name = "pushnotification";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            PushNotification.prototype.initModule = function () {
            };
            ;
            PushNotification.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                var that = this;
                var $notifications = $container.find("[data-control='" + that.name + "']");
                if ($notifications.length > 0 && $("#notificationModal").length == 0) {
                    var options_1 = $notifications.eq(0).data();
                    $("body").append(that.modalTemplate(options_1));
                    if (options_1.hasContent)
                        $("#notificationModal").modal("show");
                    $("#no-remind").on("click", function (e) {
                        e.preventDefault();
                        $.ajax({
                            method: "POST",
                            url: options_1.url,
                            data: {
                                mediaCommunicationId: options_1.mediaCommunicationId,
                                employeeLogin: options_1.employee
                            },
                            cache: false,
                            success: function () {
                                $("#notificationModal").modal("hide");
                            }
                        });
                    });
                }
            };
            PushNotification.prototype.modalTemplate = function (options) {
                var template = "<div id=\"notificationModal\" class=\"modal\" data-has-content=\"" + options.hasContent + "\">\n                    <div class=\"modal-dialog\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                                <h4 class=\"modal-title\">Lastest News!</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div id=\"notification-publish-date\" style=\"margin-bottom: 3px\">" + options.publishDate + "</div>\n                                <div id=\"notification-content\" style=\"margin-bottom: 3px\">" + (options.content ? options.content : "") + "</div>\n                                <div id=\"notification-image\" style=\"text-align: center\">" + (options.image ? "<img style=\"width:100%;\" src=\"" + options.image + "\" />" : "") + "</div>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                                <button type=\"button\" class=\"btn btn-success\" id=\"no-remind\" data-url=\"" + options.url + "\">Don't show me next time</button>\n                            </div>\n                        </div>\n                    </div>\n                    <input type=\"hidden\" id=\"pushEmployeeLogin\" name=\"pushEmployeeLogin\" value=\"" + options.employee + "\" />\n                    <input type=\"hidden\" id=\"pushApplicationName\" name=\"pushApplicationName\" value=\"" + options.application + "\"/>\n                    <input type=\"hidden\" id=\"pushMediaCommunicationId\" name=\"pushMediaCommunicationId\" value=\"" + options.mediaCommunicationId + "\"/>\n                </div>";
                return template;
            };
            return PushNotification;
        }());
        MAF.Main.addModule(new PushNotification());
    })(PushNotification = MAF.PushNotification || (MAF.PushNotification = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var MassSelection;
    (function (MassSelection) {
        var Internal;
        (function (Internal) {
            var CheckboxComponent = (function () {
                function CheckboxComponent(dom, options) {
                    var that = this;
                    this._props = options;
                    this.dom = dom;
                    this.id = this.dom.data("value").toString();
                    this.dom.off("change");
                    this.dom.on("change", function (e) {
                        that._props.onChange(that.id, $(e.currentTarget).prop("checked"));
                    });
                }
                CheckboxComponent.prototype.update = function (states) {
                    this.dom.prop("checked", states.selected);
                };
                CheckboxComponent.prototype.isChecked = function () {
                    return this.dom.prop("checked");
                };
                return CheckboxComponent;
            }());
            Internal.CheckboxComponent = CheckboxComponent;
        })(Internal = MassSelection.Internal || (MassSelection.Internal = {}));
    })(MassSelection = MAF.MassSelection || (MAF.MassSelection = {}));
})(MAF || (MAF = {}));
// module MAF.MassSelection {
//     export function loadAll($container: any) {
//         $container = Utils.initSelector($container);
//         let $elements = $container.find("[data-control=\"MassAction2\"]");
//         $.each($elements, (index, element) => {
//             var $element = $(element)
//             var massSelectionComp: Internal.MassSelectionComponent
//             if ($element.hasData("mass-action2")) {
//                 massSelectionComp = $element.data("mass-action2")
//                 massSelectionComp.load()
//                 massSelectionComp.update()
//             }
//             else {
//                 massSelectionComp = new Internal.MassSelectionComponent($element, {
//                     id: $element.attr("id"),
//                     onMassSelectionChange: $element.data().onMassSelectionChange
//                 })
//                 $element.data("mass-action2", massSelectionComp)
//             }
//         });
//     }
// }
var MAF;
(function (MAF) {
    var MassSelection;
    (function (MassSelection) {
        var Internal;
        (function (Internal) {
            /**
             * Component to store selected items. Init this component will also bind to all related checkboxes (currently available)
             * For checkboxes that being destroyed, this component still hold ids of selected items
             *
             * @export
             * @class MassSelectionComponent
             */
            var MassSelectionComponent = (function () {
                function MassSelectionComponent(dom, props) {
                    this.dom = dom;
                    this._$counter = this.dom.siblings("span.badge");
                    this._props = props;
                    this._states = {
                        selectedIds: []
                    };
                    this.load();
                }
                MassSelectionComponent.prototype.getCheckBoxes = function () {
                    var that = this;
                    var cbs = [];
                    $.each($(".mass-checkbox[for='" + this._props.id + "']"), function (idx, checkbox) {
                        var checkboxComp;
                        if ($(checkbox).data("checkbox-component")) {
                            checkboxComp = $(checkbox).data("checkbox-component");
                        }
                        else {
                            checkboxComp = new Internal.CheckboxComponent($(checkbox), {
                                onChange: function (itemId, selected) { return that.checkboxOnChance(itemId, selected); }
                            });
                            $(checkbox).data("checkbox-component", checkboxComp);
                        }
                        cbs.push(checkboxComp);
                    });
                    return cbs;
                };
                MassSelectionComponent.prototype.initSelectionCheckBoxes = function () {
                    var that = this;
                    this.getCheckBoxes().forEach(function (cb) {
                        if (that._states.selectedIds.indexOf(cb.id) != -1) {
                            cb.update({ selected: true });
                        }
                    });
                };
                MassSelectionComponent.prototype.checkboxOnChance = function (itemId, selected) {
                    this.syncSelectedItem(itemId, selected);
                    // console.log(this._states.selectedIds)
                    this.update();
                    this.triggerChange();
                };
                MassSelectionComponent.prototype.syncSelectedItem = function (itemId, selected) {
                    if (selected) {
                        //add into selectedIds
                        this._states.selectedIds.push(itemId);
                    }
                    else {
                        //remove from SelectedIds
                        this._states.selectedIds.splice(this._states.selectedIds.indexOf(itemId), 1);
                    }
                };
                MassSelectionComponent.prototype.initSelectAll = function () {
                    var that = this;
                    $(this.dom).off("click");
                    $(this.dom).on("click", function (e) {
                        var checked = $(that.dom).prop("checked");
                        that.getCheckBoxes().forEach(function (cb) {
                            //sync checkbox state with `select all` checkbox
                            if ((checked && !cb.isChecked())
                                || (!checked && cb.isChecked())) {
                                cb.update({ selected: checked });
                                that.syncSelectedItem(cb.id, checked);
                            }
                        });
                        that.update();
                        that.triggerChange();
                        var $label = $(that.dom.parent());
                        if (checked)
                            $label.attr("title", $label.data("true-title") + "").tooltip("fixTitle").tooltip("show");
                        else
                            $label.attr("title", $label.data("false-title") + "").tooltip("fixTitle").tooltip("show");
                        that.updateCount();
                    });
                };
                MassSelectionComponent.prototype.load = function () {
                    this.initSelectAll();
                    this.initSelectionCheckBoxes();
                };
                MassSelectionComponent.prototype.update = function () {
                    this.updateCount();
                };
                MassSelectionComponent.prototype.triggerChange = function () {
                    if (this._props.onMassSelectionChange) {
                        this._props.onMassSelectionChange(this._states.selectedIds);
                        // MAF.Utils.executeFunctionByName(this._props.onMassSelectionChange, this, this._states.selectedIds)
                    }
                };
                /**
                 * update the number that display besides select all checkbox
                 * Update the state of the checkboxes (checked, uncheck, indeterminate) based on available checkboxes
                 *
                 * @private
                 * @memberof MassSelectionComponent
                 */
                MassSelectionComponent.prototype.updateCount = function () {
                    var that = this;
                    this._$counter.text(this._states.selectedIds.length);
                    var nAvailableCheckBoxes = this.getCheckBoxes().length;
                    if (this.getCheckBoxes().filter(function (cbCmp) { return that._states.selectedIds.indexOf(cbCmp.id) >= 0; }).length == nAvailableCheckBoxes) {
                        this.dom.prop("checked", true);
                        this.dom.prop("indeterminate", false);
                    }
                    else if (this.getCheckBoxes().filter(function (cbCmp) { return that._states.selectedIds.indexOf(cbCmp.id) >= 0; }).length == 0) {
                        this.dom.prop("checked", false);
                        this.dom.prop("indeterminate", false);
                    }
                    else {
                        this.dom.prop("indeterminate", true);
                    }
                };
                MassSelectionComponent.componentName = "MassAction2";
                return MassSelectionComponent;
            }());
            Internal.MassSelectionComponent = MassSelectionComponent;
        })(Internal = MassSelection.Internal || (MassSelection.Internal = {}));
    })(MassSelection = MAF.MassSelection || (MAF.MassSelection = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Phone;
    (function (Phone_1) {
        Phone_1.UtilsScript = $("#AALibUrl").data("intltelinput");
        /**
         * load all phone controls
         *
         * @export
         * @param {*} $container
         */
        function loadAll($container) {
            new Phone().init($container);
        }
        Phone_1.loadAll = loadAll;
        var Phone = (function () {
            function Phone() {
                this.name = "phone";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Phone.prototype.initModule = function () {
            };
            ;
            /**
             * get phone template, display input phone control
             *
             * @param {*} [$container=undefined]
             * @memberof Phone
             */
            Phone.prototype.init = function (container) {
                if (container === void 0) { container = undefined; }
                var that = this;
                var $container = MAF.Utils.initSelector(container);
                var elements = $container.find("[data-control='phone']");
                if (elements.length > 0) {
                    var promise = $.Deferred();
                    $.fn.intlTelInput.loadUtilsWithPromise(Phone_1.UtilsScript, promise);
                    //only load component when utils is lazy loaded successfully
                    promise.done(function () {
                        $.each(elements, function (index, elem) {
                            that.initElement(elem);
                        });
                        MAF.Tooltip.loadAll($container);
                        markAsInitialized();
                    });
                }
            };
            Phone.prototype.initElement = function (elem) {
                var $element = $(elem);
                var id = $element.attr("id");
                var name = $element.attr("name");
                var rawOptions = $element.data();
                MAF.Phone.fillCountryData(rawOptions);
                if (rawOptions.isDisplayPhone === false) {
                    //input phone
                    var $phoneInput = $element.find(".amaris-phone-input");
                    InitTelInput($phoneInput);
                    MAF.Utils.addEvent($phoneInput, "change", rawOptions.onChange);
                    MAF.Utils.addEvent($phoneInput, "focus", rawOptions.onFocus);
                    MAF.Utils.addEvent($phoneInput, "blur", rawOptions.onBlur);
                }
                else {
                    //display phone
                    var $temp = $("<input value='" + rawOptions.value + "'></input>");
                    InitTelInput($temp);
                    var countryData = $temp.intlTelInput("getSelectedCountryData");
                    rawOptions.countryDialCode = countryData.dialCode;
                    rawOptions.countryIso2 = countryData.iso2;
                    rawOptions.isoValue = rawOptions.value;
                    $element.append(Phone_1.getDisplayPhoneTemplate(rawOptions));
                    MAF.Utils.addEvent($element, "click", rawOptions.onClick);
                }
            };
            return Phone;
        }());
        MAF.Main.addModule(new Phone());
        /**
         * mark control as initialized
         *
         */
        function markAsInitialized() {
            var $objectsToSet = $(".amaris-phone:not('.initialized')");
            $objectsToSet.addClass("initialized");
        }
        /**
         * reset validation messages
         *
         * @param {any} $obj
         */
        function reset($obj) {
            $obj.removeClass("has-success has-error");
            $obj.find(".form-control-feedback i.fa").removeClass("fa-check fa-exclamation").hide();
        }
        ;
        /**
         * validate input
         *
         * @param {JQuery} that
         */
        function validateInput(that) {
            var formGroup = that.closest(".form-group");
            reset(formGroup);
            if ($.trim(that.val())) {
                if (that.intlTelInput("isValidNumber")) {
                    formGroup.addClass("has-success");
                    formGroup.find(".form-control-feedback i.fa").addClass("fa-check").show();
                }
                else {
                    formGroup.addClass("has-error");
                    formGroup.find(".form-control-feedback i.fa").addClass("fa-exclamation").show();
                }
            }
        }
        /**
         * init input phone
         *
         * @export
         * @param {JQuery} $mainTag
         */
        function InitTelInput($mainTag) {
            // initialise plugin
            $mainTag.intlTelInput({
                //utilsScript: "../Scripts/intl-tel-input/js/utils.js",
                nationalMode: false,
                autoPlaceholder: true
            });
            // on blur: validate
            $mainTag.on("keyup blur", (function () {
                var that = $(this);
                validateInput(that);
            }));
            // on keyup / change flag: reset
            $mainTag.on("change", function () {
                var that = $(this);
                reset(that);
            });
        }
        Phone_1.InitTelInput = InitTelInput;
        function getCountryData(options) {
            var $temp = $("<input value='" + options.value + "'></input>");
            $temp.intlTelInput({
                utilsScript: "../Scripts/intl-tel-input/js/utils.js",
                nationalMode: false,
                autoPlaceholder: true
            });
            return $temp.intlTelInput("getSelectedCountryData");
        }
        function fillCountryData(options) {
            var countryData = getCountryData(options);
            options.needToBeFix = countryData.dialCode ? false : true;
            options.countryIso2 = countryData.iso2;
            options.countryDialCode = countryData.dialCode;
        }
        Phone_1.fillCountryData = fillCountryData;
    })(Phone = MAF.Phone || (MAF.Phone = {}));
})(MAF || (MAF = {}));
$.fn.intlTelInput.loadUtilsWithPromise = function (path, utilsScriptDeferred) {
    var pluginName = "intlTelInput";
    if (!$.fn[pluginName].loadedUtilsScript) {
        // don't do this twice! (dont just check if window.intlTelInputUtils exists as if init plugin multiple times in quick succession, it may not have finished loading yet)
        $.fn[pluginName].loadedUtilsScript = true;
        // dont use $.getScript as it prevents caching
        $.ajax({
            type: 'GET',
            url: path,
            complete: function () {
                utilsScriptDeferred.resolve();
                // tell all instances that the utils request is complete
                //   $(".intl-tel-input input").intlTelInput("handleUtils");
            },
            dataType: "script",
            cache: true
        });
    }
    else if (utilsScriptDeferred) {
        utilsScriptDeferred.resolve();
    }
};
var MAF;
(function (MAF) {
    var Phone;
    (function (Phone) {
        /**
         * get good phone/bad phone template
         *
         * @export
         * @param {Options} options
         * @returns {JQuery}
         */
        function getDisplayPhoneTemplate(options) {
            var template;
            if (options.needToBeFix) {
                template = $(DisplayBadPhoneNoFix(options.isoValue, options.value));
            }
            else {
                template = $(DisplayPhoneTemplateNoEdit(options.isoValue, options.value, options.countryIso2, options.countryDialCode));
            }
            return template;
        }
        Phone.getDisplayPhoneTemplate = getDisplayPhoneTemplate;
        function DisplayBadPhoneNoFix(isoValue, displayValue, placement) {
            if (placement === void 0) { placement = "top"; }
            return "\n            <span class=\"color-orange-dark\" \n                data-toggle=\"tooltip\" title=\"This phone number is not consistent and cannot be used for Click to call\" data-placement=\"" + placement + "\">\n                <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\n                " + displayValue + "\n            </span>\n        ";
        }
        function DisplayPhoneTemplateNoEdit(isoValue, displayValue, countryIso2, countryDialCode, placement) {
            if (placement === void 0) { placement = "top"; }
            return "\n        " + DisplayGoodPhone(displayValue, countryIso2, countryDialCode, placement, isoValue) + "\n        ";
        }
        function DisplayGoodPhone(displayValue, countryIso2, countryDialCode, placement, isoValue) {
            if (placement === void 0) { placement = "top"; }
            var formattedValue = intlTelInputUtils.formatNumber(displayValue, countryIso2, 1 /* INTERNATIONAL */);
            return "\n        <a href =\"tel:" + isoValue + "\" title=\"" + countryIso2.toUpperCase() + " +" + countryDialCode + "\" data-placement=\"" + placement + "\" data-toggle=\"tooltip\" >\n            <div class=\"iti-flag " + countryIso2 + "\" style=\"padding-bottom: 4px;padding-right: 10px; display: inline-block;\"></div>\n            <span class=\"fa fa-{5}\"></span> " + formattedValue + "\n        </a>\n        ";
        }
    })(Phone = MAF.Phone || (MAF.Phone = {}));
})(MAF || (MAF = {}));
// ReSharper disable InconsistentNaming
var MAF;
(function (MAF) {
    var CurrencyPicker;
    (function (CurrencyPicker_1) {
        /**
         * load all Currency picker
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new CurrencyPicker().init($container);
        }
        CurrencyPicker_1.loadAll = loadAll;
        var CurrencyPicker = (function () {
            function CurrencyPicker() {
                this.name = "currency-picker";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            CurrencyPicker.prototype.initModule = function () {
            };
            ;
            /**
             * setup data attributes, then call select2
             *
             * @param {*} [$container=undefined]
             * @memberof CurrencyPicker
             */
            CurrencyPicker.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $container.find("[data-control='" + this.name + "']").each(function () {
                    var $elt = $(this);
                    var options = $.extend({
                        templateSelection: MAF.CurrencyPicker.formatSelection
                    }, CurrencyPicker.defaults, $elt.data());
                    options.templateResult = MAF.CurrencyPicker.formatResult($elt, options.highlight, options.showLabel),
                        MAF.Select2.Internal.initElement($elt, options);
                });
            };
            CurrencyPicker.defaults = {
                minimumInputLength: 1,
                showLabel: true,
                highlight: true,
            };
            return CurrencyPicker;
        }());
        MAF.Main.addModule(new CurrencyPicker());
        var widthForSmallUI = 200;
        function internalFormatResult(currency, query, highlight, showLabel) {
            //format result text
            // text should be 'Symbol ID'
            var rawText = currency.text + " - " + currency.Label;
            //var rawText = showLabel ? currency.text + " - " + currency.Label : currency.text;
            var formattedText = rawText;
            if (highlight) {
                if (query.term) {
                    $.each(query.term.split(" "), function (index, value) {
                        var matchedText = new RegExp(value, "i").exec(rawText);
                        if (matchedText !== null) {
                            // formattedText = rawText.replace(matchedText[0].toString(), `<b>${matchedText[0].toString()}</b>`);
                            formattedText = rawText.replace(matchedText[0].toString(), "{{}}" + matchedText[0].toString() + "{/{}}");
                            rawText = formattedText;
                        }
                        formattedText = formattedText.replace(new RegExp("{{}}", "g"), "<b>");
                        formattedText = formattedText.replace(new RegExp("{/{}}", "g"), "</b>");
                    });
                }
            }
            return "<span\">" + formattedText + "</div>";
        }
        /**
         * the templating function, used by default in EmployeeSearch
         * controller return list of CurrencyPickerResult objects
         *
         * @export
         * @param {CurrencyPickerResult} object
         * @returns
         */
        function formatResult($element, highlight, showLabel) {
            return function (result) {
                if (result.loading)
                    return result.text;
                var rawOptions = $element.data();
                var query = {
                    term: rawOptions.queryTerm
                };
                var $elementWidth = $element.next()[0].offsetWidth;
                if ($elementWidth <= widthForSmallUI)
                    return internalFormatResult(result, query, highlight, showLabel);
                return internalFormatResult(result, query, highlight, showLabel);
            };
        }
        CurrencyPicker_1.formatResult = formatResult;
        /**
         * format selected item
         *
         * @export
         * @param {CurrencyPickerResult} result
         * @param {JQuery} container
         * @returns
         */
        function formatSelection(result, container) {
            if (result.id == "")
                return result.text;
            var optionData = $(result.element).data();
            result = $.extend(result, optionData);
            var elementWidth = container[0].offsetWidth;
            if (elementWidth <= widthForSmallUI)
                return result.text;
            return result.text;
        }
        CurrencyPicker_1.formatSelection = formatSelection;
    })(CurrencyPicker = MAF.CurrencyPicker || (MAF.CurrencyPicker = {}));
})(MAF || (MAF = {}));
// ReSharper disable InconsistentNaming
var MAF;
(function (MAF) {
    var PeoplePicker;
    (function (PeoplePicker_1) {
        /**
         * load all people picker
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new PeoplePicker().init($container);
        }
        PeoplePicker_1.loadAll = loadAll;
        var PeoplePicker = (function () {
            function PeoplePicker() {
                this.defaults = {
                    highlight: true,
                    showThumbnail: true,
                };
                this.name = "people-picker";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            PeoplePicker.prototype.initModule = function () {
            };
            ;
            /**
             * setup data attributes, then call select2
             *
             * @param {*} [$container=undefined]
             * @memberof PeoplePicker
             */
            PeoplePicker.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                var that = this;
                $container = MAF.Utils.initSelector($container);
                $container.find("[data-control='" + this.name + "']").each(function () {
                    var $elt = $(this);
                    var options = $.extend({
                        templateSelection: MAF.PeoplePicker.formatSelection
                    }, that.defaults, $elt.data());
                    options.highlight = options.highlight == false ? false : true;
                    options.showThumbnail = options.showThumbnail == false ? false : true;
                    options.templateResult = MAF.PeoplePicker.formatResult($elt, options.highlight, options.showThumbnail);
                    MAF.Select2.Internal.initElement($elt, options);
                });
            };
            return PeoplePicker;
        }());
        MAF.Main.addModule(new PeoplePicker());
        var widthForSmallUI = 200;
        function internalFormatResult(user, query, highlight, showThumbnail, showTrigram, showEmail) {
            //format result text
            var rawText = showTrigram && user.Trigram ? user.text + " | " + user.Trigram : user.text;
            var formattedText = rawText;
            if (highlight) {
                if (query.term) {
                    $.each(query.term.split(" "), function (index, value) {
                        var matchedText = new RegExp(value, "i").exec(rawText);
                        if (matchedText !== null) {
                            // formattedText = rawText.replace(matchedText[0].toString(), `<b>${matchedText[0].toString()}</b>`);
                            formattedText = rawText.replace(matchedText[0].toString(), "{{}}" + matchedText[0].toString() + "{/{}}");
                            rawText = formattedText;
                        }
                        formattedText = formattedText.replace(new RegExp("{{}}", "g"), "<b>");
                        formattedText = formattedText.replace(new RegExp("{/{}}", "g"), "</b>");
                    });
                }
            }
            var formattedEmail = "";
            if (showEmail) {
                var rawEmail = user.Email;
                formattedEmail = rawEmail;
                if (highlight) {
                    //use this regex to check the case with "ama": .*ama.*@.+
                    if (new RegExp(".*" + query.term + ".*@.+", "i").test(rawEmail)) {
                        formattedEmail = rawEmail.replace(query.term, "<b>" + query.term + "</b>");
                    }
                }
            }
            var strThumbnailWarper = "";
            if (showThumbnail) {
                strThumbnailWarper = "<div class=\"thumbnail-warper\"><img class=\"employee-thumbnail\" alt=\"\" src=\"" + MAF.Utils.UserThumbnail(user.id) + "\" /></div>";
            }
            return "<div class=\"people-picker-item\">" + strThumbnailWarper + "<div class=\"details-warper\">" + formattedText + "<br/>" + formattedEmail + "<br/></div></div>";
        }
        /**
         * the templating function, used by default in EmployeeSearch
         * controller return list of PeoplePickerResult objects
         *
         * @export
         * @param {PeoplePickerResult} object
         * @param {JQuery} container
         * @param {*} query
         * @returns
         */
        function formatResult($element, highlight, showThumbnail) {
            return function (result) {
                if (result.loading)
                    return result.text;
                var rawOptions = $element.data();
                var query = {
                    term: rawOptions.queryTerm
                };
                var $elementWidth = $element.next()[0].offsetWidth;
                if ($elementWidth <= widthForSmallUI)
                    return internalFormatResult(result, query, highlight, showThumbnail, false, false);
                return internalFormatResult(result, query, highlight, showThumbnail, true, true);
            };
        }
        PeoplePicker_1.formatResult = formatResult;
        /**
         * format selected item
         *
         * @export
         * @param {PeoplePickerResult} object
         * @param {JQuery} container
         * @returns
         */
        function formatSelection(object, container) {
            if (object.id == "")
                return object.text;
            var optionData = $(object.element).data();
            object = $.extend(object, optionData);
            var elementWidth = container[0].offsetWidth;
            if (elementWidth <= widthForSmallUI)
                return object.text;
            if (object.Trigram) {
                return object.text + " | " + object.Trigram;
            }
            return object.text;
        }
        PeoplePicker_1.formatSelection = formatSelection;
    })(PeoplePicker = MAF.PeoplePicker || (MAF.PeoplePicker = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            var Strategy;
            (function (Strategy) {
                "use strict";
                /**
                 * strategy for select2 single
                 *
                 * @export
                 * @class Select2BaseStrategy
                 * @implements {ISelect2Strategy}
                 */
                var Select2BaseStrategy = (function () {
                    function Select2BaseStrategy() {
                    }
                    Select2BaseStrategy.prototype.initOptions = function ($elt, rawOptions) {
                        var isAjax = $elt.hasClass("select2-ajax"); //TODO: improve
                        //default values
                        var options = $.extend(rawOptions, {
                            allowClear: rawOptions.allowClear || rawOptions.valRequired == undefined,
                            placeholder: rawOptions.placeholder,
                            width: rawOptions.width,
                            selectionAdapter: rawOptions.selectionAdapter
                        });
                        //need to set back to data attributes
                        //https://github.com/select2/select2/issues/4289
                        if (rawOptions.dropdownParent) {
                            $elt.data("dropdown-parent", $(rawOptions.dropdownParent));
                        }
                        if (rawOptions.createOnSearchUrl) {
                            //some explanation:
                            //https://stackoverflow.com/a/30019966/3161505
                            options.tags = true;
                            options.createTag = function (term) {
                                return {
                                    id: term.term,
                                    text: term.term,
                                    optionState: Strategy.Select2NewOptionState.new
                                };
                            };
                        }
                        if (isAjax) {
                            var dataFunction = function (params) {
                                var data = [];
                                if (rawOptions.dependsOn) {
                                    var elements = rawOptions.dependsOn;
                                    $.each(elements.split(","), function (index, value) {
                                        data.push({ name: value, value: $("#" + value).val() });
                                    });
                                }
                                data.push({ name: "query", value: params.term });
                                return $.param(data);
                            };
                            var url = rawOptions.action;
                            if (!url) {
                                console.error("Query function not defined. Please provide a source.");
                            }
                            options.ajax = {
                                url: url,
                                dataType: "json",
                                data: dataFunction,
                                processResults: function (data, params) {
                                    //TODO: remove this hack :), this query is to pass it to people picker, new templateResult nolonger contain query params
                                    //So instead of return only the data, return data with matched position like in google maps api
                                    $elt.data("query-term", params.term);
                                    return {
                                        results: data
                                    };
                                },
                                delay: rawOptions.delay || 400
                            };
                            options.minimumInputLength = rawOptions.minimumInputLength;
                        }
                        else {
                            options.minimumInputLength = rawOptions.minimumInputLength || 0;
                        }
                        //if the data from razor code, it suppose to be a string, then convert it into a anonymous function
                        if (rawOptions.templateResult && typeof (rawOptions.templateResult) == "string") {
                            var templateResult = rawOptions.templateResult;
                            options.templateResult = function (data) {
                                return MAF.Utils.execFunction(templateResult, ['data'], $elt, arguments);
                            };
                        }
                        if (rawOptions.templateSelection && typeof (rawOptions.templateSelection) == "string") {
                            var templateSelection = rawOptions.templateSelection;
                            options.templateSelection = function (data, container) {
                                return MAF.Utils.execFunction(templateSelection, ['data', 'container'], $elt, arguments);
                            };
                        }
                        //HACK: fix Bug 5471: Create on Search feature does not work if selected value is empty
                        //https://tfs.amaris.com/tfs/Packages/Amaris.Application/_workitems/edit/5471
                        if (options.ajax && rawOptions.createOnSearchUrl) {
                            options.insertTag = function (data, tag) {
                                // Insert the tag at the end of the results
                                tag.id = "-1";
                                data.unshift(tag);
                            };
                        }
                        return options;
                    };
                    /**
                     * no special adapter, so no need to setup anything
                     *
                     * @param {JQuery} $elt
                     * @param {Select2Options} options
                     * @returns {Select2Options}
                     * @memberof Select2BaseStrategy
                     */
                    Select2BaseStrategy.prototype.preInitSelect2 = function ($elt, options) {
                        return options;
                    };
                    /**
                     * add support for create on search
                     *
                     * @param {JQuery} $elt
                     * @param {Select2Options} options
                     * @param {*} select2Container
                     * @memberof Select2BaseStrategy
                     */
                    Select2BaseStrategy.prototype.postInitSelect2 = function ($elt, options, select2Container) {
                        if (options.createOnSearchUrl) {
                            $elt.on("select2:select", function () {
                                var $this = $(this);
                                var arrObject = $this.select2("data");
                                if (!Array.isArray(arrObject)) {
                                    arrObject = [arrObject];
                                }
                                var dataObject;
                                for (var index = 0; index < arrObject.length; index++) {
                                    var element = arrObject[index];
                                    if (element.optionState == Strategy.Select2NewOptionState.new) {
                                        dataObject = element;
                                        break;
                                    }
                                }
                                if (!dataObject) {
                                    return;
                                }
                                if (dataObject.optionState != undefined) {
                                    //remove `new` option with a `creating` one
                                    $this.find("option[data-select2-tag='true'][value='" + dataObject.id + "']").remove();
                                    dataObject.optionState = Strategy.Select2NewOptionState.creating;
                                    AppendOptionsFromData($this, dataObject, defaultTemplateResult);
                                    $.post({
                                        url: options.createOnSearchUrl,
                                        data: { value: dataObject.text }
                                    }).done(function (data) {
                                        if (typeof data === "undefined" || typeof data.id === "undefined" || typeof data.text === "undefined") {
                                            MAF.Utils.showError("An error has occurred");
                                        }
                                        else {
                                            //remove `creating` option with a `created` one
                                            data.optionState = Strategy.Select2NewOptionState.created; //set this option for render
                                            $this.find("option[value='" + dataObject.id + "']").remove();
                                            AppendOptionsFromData($this, data, defaultTemplateResult);
                                            $elt.trigger('change.select2');
                                            MAF.Utils.showSuccess("Created");
                                        }
                                    });
                                }
                            });
                        }
                        //Stop opening the dropdown when clicking on x button
                        //https://github.com/select2/select2/issues/3209
                        $elt.on("select2:unselect", function (evt) {
                            if (!evt.params.originalEvent) {
                                return;
                            }
                            evt.params.originalEvent.stopPropagation();
                        });
                        $elt.on("change", function (evt) {
                            if (options.onChange) {
                                MAF.Utils.execFunction(options.onChange, ['evt'], this, arguments);
                            }
                        });
                        $elt.on("select2:open", function (evt) {
                            if (options.onShow) {
                                MAF.Utils.execFunction(options.onShow, ['evt'], this, arguments);
                            }
                        });
                        $elt.on("select2:close", function (evt) {
                            if (options.onHide) {
                                MAF.Utils.execFunction(options.onHide, ['evt'], this, arguments);
                            }
                        });
                        initSelection($elt, options);
                    };
                    Select2BaseStrategy.prototype.validateOnChange = function ($elt) {
                        var rawOptions = $elt.data();
                        $elt.change(function (e) {
                            if (rawOptions.valRequired && $elt.val() == null) {
                                $elt.closest(".form-group")
                                    .addClass('has-error');
                            }
                            else {
                                $elt.closest(".form-group")
                                    .removeClass('has-error');
                            }
                        });
                    };
                    return Select2BaseStrategy;
                }());
                Strategy.Select2BaseStrategy = Select2BaseStrategy;
                function defaultTemplateResult(data) {
                    var status = "";
                    if (data.optionState !== Strategy.Select2NewOptionState.created) {
                        status = "<em>(" + Strategy.Select2NewOptionState[data.optionState] + ")</em>";
                    }
                    var formatedText = data.optionState == undefined ? data.text : data.text + " " + status;
                    return "<span>" + formatedText + "</span>";
                }
                Strategy.defaultTemplateResult = defaultTemplateResult;
                /**
                 * init select2 at init
                 *
                 * @param {JQuery} $element
                 * @returns
                 */
                function initSelection($element, options) {
                    var id = $element.attr("value");
                    if (!id)
                        return;
                    if (!$element.hasClass("select2-ajax"))
                        return;
                    var isMultiple = (options.type === "multiple");
                    if (id) {
                        if (isMultiple) {
                            if (options.displaytext && Array.isArray(options.displaytext)) {
                                $.each(id.split(","), function (index, value) {
                                    AppendOptionsFromData($element, { id: id[index], text: options.displaytext[index] });
                                });
                                return;
                            }
                        }
                        else if (options.defaultdisplay) {
                            AppendOptionsFromData($element, { id: id, text: options.defaultdisplay });
                            return;
                        }
                    }
                    var sendingData = [];
                    if (options.dependsOn) {
                        $.each(options.dependsOn.split(","), function (index, value) {
                            //At init, ajax == true, can only get value by `.attr("value")`, not `.val()`
                            sendingData.push({ name: value, value: $("#" + value).attr("value") });
                        });
                    }
                    sendingData.push({ name: "id", value: id });
                    var $request = $.ajax({
                        url: options.action,
                        data: sendingData
                    });
                    $request.then(function (data) {
                        // This assumes that the data comes back as an array of data objects
                        // The idea is that you are using the same callback as the old `initSelection`
                        AppendOptionsFromData($element, data);
                        // $element.trigger('change.select2');
                    });
                }
                function AppendOptionsFromData($element, data, renderer) {
                    if (renderer === void 0) { renderer = undefined; }
                    if (!Array.isArray(data)) {
                        data = [data];
                    }
                    for (var d = 0; d < data.length; d++) {
                        var item = data[d];
                        // Create the DOM option that is pre-selected by default
                        var text = renderer == undefined ? item.text : renderer(item);
                        var option = new Option("", item.id, true, true);
                        var $option = $(option);
                        $option.html(text);
                        $option.data(item); //move rest ot the item to data attributes so that templateSelection can access from it
                        $element.append(option);
                    }
                }
            })(Strategy = Internal.Strategy || (Internal.Strategy = {}));
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
/// <reference path="Select2Strategies/Select2BaseStrategy.ts"/>
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2_1) {
        "use strict";
        /**
         * load all select2
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new Select2().init($container);
        }
        Select2_1.loadAll = loadAll;
        function setSelect2Default(dataAttr, data) {
            return $.fn.select2.defaults.set(dataAttr, data);
        }
        function setupDefaultValue() {
            setSelect2Default("theme", "bootstrap");
            setSelect2Default("allowClear", true);
            setSelect2Default("placeholder", "Select a(n) item");
            setSelect2Default("escapeMarkup", function (markup) { return markup; });
            setSelect2Default("width", "off");
            setSelect2Default("closeOnSelect", true);
            // setSelect2Default("ajax--dataType", "json");
            // setSelect2Default("ajax--delay", 400);
            setSelect2Default("minimumInputLength", 3);
            setSelect2Default("templateResult", Select2_1.Internal.Strategy.defaultTemplateResult);
            setSelect2Default("templateSelection", Select2_1.Internal.Strategy.defaultTemplateResult);
        }
        setupDefaultValue();
        var Select2 = (function () {
            function Select2() {
                this.name = "select2";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            Select2.prototype.initModule = function () {
            };
            ;
            /**
             * init container; create strategy: single, multiple or tag
             *
             * @param {*} [$container=undefined]
             * @memberof Select2
             */
            Select2.prototype.init = function ($container) {
                if ($container === void 0) { $container = undefined; }
                $container = MAF.Utils.initSelector($container);
                $container.find("[data-control='" + this.name + "']").each(function (index, elem) {
                    var $elt = $(elem);
                    var rawOptions = $.extend({}, $elt.data());
                    Select2_1.Internal.initElement($elt, rawOptions);
                });
            };
            return Select2;
        }());
        MAF.Main.addModule(new Select2());
        //TODO: check if this validator is working ? don't know it's use cases
        if ($.validator != undefined && $.validator.setDefaults != undefined) {
            $.validator.setDefaults({
                ignore: $(":hidden").not($(".select2-container:visible").next("input.toSelect2,input.select2-ajax")).selector
            });
        }
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
/// <reference path="Select2Strategies/Select2BaseStrategy.ts"/>
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            "use strict";
            //TODO: remove class toSelect2 select2-ajax
            function initElement($elt, rawOptions) {
                var strategy;
                if (rawOptions.type === "tags") {
                    strategy = new Internal.Strategy.Select2TagStrategy();
                }
                else if (rawOptions.type === "multiple") {
                    strategy = new Internal.Strategy.Select2MultipleStrategy();
                }
                else {
                    strategy = new Internal.Strategy.Select2BaseStrategy();
                }
                var options;
                if (rawOptions.isInitialized) {
                    clearEvents($elt);
                }
                options = strategy.initOptions($elt, rawOptions);
                options = strategy.preInitSelect2($elt, options);
                var $eltSelect2 = $elt.select2(options);
                var select2Container = $eltSelect2.data("select2");
                strategy.postInitSelect2($elt, options, select2Container);
                strategy.validateOnChange($elt);
                rawOptions.isInitialized = true;
            }
            Internal.initElement = initElement;
            /**
             * clear all events that attached to this object so that select2 can init again
             *
             * @param {JQuery} $elt
             */
            function clearEvents($elt) {
                var events = $._data($elt.get(0), "events"); //https://stackoverflow.com/a/2518441/3161505
                for (var eventName in events) {
                    var event_1 = events[eventName];
                    $elt.off(eventName);
                }
            }
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
(function () {
    /**
    * fix issue with number
    *
    */
    var original = $.fn.editableutils.setCursorPosition;
    $.fn.editableutils.setCursorPosition = function () {
        try {
            original.apply(this, Array.prototype.slice.call(arguments));
        }
        catch (e) { }
    };
    /**
     * setup default icons as fa
     *
     */
    $.fn.editableform.buttons =
        '<button type="submit" class="btn btn-primary btn-sm editable-submit">' +
            '<i class="fa fa-check" aria-hidden="true"></i>' +
            '</button>' +
            '<button type="button" class="btn btn-default btn-sm editable-cancel">' +
            '<i class="fa fa-times" aria-hidden="true"></i>' +
            '</button>';
    /**
     * to overwrite xeditable default placement - top
     *
     */
    $.fn.editableContainer.defaults.placement = "auto top";
})();
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable_1) {
        /**
         * load all xeditable
         *
         * @export
         * @param {any} $container
         */
        function loadAll($container) {
            new XEditable().init($container);
        }
        XEditable_1.loadAll = loadAll;
        var XEditable = (function () {
            function XEditable() {
                this.name = "XEditable";
            }
            /**
             * init this module, called once on init Main module
             *
             */
            XEditable.prototype.initModule = function () {
            };
            ;
            /**
             * init xeditable: check data-type to create option,
             * check data-editable
             *
             * @param {*} [$container=undefined]
             * @memberof XEditable
             */
            XEditable.prototype.init = function (container) {
                if (container === void 0) { container = undefined; }
                var that = this;
                var $container = MAF.Utils.initSelector(container);
                var $element = $container.find(".xeditable").not(".editable");
                //check phone type exists
                if ($element.filter(function (idx, ele) { return $(ele).data("type") === "phone"; }).length > 0) {
                    var promise = $.Deferred();
                    //then wait util utils.js is loaded
                    $.fn.intlTelInput.loadUtilsWithPromise(MAF.Phone.UtilsScript, promise);
                    promise.done(function () {
                        $element.each(function () {
                            that.initElement(this);
                        });
                    });
                }
                else {
                    $element.each(function () {
                        that.initElement(this);
                    });
                }
                $container.find(".editable").filter(function () { return $(this).data("xeditable.handled") == undefined; })
                    .each(function () {
                    $(this).data("xeditable.handled", true);
                });
                $container.find(".xeditable-new").editable();
                $container.find(".editable-save").click(function () {
                    var url = $(this).data("url");
                    $(".xeditable-new").editable("submit", {
                        url: url,
                        ajaxOptions: {
                            method: "post"
                        }
                    });
                });
                $container.find("[data-toggle=tooltip]").tooltip();
                $container.find("[data-toggle=popover]").popover();
                $container.find("body:not(.popover)").on("click", function (e) {
                    //did not click a popover toggle or popover
                    if ($(e.target).data("toggle") !== "popover"
                        && $(e.target).parents(".popover.in").length === 0) {
                        $("[data-toggle=\"popover\"]").popover("hide");
                    }
                });
                preventFailValidationFromNestedForms($container);
            };
            XEditable.prototype.resetXEditable = function ($element) {
                $element.data("value", "").text("").editable("destroy");
                new XEditable().init($element.parent());
            };
            ;
            XEditable.prototype.initElement = function (ele) {
                var $this = $(ele);
                var rawOptions = $this.data();
                var $thisType = $this.data("type");
                //handle our switch / custom boolean / rating, since it does not related to xeditable work flow
                if ($thisType === "switch" || $thisType === "custom-boolean") {
                    return XEditable_1.Internal.CustomBool($this);
                }
                else if ($thisType === "raty") {
                    return XEditable_1.Internal.Raty($this);
                }
                var optionBuilder = XEditable_1.Internal.OptionsFactory.createOptions($this, $thisType);
                var xeditableOptions = optionBuilder.init($this);
                var isDisabled = ($this.attr("disabled") !== undefined);
                if (rawOptions.isEditable === false || isDisabled === true) {
                    return rawOptions.displayNonEditable();
                }
                ;
                $this.editable(xeditableOptions);
                $this
                    .on("hidden", function (e, reason) {
                    if ($this.data("open-next")) {
                        var $next = $(this).closest("td").next("td").children("span");
                        if (reason != "manual" && reason != undefined && reason != "onblur") {
                            $next.editable("show");
                        }
                        else {
                            $next.editable("hide");
                        }
                    }
                })
                    .on("shown", function (e, editable) {
                    if (editable) {
                        $(".editable-clear a").click(function (e) {
                            e.preventDefault();
                            var $elem = $(this).closest(".editable-container").parent().find(".xeditable");
                            this.resetXEditable($elem);
                            $elem.editable("submit");
                        });
                    }
                })
                    .on("save", function (e, params) {
                    if ($(this).data("on-save")) {
                        MAF.Utils.execFunction($(this).data("on-save"), ['e', 'params'], this, arguments);
                    }
                });
            };
            return XEditable;
        }());
        MAF.Main.addModule(new XEditable());
        /**
         * prevent an issue when xeditable inside a form.
         * https://github.com/vitalets/x-editable/issues/384
         *
         * @export
         * @param {any} [$container=undefined]
         */
        function preventFailValidationFromNestedForms($container) {
            if ($container === void 0) { $container = undefined; }
            $container = MAF.Utils.initSelector($container);
            $container.find(".xeditable").on("shown", function () {
                var $innerForm = $(this).data("editable").input.$input.closest("form");
                var $outerForm = $innerForm.parents("form").eq(0);
                $innerForm.data("validator", $outerForm.data("validator"));
            });
        }
        XEditable_1.preventFailValidationFromNestedForms = preventFailValidationFromNestedForms;
        ;
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            /**
             * in case of bool: display a checkbox
             *
             * @export
             * @param {JQuery} $elements
             */
            function CustomBool($elements) {
                $elements.filter(function () { return $(this).data("xeditable.handled") == undefined; })
                    .each(function () {
                    var $element = $(this);
                    var rawOptions = $element.data();
                    var isDisabled = ($element.attr("disabled") !== undefined);
                    if (rawOptions.isEditable == false) {
                        $element.attr("disabled", "disabled");
                    }
                    else if (isDisabled) {
                        // Do nothing here
                    }
                    else {
                        $element.data("xeditable.handled", true)
                            .addClass("editable")
                            .addClass("editable-click");
                        $element.on("click", function () {
                            var that = $(this);
                            var url = that.data("url");
                            if (!url)
                                return;
                            var checked = this.checked;
                            var pk = that.data("pk");
                            var name = that.data("name");
                            $.post(url, { name: name, pk: pk, value: checked })
                                .done(function (data) {
                                MAF.Utils.showResult(data);
                                // element.trigger('saved', { newValue: value, submitValue: value, response: e });
                                if ($(that).data("on-save")) {
                                    MAF.Utils.execFunction($(that).data("on-save"), ['data'], this, arguments);
                                }
                            });
                        });
                    }
                });
                setIndeterminateCheckboxes($elements);
            }
            Internal.CustomBool = CustomBool;
            /**
         * Init all checkboxes inside container marked with indeterminate state and then removes the attribute
         * @param $elements - the container to look for the controls
         */
            function setIndeterminateCheckboxes($elements) {
                $elements.filter("input[type='checkbox'][indeterminate='true']")
                    .each(function (index, elem) {
                    $(elem).prop("indeterminate", true);
                    $(elem).removeAttr("indeterminate");
                });
            }
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            /**
             * validate function from unobtrusive data attributes
             *
             * @export
             * @param {any} v
             * @returns
             */
            function defaultValidation(v) {
                var objData = $(this).data();
                if (objData.val) {
                    //Required
                    if (objData.valRequired && !v)
                        return objData.valRequired;
                    //StringLength 
                    if ((objData.valLengthMin != undefined && v.length < objData.valLengthMin)
                        || (objData.valLengthMax != undefined && v.length > objData.valLengthMax))
                        return objData.valLength;
                    //MaxLength
                    if (objData.valMaxlengthMax != undefined && v.length > objData.valMaxlengthMax) {
                        return objData.valMaxlength;
                    }
                    //Range
                    if ((objData.valRangeMin != undefined && Number(v) < objData.valRangeMin)
                        || (objData.valRangeMax != undefined && Number(v) > objData.valRangeMax))
                        return objData.valRange;
                    //Regex
                    if (objData.valRegexPattern != undefined && !v.match(objData.valRegexPattern))
                        return objData.valRegex;
                }
                else if (objData.type == 'customobject') {
                    var valMsg = [];
                    for (var property in v) {
                        var correctProp = property.charAt(0).toUpperCase() + property.toLowerCase().slice(1);
                        if (v.hasOwnProperty(property) && objData['val' + correctProp] != undefined) {
                            var valProp = objData['val' + correctProp];
                            //Required
                            if (valProp['data-val-required'] != undefined && !v[property])
                                valMsg.push(valProp['data-val-required']);
                            else if ((valProp['data-val-length-min'] != undefined && v[property].length < valProp['data-val-length-min'])
                                || (valProp['data-val-length-max'] != undefined && v[property].length > valProp['data-val-length-max']))
                                valMsg.push(valProp['data-val-length']);
                            else if (valProp['data-val-maxlength-max'] != undefined && v[property].length > valProp['data-val-maxlength-max'])
                                valMsg.push(valProp['data-val-maxlength']);
                            else if ((valProp['data-val-range-min'] != undefined && Number(v[property]) < valProp['data-val-range-min'])
                                || (valProp['data-val-range-max'] != undefined && Number(v[property]) > valProp['data-val-range-max']))
                                valMsg.push(valProp['data-val-range']);
                            //Regex
                            if (valProp['data-val-regex-pattern'] != undefined && !v[property].match(valProp['data-val-regex-pattern']))
                                valMsg.push(valProp['data-val-regex']);
                        }
                    }
                    return valMsg.join('\n');
                }
            }
            Internal.defaultValidation = defaultValidation;
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            /**
             * based on type, create appropriate option builder and build an option.
             *
             * @export
             * @class OptionsFactory
             */
            var OptionsFactory = (function () {
                function OptionsFactory() {
                }
                OptionsFactory.createOptions = function ($elt, type) {
                    if (type === "text") {
                        return new Internal.Options.XEditableTextOptions();
                    }
                    else if (type === "numeric") {
                        return new Internal.Options.XEditableNumericOptions();
                    }
                    else if (type === "eonasdanDateTime") {
                        return new Internal.Options.XEditableDatetimeOptions();
                    }
                    else if (type === "textarea") {
                        return new Internal.Options.XEditableTextAreaOptions();
                    }
                    else if (type === "select4") {
                        if ($elt.data('multiple') == true)
                            return new Internal.Options.XEditableSelect2MultipleOptions();
                        return new Internal.Options.XEditableSelect2Options();
                    }
                    else if (type === "select4Tags") {
                        return new Internal.Options.XEditableSelect2TagsOptions();
                    }
                    else if (type === "customobject") {
                        return new Internal.Options.XEditableCustomObjectOptions();
                    }
                    else if (type === "phone") {
                        return new Internal.Options.XEditablePhoneOptions();
                    }
                    return new Internal.Options.XEditableGenericOptions();
                };
                return OptionsFactory;
            }());
            Internal.OptionsFactory = OptionsFactory;
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            /**
             * create xeditable rating control
             *
             * @export
             * @param {JQuery} $container
             */
            function Raty($container) {
                var $this = $container;
                var option = $this.data();
                var isDisabled = ($this.attr("disabled") !== undefined);
                var ratyOptions = {
                    path: ($this.data("base-url") == "/" ?
                        $this.data("base-url") + "Content/raty-js/images/" :
                        $this.data("base-url") + "/Content/raty-js/images/"),
                    score: $this.data("score"),
                    readOnly: option.isEditable === false || isDisabled === true ? true : false,
                    click: function (score) {
                        //if data do not change, then no ajax request
                        if ($this.data("score") === score)
                            return;
                        var url = option.url;
                        $.post({
                            url: url,
                            data: {
                                pk: option.pk,
                                name: option.name,
                                value: score
                            }
                        }).done(function (data) {
                            $this.data("score", score);
                            MAF.Utils.showResult(data);
                            // element.trigger('saved', { newValue: value, submitValue: value, response: e });
                            if (option.onSave) {
                                MAF.Utils.execFunction(option.onSave, ['data'], this, arguments);
                            }
                        }).fail(function (res) {
                            MAF.Utils.showError("Error when updating");
                        });
                    }
                };
                $this.raty(ratyOptions);
            }
            Internal.Raty = Raty;
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var AdvancedSearch;
            (function (AdvancedSearch) {
                /**
                 * a component to display items (list of columns) inside a dropdown, hook on click event
                 * this component is displayed or not based on its parent
                 *
                 * @export
                 * @class DropDownComponent
                 */
                var DropDownComponent = (function () {
                    function DropDownComponent($parent, options) {
                        this.name = "dropdown";
                        this.$parent = $parent;
                        this._props = options;
                        this.render([]);
                    }
                    DropDownComponent.prototype.renderItem = function (item) {
                        return "\n            <li><a href=\"\" data-value=\"" + item.id + "\">" + item.text + "</a></li>\n            ";
                    };
                    DropDownComponent.prototype.renderItems = function (items) {
                        var that = this;
                        var itemsStr = "";
                        $.each(items, function (idx, item) {
                            itemsStr += that.renderItem(item);
                        });
                        return itemsStr;
                    };
                    DropDownComponent.prototype.render = function (items) {
                        var that = this;
                        var template = "\n            <ul class=\"dropdown-menu\" aria-labelledby=\"" + this._props.for + "\">\n            </ul>\n            ";
                        this.dom = $(template);
                        this.$parent.append(this.dom);
                        this.update(items);
                    };
                    DropDownComponent.prototype.update = function (items) {
                        var that = this;
                        this.dom.children().remove();
                        this.dom.append(this.renderItems(items));
                        this.dom.find("a").on("click", function (e) {
                            e.preventDefault();
                            if (that._props.onClick) {
                                that._props.onClick($(e.currentTarget).data("value"));
                            }
                        });
                    };
                    return DropDownComponent;
                }());
                AdvancedSearch.DropDownComponent = DropDownComponent;
            })(AdvancedSearch = Internal.AdvancedSearch || (Internal.AdvancedSearch = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var AdvancedSearch;
            (function (AdvancedSearch) {
                var SearchState;
                (function (SearchState) {
                    SearchState[SearchState["SelectColumn"] = 0] = "SelectColumn";
                    SearchState[SearchState["AddSearchColumn"] = 1] = "AddSearchColumn"; //state2: after select a column, user add query value to search on this column
                })(SearchState || (SearchState = {}));
                /**
                 * master component for advanced search.
                 * Store data/states
                 * Whenever receive event from child component, update _states, update component accordingly
                 * this component provided with 2 basic states: state1 - select a column; state2 -write query for that column, enter to add the tag and switch back to state 1
                 *
                 * @export
                 * @class SearchBarComponent
                 */
                var SearchBarComponent = (function () {
                    function SearchBarComponent($parent, options) {
                        var _this = this;
                        this.defaultState = {
                            queryData: [],
                            searchGlobal: "",
                            selectingColumnId: undefined,
                            searchPlaceholder: "Search on all columns",
                            state: SearchState.SelectColumn
                        };
                        this._isDropdownDisplay = false;
                        var that = this;
                        this.name = "search-bar";
                        this.id = options.id + "_search_bar";
                        this.$parent = $parent;
                        this._props = options;
                        this._states = this.defaultState;
                        this.render();
                        this._inlineInputComp = new AdvancedSearch.SearchBarTextboxComponent(this._$searchBar, {
                            onEnter: function (searchText) { return _this.onAddingTag(searchText); }
                        });
                        this._tagsComp = new AdvancedSearch.TagsComponent(this._$searchBar, {
                            onItemRemove: function (itemId) {
                                that.onRemovingItem(itemId);
                            }
                        });
                        this._dropdownComp = new AdvancedSearch.DropDownComponent(this.dom, {
                            for: this.id,
                            onClick: function (value) { return _this.onSelectColumn(value); }
                        });
                        this._$clearAllButton.on("click", function (e) {
                            e.stopPropagation();
                            that.onClearAll();
                        });
                        this.$parent.on('hide.bs.dropdown', function () {
                            // console.log("hide dropdown" + that.id)
                            that._isDropdownDisplay = false;
                        });
                        this._$searchBar.on("click", function (e) {
                            e.stopPropagation();
                            // console.log("on search bar click")
                            that.update();
                            that.showDropdown();
                        });
                        this.update();
                        this.hideDropdown();
                    }
                    SearchBarComponent.prototype.render = function () {
                        var template = "\n            <div class=\"advanced-search-textbox dropdown\">\n                <div class=\"search-bar input-group form-control col-md-12\">\n                    <span class=\"search-icon text-center\"><i class=\"fa fa-search\"></i></span>\n                    <span class=\"search-icon text-center clear-all\"><i class=\"fa fa-times\"></i></span>\n                </div>\n            </div>\n            ";
                        this.dom = $(template);
                        this.$parent.append(this.dom);
                        this._$searchBar = this.dom.find(".search-bar");
                        var hiddenDropdownToggleTemplate = "\n            <div id=\"" + this.id + "\" class=\"hidden\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            </div>\n            ";
                        this._$hiddenDropdownToggle = $(hiddenDropdownToggleTemplate);
                        this.dom.append(this._$hiddenDropdownToggle);
                        this._$clearAllButton = this.dom.find(".clear-all");
                    };
                    //on select2:selecting of state 1
                    SearchBarComponent.prototype.onSelectColumn = function (itemId) {
                        this._states.selectingColumnId = itemId;
                        //init state 2
                        this.addSearchColumn_updateState();
                        this.addSearchColumn_UpdateComponent();
                    };
                    SearchBarComponent.prototype.onAddingTag = function (searchText) {
                        var _this = this;
                        if (this._states.state == SearchState.SelectColumn) {
                            this._states.searchGlobal = searchText;
                        }
                        else {
                            //state 2
                            this._states.queryData.push({
                                id: this._states.selectingColumnId + ":" + searchText,
                                text: this._props.localList.filter(function (v) { return v.ColumnId == _this._states.selectingColumnId; })[0].Header + ": " + searchText //TODO
                            });
                            this._states.searchGlobal = "";
                            //change back to state 1
                            this._states.state = SearchState.SelectColumn;
                            this.showDropdown();
                        }
                        this.triggerChange();
                        this.update();
                    };
                    SearchBarComponent.prototype.onRemovingItem = function (itemId) {
                        //itemId => EmployeeId:adf
                        for (var index = 0; index < this._states.queryData.length; index++) {
                            var searchColumns = this._states.queryData[index];
                            if (searchColumns.id == itemId) {
                                this._states.queryData.splice(index, 1);
                            }
                        }
                        this.triggerChange();
                        this.update();
                    };
                    SearchBarComponent.prototype.onClearAll = function () {
                        this._states.queryData = [];
                        this._states.searchGlobal = "";
                        this.triggerChange();
                        this.update();
                    };
                    SearchBarComponent.prototype.triggerChange = function () {
                        this._props.onChange(this._states.queryData, this._states.searchGlobal);
                    };
                    /**
                     * main update function, used whenever there is a change in _state, it will:
                     * calculate other properties of _states object
                     * update child component
                     *
                     * @private
                     * @memberof SearchBarComponent
                     */
                    SearchBarComponent.prototype.update = function () {
                        if (this._states.state == SearchState.SelectColumn) {
                            this.selectColumn_updateState();
                            this.selectColumn_UpdateComponent();
                        }
                        else {
                            this.addSearchColumn_updateState();
                            this.addSearchColumn_UpdateComponent();
                        }
                        //update common Comp
                        if (this._states.queryData.length > 0) {
                            this._$clearAllButton.removeClass("hidden");
                        }
                        else {
                            this._$clearAllButton.addClass("hidden");
                        }
                    };
                    SearchBarComponent.prototype.selectColumn_updateState = function () {
                        this._states.state = SearchState.SelectColumn;
                        this._states.selectingColumnId = undefined;
                        if (this._states.queryData.length == this._props.localList.length) {
                            this._states.searchPlaceholder = "No more column to search";
                        }
                        else if (this._states.queryData.length == 0) {
                            this._states.searchPlaceholder = "Search on all columns: ";
                        }
                        else {
                            this._states.searchPlaceholder = "Search on other columns: ";
                        }
                    };
                    SearchBarComponent.prototype.addSearchColumn_updateState = function () {
                        var _this = this;
                        this._states.state = SearchState.AddSearchColumn;
                        this._states.searchPlaceholder = "Search on " + this._props.localList.filter(function (v) { return v.ColumnId == _this._states.selectingColumnId; })[0].Header + " column: ";
                    };
                    /**
                     * update component for state 1: select columns
                     *
                     * @memberof SearchBarComponent
                     */
                    SearchBarComponent.prototype.selectColumn_UpdateComponent = function () {
                        var that = this;
                        var filteredList = [];
                        $.each(this._props.localList, function (idx, localItem) {
                            var isExist = false;
                            for (var index = 0; index < that._states.queryData.length; index++) {
                                var element = that._states.queryData[index];
                                if (element.id.toString().indexOf(localItem.ColumnId + ":") != -1) {
                                    isExist = true;
                                    break;
                                }
                            }
                            if (!isExist) {
                                filteredList.push({ id: localItem.ColumnId, text: localItem.Header });
                            }
                        });
                        this._dropdownComp.update(filteredList);
                        if (filteredList.length > 0) {
                            this.showDropdown();
                        }
                        else {
                            this.hideDropdown();
                        }
                        this._tagsComp.update({
                            items: this._states.queryData
                        });
                        this._inlineInputComp.update({
                            placeholder: this._states.searchPlaceholder,
                            searchText: this._states.searchGlobal,
                            show: this._states.queryData.length < this._props.localList.length,
                            inlineType: AdvancedSearch.SearchBarColumnType.String
                        });
                    };
                    /**
                     * update component for state 2: add a tag to search on a column
                     *
                     * @memberof SearchBarComponent
                     */
                    SearchBarComponent.prototype.addSearchColumn_UpdateComponent = function () {
                        var _this = this;
                        this._tagsComp.update({
                            items: this._states.queryData
                        });
                        var inlineInPutType = this._props.localList.filter(function (v) { return v.ColumnId == _this._states.selectingColumnId; })[0].Type;
                        this._inlineInputComp.update({
                            placeholder: this._states.searchPlaceholder,
                            searchText: this._states.searchGlobal,
                            show: true,
                            inlineType: inlineInPutType
                        });
                        this._inlineInputComp.focus();
                    };
                    SearchBarComponent.prototype.showDropdown = function () {
                        if (!this._isDropdownDisplay) {
                            // console.log("real show dropdown: " + this.id)
                            this._$hiddenDropdownToggle.dropdown("toggle");
                            this._isDropdownDisplay = true;
                        }
                    };
                    SearchBarComponent.prototype.hideDropdown = function () {
                        if (this._isDropdownDisplay) {
                            this._$hiddenDropdownToggle.dropdown("toggle");
                            this._isDropdownDisplay = false;
                        }
                    };
                    return SearchBarComponent;
                }());
                AdvancedSearch.SearchBarComponent = SearchBarComponent;
            })(AdvancedSearch = Internal.AdvancedSearch || (Internal.AdvancedSearch = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var AdvancedSearch;
            (function (AdvancedSearch) {
                var SearchBarColumnType;
                (function (SearchBarColumnType) {
                    SearchBarColumnType["String"] = "String";
                    SearchBarColumnType["DateTime"] = "DateTime";
                    SearchBarColumnType["Int32"] = "Int32";
                    SearchBarColumnType["Decimal"] = "Decimal";
                })(SearchBarColumnType = AdvancedSearch.SearchBarColumnType || (AdvancedSearch.SearchBarColumnType = {}));
            })(AdvancedSearch = Internal.AdvancedSearch || (Internal.AdvancedSearch = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var AdvancedSearch;
            (function (AdvancedSearch) {
                /**
                 * Display inline textbox for user to query data
                 * TODO: can change to dtp or other component
                 *
                 * @export
                 * @class SearchBarTextboxComponent
                 */
                var SearchBarTextboxComponent = (function () {
                    function SearchBarTextboxComponent($parent, options) {
                        this.defaultState = {
                            placeholder: "Search on all columns",
                            searchText: "",
                            show: true,
                            inlineType: AdvancedSearch.SearchBarColumnType.String
                        };
                        var that = this;
                        this.name = "search-bar-textbox";
                        this.$parent = $parent;
                        this._props = options;
                        this._states = this.defaultState;
                        this.render();
                        this._inputComp = this.createInlineInput(this._states.inlineType);
                        this._inputComp.append();
                        this._$placeholder = this.dom.find(".search-placeholder");
                    }
                    SearchBarTextboxComponent.prototype.createInlineInput = function (columnType) {
                        var that = this;
                        var inlineComp;
                        if (columnType == AdvancedSearch.SearchBarColumnType.DateTime) {
                            inlineComp = this._inputComp = new AdvancedSearch.InlineDatePickerComponent(this.dom, {
                                onEnter: function (text) { return that._props.onEnter(text); }
                            });
                        }
                        else {
                            inlineComp = this._inputComp = new AdvancedSearch.InlineTextboxComponent(this.dom, {
                                onEnter: function (text) { return that._props.onEnter(text); }
                            });
                        }
                        return inlineComp;
                    };
                    SearchBarTextboxComponent.prototype.update = function (newStates) {
                        if (this._states.inlineType != newStates.inlineType) {
                            this._inputComp.destroy();
                            this._inputComp = this.createInlineInput(newStates.inlineType);
                            this._inputComp.append();
                        }
                        this._$placeholder.empty();
                        this._$placeholder.append(newStates.placeholder);
                        this._inputComp.update({
                            text: newStates.searchText,
                            show: newStates.show
                        });
                        this._states = newStates;
                    };
                    SearchBarTextboxComponent.prototype.render = function () {
                        var template = "\n            <div class=\"inline-textbox\">\n                <span class=\"\">\n                    <i class=\"search-placeholder\">" + this._states.placeholder + "</i>\n                </span>\n            </div>\n            ";
                        this.dom = $(template);
                        this.$parent.prepend(this.dom);
                    };
                    SearchBarTextboxComponent.prototype.focus = function () {
                        this._inputComp.focus();
                        //TODO: add real check to open dtp
                        //TEST: open dtp every single time
                    };
                    return SearchBarTextboxComponent;
                }());
                AdvancedSearch.SearchBarTextboxComponent = SearchBarTextboxComponent;
            })(AdvancedSearch = Internal.AdvancedSearch || (Internal.AdvancedSearch = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var AdvancedSearch;
            (function (AdvancedSearch) {
                /**
                 * tags holder component. given list of items (id and text), display list of tags
                 *
                 * @export
                 * @class TagsComponent
                 */
                var TagsComponent = (function () {
                    function TagsComponent($parent, options) {
                        this.defaultState = {
                            items: []
                        };
                        var that = this;
                        this.name = "tags-holder";
                        this._props = options;
                        this._states = this.defaultState;
                        this.$parent = $parent;
                        this.render([]);
                    }
                    TagsComponent.prototype.update = function (states) {
                        var that = this;
                        this._states = states;
                        this.dom.remove();
                        this.render(this._states.items);
                        this.dom.find("i").on("click", function (e) {
                            console.log("Remove item: " + $(e.currentTarget).data().value);
                            that._props.onItemRemove($(e.currentTarget).data().value);
                        });
                    };
                    TagsComponent.prototype.renderItem = function (item) {
                        return "\n            <div class=\"tag tag-primary\"\n                data-value=\"" + item.id + "\">\n                " + item.text + "\n                <i class=\"fa fa-times\" data-value=\"" + item.id + "\"></i>\n            </div>\n            ";
                    };
                    TagsComponent.prototype.renderItems = function (items) {
                        var that = this;
                        var itemsStr = "";
                        $.each(items, function (idx, item) {
                            itemsStr += that.renderItem(item);
                        });
                        return itemsStr;
                    };
                    TagsComponent.prototype.render = function (items) {
                        var template = "\n                " + this.renderItems(items) + "\n            ";
                        this.dom = $(template);
                        this.$parent.prepend(this.dom);
                    };
                    return TagsComponent;
                }());
                AdvancedSearch.TagsComponent = TagsComponent;
            })(AdvancedSearch = Internal.AdvancedSearch || (Internal.AdvancedSearch = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
$.fn.select2.amd.define('select2/selection/allowClearWithoutClearAllOnBackSpace', [
    'jquery',
    'select2/selection/allowClear',
    'select2/utils',
    'select2/keys'
], function ($, AllowClear, Utils, KEYS) {
    /**
     * override the behavior of allow clear module from select2
     *
     */
    function AllowClearWithoutClearAllOnBackSpace() {
        AllowClear.__super__.constructor.apply(this, arguments);
    }
    Utils.Extend(AllowClearWithoutClearAllOnBackSpace, AllowClear);
    AllowClearWithoutClearAllOnBackSpace.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        if (this.placeholder == null) {
            if (this.options.get('debug') && window.console && console.error) {
                console.error('Select2: The `allowClear` option should be used in combination ' +
                    'with the `placeholder` option.');
            }
        }
        this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
            self._handleClear(evt);
        });
        // container.on('keypress', function (evt) {
        //   self._handleKeyboardClear(evt, container);
        // });
    };
    return AllowClearWithoutClearAllOnBackSpace;
});
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            "use strict";
            /**
             * since we override adapters, this function is used to setup them
             * By copying from the origin lib and add **tag case**
             * Tag: basically won't display dropdown list
             *
             * @export
             * @param {Select2Options} options
             * @param {boolean} isTag
             * @returns
             */
            function SetupDropdownAdapter(options, isTag) {
                var Dropdown = $.fn.select2.amd.require('select2/dropdown'), DropdownSearch = $.fn.select2.amd.require('select2/dropdown/search'), MinimumResultsForSearch = $.fn.select2.amd.require('select2/dropdown/minimumResultsForSearch'), CloseOnSelect = $.fn.select2.amd.require('select2/dropdown/closeOnSelect'), AttachBody = $.fn.select2.amd.require('select2/dropdown/attachBody'), Utils = $.fn.select2.amd.require('select2/utils');
                if (options.multiple || isTag) {
                    options.dropdownAdapter = Dropdown;
                }
                else {
                    var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
                    options.dropdownAdapter = SearchableDropdown;
                }
                if (options.minimumResultsForSearch !== 0) {
                    options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
                }
                if (options.closeOnSelect) {
                    options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
                }
                // if (
                //     options.dropdownCssClass != null ||
                //     options.dropdownCss != null ||
                //     options.adaptDropdownCssClass != null
                // ) {
                //     var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');
                //     options.dropdownAdapter = Utils.Decorate(
                //         options.dropdownAdapter,
                //         DropdownCSS
                //     );
                // }
                //if it's tag mode then no need to display dropdown
                if (!isTag) {
                    options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
                }
                return options;
            }
            Internal.SetupDropdownAdapter = SetupDropdownAdapter;
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
//new module the provide selectionContainer template
$.fn.select2.amd.define('select2/selection/multipleWithCssTag', [
    'jquery',
    'select2/selection/multiple',
    'select2/utils'
], function ($, MultipleSelection, Utils) {
    /**
     * override multiple adapter: update tag style, update fa x icon, update focus behavior
     *
     * @param {any} $element
     * @param {any} options
     */
    function MultipleWithCssTag($element, options) {
        MultipleSelection.__super__.constructor.apply(this, arguments);
    }
    Utils.Extend(MultipleWithCssTag, MultipleSelection);
    MultipleWithCssTag.prototype.selectionContainer = function () {
        var $container = $('<li class="select2-selection__choice tag tag-primary">' +
            '<span class="select2-selection__choice__remove fa fa-times" role="presentation">' +
            // '&times;' +
            '</span>' +
            '</li>');
        return $container;
    };
    //Disable focus on close to prevent the glitch (scroll back to the previous focused select2)
    //https://github.com/select2/select2/issues/4983
    MultipleWithCssTag.prototype.bind = function (container, $container) {
        MultipleWithCssTag.__super__.bind.apply(this, [container, $container]);
        var self = this;
        //remove event 'close' that was set in `BaseSelection`
        delete this.container.listeners.close;
        //and replace by another event in which remove the focus
        container.on('close', function () {
            // When the dropdown is closed, aria-expanded="false"
            self.$selection.attr('aria-expanded', 'false');
            self.$selection.removeAttr('aria-activedescendant');
            self.$selection.removeAttr('aria-owns');
            // self.$selection.focus();
            self._detachCloseHandler(container);
        });
    };
    return MultipleWithCssTag;
});
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            "use strict";
            /**
             * Since I can not replace `select2/selection/multiple`in inject process, I need to copy the logic of setting up `SelectionAdapter`
             * Note: Another approach is to copy var ContainerCSS = require(options.amdBase + 'compat/containerCss');
             * from select2 full version to copy, but still not provide a cleaner solution than this
             *
             * @export
             * @param {any} options
             * @returns
             */
            function SetupSelectionAdapter(options) {
                var MultipleSelection = $.fn.select2.amd.require('select2/selection/multipleWithCssTag'), SingleSelection = $.fn.select2.amd.require('select2/selection/single'), Placeholder = $.fn.select2.amd.require('select2/selection/placeholder'), AllowClear = $.fn.select2.amd.require('select2/selection/allowClearWithoutClearAllOnBackSpace'), SelectionSearch = $.fn.select2.amd.require('select2/selection/search'), 
                // ContainerCSS = ($.fn.select2 as any).amd.require('select2/selection/multipleWithCssTag'),
                EventRelay = $.fn.select2.amd.require('select2/selection/eventRelay'), Utils = $.fn.select2.amd.require('select2/utils');
                if (options.multiple) {
                    options.selectionAdapter = MultipleSelection;
                }
                else {
                    options.selectionAdapter = SingleSelection;
                }
                // Add the placeholder mixin if a placeholder was specified
                if (options.placeholder != null) {
                    options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
                }
                if (options.allowClear) {
                    options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
                }
                if (options.multiple) {
                    options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
                }
                // if (
                //     options.containerCssClass != null ||
                //     options.containerCss != null ||
                //     options.adaptContainerCssClass != null
                // ) {
                //     var ContainerCSS = require(options.amdBase + 'compat/containerCss');
                //     options.selectionAdapter = Utils.Decorate(
                //         options.selectionAdapter,
                //         ContainerCSS
                //     );
                // }
                options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
                return options;
            }
            Internal.SetupSelectionAdapter = SetupSelectionAdapter;
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            var Strategy;
            (function (Strategy) {
                "use strict";
                /**
                * state of new option, used in create on search
                *
                * @enum {number}
                */
                var Select2NewOptionState;
                (function (Select2NewOptionState) {
                    Select2NewOptionState[Select2NewOptionState["new"] = 0] = "new";
                    Select2NewOptionState[Select2NewOptionState["creating"] = 1] = "creating";
                    Select2NewOptionState[Select2NewOptionState["created"] = 2] = "created";
                })(Select2NewOptionState = Strategy.Select2NewOptionState || (Strategy.Select2NewOptionState = {}));
            })(Strategy = Internal.Strategy || (Internal.Strategy = {}));
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            var Strategy;
            (function (Strategy) {
                "use strict";
                /**
                 * strategy for multiple
                 *
                 * @export
                 * @class Select2MultipleStrategy
                 * @extends {Select2BaseStrategy}
                 */
                var Select2MultipleStrategy = (function (_super) {
                    __extends(Select2MultipleStrategy, _super);
                    function Select2MultipleStrategy() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Select2MultipleStrategy.prototype.initOptions = function ($elt, rawOptions) {
                        var options = _super.prototype.initOptions.call(this, $elt, rawOptions);
                        options.multiple = true;
                        options.maximumSelectionLength = rawOptions.maximumSelectionLength;
                        options.closeOnSelect = rawOptions.closeOnSelect;
                        return options;
                    };
                    /**
                     * setup default values, so that the dropdownAdapter created from select2 based on options is the same as SetupDropdownAdapter
                     *
                     * @param {JQuery} $elt
                     * @param {Select2Options} options
                     * @returns {Select2Options}
                     * @memberof Select2MultipleStrategy
                     */
                    Select2MultipleStrategy.prototype.preInitSelect2 = function ($elt, options) {
                        if (!options.selectionAdapter) {
                            options = Internal.SetupSelectionAdapter(options);
                        }
                        options = Internal.SetupDropdownAdapter(options, false);
                        var Options = $.fn.select2.amd.require('select2/options');
                        options = new Options(options, $elt).options;
                        return options;
                    };
                    Select2MultipleStrategy.prototype.postInitSelect2 = function ($elt, options, select2Container) {
                        _super.prototype.postInitSelect2.call(this, $elt, options, select2Container);
                        //Stop opening the dropdown when clicking on x button
                        //https://github.com/select2/select2/issues/3209
                        $elt.on("select2:unselect", function (evt) {
                            if (!evt.params.originalEvent) {
                                return;
                            }
                            evt.params.originalEvent.stopPropagation();
                        });
                    };
                    return Select2MultipleStrategy;
                }(Strategy.Select2BaseStrategy));
                Strategy.Select2MultipleStrategy = Select2MultipleStrategy;
            })(Strategy = Internal.Strategy || (Internal.Strategy = {}));
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            var Strategy;
            (function (Strategy) {
                "use strict";
                /**
                 * strategy for tag case
                 *
                 * @export
                 * @class Select2TagStrategy
                 * @extends {Select2MultipleStrategy}
                 */
                var Select2TagStrategy = (function (_super) {
                    __extends(Select2TagStrategy, _super);
                    function Select2TagStrategy() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Select2TagStrategy.prototype.initOptions = function ($elt, rawOptions) {
                        var options = _super.prototype.initOptions.call(this, $elt, rawOptions);
                        options.tags = true;
                        options.tokenSeparators = (rawOptions.tokenSeparators == undefined || rawOptions.tokenSeparators == null) ? DefaultTokenSeparators : rawOptions.tokenSeparators;
                        options.multiple = true;
                        options.matcher = Internal.exactStringMatcher;
                        return options;
                    };
                    Select2TagStrategy.prototype.preInitSelect2 = function ($elt, options) {
                        if (!options.selectionAdapter) {
                            options = Internal.SetupSelectionAdapter(options);
                        }
                        options = Internal.SetupDropdownAdapter(options, true);
                        //setup default values, so that the dropdownAdapter created from select2 based on options is the same as SetupDropdownAdapter
                        var Options = $.fn.select2.amd.require('select2/options');
                        options = new Options(options, $elt).options;
                        return options;
                    };
                    /**
                     * remove some events to adjust tag behavior
                     *
                     * @param {JQuery} $elt
                     * @param {Select2Options} options
                     * @param {*} select2Container
                     * @memberof Select2TagStrategy
                     */
                    Select2TagStrategy.prototype.postInitSelect2 = function ($elt, options, select2Container) {
                        _super.prototype.postInitSelect2.call(this, $elt, options, select2Container);
                        var select2Object = $elt.data("select2");
                        //remove the selection in hidden dropdown
                        select2Object.listeners['results:next'] = function () { };
                        select2Object.listeners['results:previous'] = function () { };
                    };
                    return Select2TagStrategy;
                }(Strategy.Select2MultipleStrategy));
                Strategy.Select2TagStrategy = Select2TagStrategy;
                var DefaultTokenSeparators = [",", " "];
            })(Strategy = Internal.Strategy || (Internal.Strategy = {}));
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Select2;
    (function (Select2) {
        var Internal;
        (function (Internal) {
            "use strict";
            /**
             * tag need a exact matcher for dropdown adapter,
             * not the default one that display all results that start with `query`
             *
             * @export
             * @param {any} params
             * @param {any} data
             * @returns
             */
            function exactStringMatcher(params, data) {
                // Always return the object if there is nothing to compare
                if ($.trim(params.term) === '') {
                    return data;
                }
                // Do a recursive check for options with children
                if (data.children && data.children.length > 0) {
                    // Clone the data object if there are children
                    // This is required as we modify the object to remove any non-matches
                    var match = $.extend(true, {}, data);
                    // Check each child of the option
                    for (var c = data.children.length - 1; c >= 0; c--) {
                        var child = data.children[c];
                        var matches = exactStringMatcher(params, child);
                        // If there wasn't a match, remove the object in the array
                        if (matches == null) {
                            match.children.splice(c, 1);
                        }
                    }
                    // If any children matched, return the new object
                    if (match.children.length > 0) {
                        return match;
                    }
                    // If there were no matching children, check just the plain object
                    return exactStringMatcher(params, match);
                }
                var original = data.text.toUpperCase();
                var term = params.term.toUpperCase();
                // Check if the text contains the term
                if (original === term) {
                    return data;
                }
                // If it doesn't contain the term, don't return anything
                return null;
            }
            Internal.exactStringMatcher = exactStringMatcher;
        })(Internal = Select2.Internal || (Select2.Internal = {}));
    })(Select2 = MAF.Select2 || (MAF.Select2 = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                var XEditableCustomObjectOptions = (function () {
                    function XEditableCustomObjectOptions() {
                    }
                    XEditableCustomObjectOptions.prototype.init = function (elt) {
                        var $this = elt;
                        var value = $this.data("value");
                        var options = $this.data();
                        var xeditableOptions = new Options.XEditableGenericOptions().init(elt);
                        xeditableOptions.displayNonEditable = function displayCustomObjectType() {
                            if (value) {
                                var displayValue = Object.keys(value).map(function (e) {
                                    return value[e];
                                }).join(', ');
                                $this.text(displayValue);
                            }
                        };
                        xeditableOptions = $.extend(options, {
                            params: function stringifyValueParam(params) {
                                params.value = JSON.stringify(params.value);
                                params.viewModelClass = options.viewModelClass;
                                params.type = options.type;
                                return params;
                            },
                            success: function (response, newValue) {
                                if (response.status == "success" && response.text != undefined)
                                    $(elt).data('text', response.text);
                                MAF.Utils.showResult(response);
                            },
                        });
                        return xeditableOptions;
                    };
                    return XEditableCustomObjectOptions;
                }());
                Options.XEditableCustomObjectOptions = XEditableCustomObjectOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                var XEditableDatetimeOptions = (function () {
                    function XEditableDatetimeOptions() {
                    }
                    XEditableDatetimeOptions.prototype.init = function (elt) {
                        var $this = elt;
                        var rawOptions = $this.data();
                        var $this = elt;
                        var xOptions = $.extend(new Options.XEditableGenericOptions().init(elt), {
                            val: rawOptions.val,
                            valRequired: rawOptions.valRequired,
                            placement: rawOptions.placement || "auto bottom"
                        });
                        var dtOptions = {
                            format: rawOptions.viewformat || "DD/MM/YYYY",
                            viewMode: rawOptions.viewMode || "days",
                            minDate: rawOptions.minDate,
                            maxDate: rawOptions.maxDate,
                            range: $this.data("range") || false,
                            stepping: rawOptions.stepping || 5,
                            daysOfWeekDisabled: rawOptions.daysOfWeekDisabled
                        }; //TODO: use correct datetime picker options definition
                        xOptions.datetimepicker = dtOptions;
                        if (xOptions.datetimepicker.range == true) {
                            xOptions.showbuttons = true;
                            xOptions.name = rawOptions.startDateAttributes.name + ";" + rawOptions.endDateAttributes.name;
                        }
                        else {
                            xOptions.showbuttons = false;
                            // xeditableOptions.title = null;
                        }
                        xOptions.mode = "popup";
                        xOptions.title = "";
                        xOptions.displayNonEditable = function displayDTRangeType() {
                            if (rawOptions.value) {
                                var values = rawOptions.value.split(";").map(function (element) {
                                    return moment(element.trim()).format(rawOptions.viewformat);
                                });
                                $this.text(values.join(" - "));
                            }
                        };
                        return xOptions;
                    };
                    return XEditableDatetimeOptions;
                }());
                Options.XEditableDatetimeOptions = XEditableDatetimeOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                var XEditableGenericOptions = (function () {
                    function XEditableGenericOptions() {
                    }
                    XEditableGenericOptions.prototype.init = function (elt) {
                        var $this = elt;
                        var options = $this.data();
                        var value = $this.data("value");
                        var isRequired = $this.data("required") || false;
                        options.displayNonEditable = function displayGenericType() {
                            $this.text(value);
                        };
                        var mode = options.mode || "popup";
                        var xeditableOptions = $.extend(options, {
                            showbuttons: mode == "popup" ? true : options.showbuttons || false,
                            title: mode == "popup" ? "Enter " + options.title : "",
                            mode: mode,
                            value: value,
                            validate: Internal.defaultValidation,
                            success: function (response, newValue) {
                                if (typeof (response) == "string") {
                                    MAF.Utils.showSuccess(response);
                                }
                                else {
                                    MAF.Utils.showResult(response);
                                }
                            },
                            error: function (xhr, newValue) {
                                MAF.Utils.showError(xhr.statusText);
                            }
                        });
                        return xeditableOptions;
                    };
                    return XEditableGenericOptions;
                }());
                Options.XEditableGenericOptions = XEditableGenericOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                var XEditableNumericOptions = (function () {
                    function XEditableNumericOptions() {
                    }
                    XEditableNumericOptions.prototype.init = function (elt) {
                        var rawOptions = elt.data();
                        var xOptions = new Options.XEditableGenericOptions().init(elt);
                        xOptions.displayNonEditable = function () { }; //don't call $this.text(value) because text was already set and formatted by MVC helper
                        xOptions.clear = false; //enable x button by default
                        xOptions = $.extend(xOptions, {
                            params: function stringifyValueParam(params) {
                                params.value.numberClassName = rawOptions.numberClassName;
                                params.value = JSON.stringify(params.value);
                                params.viewModelClass = xOptions.viewModelClass;
                                params.type = xOptions.type;
                                return params;
                            },
                            success: function (response, newValue) {
                                if (response.status == "success" && response.text != undefined)
                                    $(elt).data('text', response.text);
                                MAF.Utils.showResult(response);
                            },
                        });
                        return xOptions;
                    };
                    return XEditableNumericOptions;
                }());
                Options.XEditableNumericOptions = XEditableNumericOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                //import ICountryData = Phone.ICountryData;
                var XEditablePhoneOptions = (function () {
                    function XEditablePhoneOptions() {
                    }
                    XEditablePhoneOptions.prototype.init = function (elt) {
                        var options = new Options.XEditableGenericOptions().init(elt);
                        var rawOptions = $(elt).data();
                        //set country data to options
                        MAF.Phone.fillCountryData(rawOptions);
                        options.displayNonEditable = function displayGenericType() {
                            var displayHtml = MAF.Phone.getDisplayPhoneTemplate(rawOptions);
                            elt.append(displayHtml);
                        };
                        options.validate = function validatePhoneNumber(v) {
                            if (!intlTelInputUtils.isValidNumber(v)) {
                                return "Cannot submit an invalid phone number";
                            }
                        };
                        return options;
                    };
                    return XEditablePhoneOptions;
                }());
                Options.XEditablePhoneOptions = XEditablePhoneOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                var XEditableSelect2Options = (function (_super) {
                    __extends(XEditableSelect2Options, _super);
                    function XEditableSelect2Options() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    XEditableSelect2Options.prototype.init = function (elt) {
                        var selfObject = this;
                        var $this = elt;
                        var options = $this.data();
                        var xeditableOptions = new Options.XEditableGenericOptions().init(elt);
                        xeditableOptions.autotext = "always";
                        var isAjax = !$this.hasData("sourcedata");
                        if ($this.hasData("sourcedata")) {
                            xeditableOptions.source = $this.data("sourcedata");
                        }
                        //options specialized for select2
                        var select2Options = $.extend(options, {
                            // allowClear: $this.data("select2-allowclear") || true,
                            formatNoMatches: $this.data("formatnomatches"),
                            multiple: false,
                            placeholder: "pick a(n) item"
                        });
                        if (isAjax) {
                            var dataFunction = function (params) {
                                var data = [];
                                data.push({ name: "query", value: params.term });
                                return $.param(data);
                            };
                            select2Options.ajax = {
                                url: options.source,
                                dataType: "json",
                                data: dataFunction,
                                processResults: function (data, params) {
                                    return {
                                        results: data
                                    };
                                },
                                delay: xeditableOptions.delay || 400
                            };
                        }
                        if (options.minimumInputLength == undefined)
                            select2Options.minimumInputLength = 3;
                        // if (select2Options.allowClear) {
                        //     xeditableOptions.clear = true;
                        // }
                        xeditableOptions.select2 = select2Options;
                        xeditableOptions.displayNonEditable = function displayCustomObjectType() {
                            if (!options.value)
                                return;
                            if (isAjax) {
                                if (options.defaultdisplay) {
                                    $this.text(options.defaultdisplay);
                                }
                                else if (options.displaytext) {
                                    $this.text(options.displaytext.join(', '));
                                }
                                else {
                                    $this.text(options.value);
                                }
                            }
                            else {
                                var values = options.value.toString().split(",");
                                var displayValues = [];
                                for (var index = 0; index < options.source.length; index++) {
                                    var element = options.source[index];
                                    if ($.inArray(element.id.toString(), values) != -1) {
                                        displayValues.push(element.text);
                                    }
                                }
                                $this.text(displayValues.join(', '));
                            }
                        };
                        return xeditableOptions;
                    };
                    return XEditableSelect2Options;
                }(Options.XEditableGenericOptions));
                Options.XEditableSelect2Options = XEditableSelect2Options;
                var XEditableSelect2MultipleOptions = (function (_super) {
                    __extends(XEditableSelect2MultipleOptions, _super);
                    function XEditableSelect2MultipleOptions() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    XEditableSelect2MultipleOptions.prototype.init = function (elt) {
                        var selfObject = this;
                        var $this = elt;
                        var options = $this.data();
                        var dataSource = $(this).data("source");
                        var xeditableOptions = $.extend(new XEditableSelect2Options().init(elt), {
                            inputclass: options.inputclass,
                            showbuttons: true,
                        });
                        xeditableOptions.select2 = $.extend({}, xeditableOptions.select2, {
                            multiple: true
                        });
                        return xeditableOptions;
                    };
                    return XEditableSelect2MultipleOptions;
                }(XEditableSelect2Options));
                Options.XEditableSelect2MultipleOptions = XEditableSelect2MultipleOptions;
                var XEditableSelect2TagsOptions = (function (_super) {
                    __extends(XEditableSelect2TagsOptions, _super);
                    function XEditableSelect2TagsOptions() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    XEditableSelect2TagsOptions.prototype.init = function (elt) {
                        var $this = elt;
                        var options = $this.data();
                        var xeditableOptions = $.extend(new XEditableSelect2Options().init(elt), {
                            inputclass: options.inputclass,
                            showbuttons: true,
                        });
                        return xeditableOptions;
                    };
                    return XEditableSelect2TagsOptions;
                }(Options.XEditableGenericOptions));
                Options.XEditableSelect2TagsOptions = XEditableSelect2TagsOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                var XEditableTextAreaOptions = (function () {
                    function XEditableTextAreaOptions() {
                    }
                    XEditableTextAreaOptions.prototype.init = function (elt) {
                        var xeditableOptions = new Options.XEditableGenericOptions().init(elt);
                        function displayLimitedText(value, limitChars) {
                            var displayValue = value.substr(0, limitChars);
                            return displayValue + ("<span data-content=\"" + value + "\" data-html=\"true\" data-placement=\"bottom\" data-toggle=\"popover\" data-trigger=\"hover\" style=\"cursor:pointer\" data-original-title=\"Details\" title=\"\"> [...]</span>");
                        }
                        xeditableOptions.showbuttons = true;
                        xeditableOptions.autotext = "always";
                        xeditableOptions.display = function (value, response) {
                            var $currentXEditable = $(this);
                            var limitChars = $currentXEditable.data("limit-chars") || 10;
                            var $currentXEditableParent = $currentXEditable.parent();
                            if (limitChars != undefined && value.length > limitChars) {
                                var displayValue = value.substr(0, limitChars);
                                $currentXEditable.html(displayLimitedText(value, limitChars));
                                MAF.Popover.loadAll($currentXEditable);
                            }
                            else {
                                $currentXEditable.html(value);
                            }
                        };
                        xeditableOptions.displayNonEditable = function displayGenericType() {
                            elt.html(displayLimitedText(xeditableOptions.value, xeditableOptions.limitChars));
                        };
                        return xeditableOptions;
                    };
                    return XEditableTextAreaOptions;
                }());
                Options.XEditableTextAreaOptions = XEditableTextAreaOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var XEditable;
    (function (XEditable) {
        var Internal;
        (function (Internal) {
            var Options;
            (function (Options) {
                var XEditableTextOptions = (function () {
                    function XEditableTextOptions() {
                    }
                    XEditableTextOptions.prototype.init = function (elt) {
                        var xOptions = new Options.XEditableGenericOptions().init(elt);
                        xOptions.clear = true; //enable x button by default
                        return xOptions;
                    };
                    return XEditableTextOptions;
                }());
                Options.XEditableTextOptions = XEditableTextOptions;
            })(Options = Internal.Options || (Internal.Options = {}));
        })(Internal = XEditable.Internal || (XEditable.Internal = {}));
    })(XEditable = MAF.XEditable || (MAF.XEditable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var DateTimePicker;
    (function (DateTimePicker) {
        var Internal;
        (function (Internal) {
            var MinViewModes = {
                Year: 0,
                Month: 1,
                Day: 2,
                Hour: 3,
                Minute: 4,
                Second: 5
            };
            //from dtp core js
            function isEnabled(granularity, actualFormat) {
                if (typeof granularity !== 'string' || granularity.length > 1) {
                    throw new TypeError('isEnabled expects a single character string parameter');
                }
                switch (granularity) {
                    case 'w':
                        return actualFormat.indexOf('w') !== -1;
                    case 'y':
                        return actualFormat.indexOf('Y') !== -1;
                    case 'M':
                        return actualFormat.indexOf('M') !== -1;
                    case 'd':
                        return actualFormat.toLowerCase().indexOf('d') !== -1;
                    case 'h':
                    case 'H':
                        return actualFormat.toLowerCase().indexOf('h') !== -1;
                    case 'm':
                        return actualFormat.indexOf('m') !== -1;
                    case 's':
                        return actualFormat.indexOf('s') !== -1;
                    default:
                        return false;
                }
            }
            /**
             * minViewMode {
             * year = 0, month = 1, day = 2, hour = 3, minute = 4, second = 5
             * }
             * **/
            function getMinViewMode(displayFormat) {
                var minViewMode = 0;
                if (isEnabled('y', displayFormat)) {
                    minViewMode = MinViewModes.Year;
                }
                if (isEnabled('M', displayFormat)) {
                    minViewMode = MinViewModes.Month;
                }
                if (isEnabled('d', displayFormat) || isEnabled('w', displayFormat)) {
                    minViewMode = MinViewModes.Day;
                }
                if (isEnabled('h', displayFormat)) {
                    minViewMode = MinViewModes.Hour;
                }
                if (isEnabled('m', displayFormat)) {
                    minViewMode = MinViewModes.Minute;
                }
                if (isEnabled('s', displayFormat)) {
                    minViewMode = MinViewModes.Second;
                }
                return minViewMode;
            }
            function getListenerClass(displayFormat) {
                var minViewMode = getMinViewMode(displayFormat);
                var listenerClass = '.day';
                if (minViewMode === MinViewModes.Year) {
                    listenerClass = '.year';
                }
                if (minViewMode === MinViewModes.Month) {
                    listenerClass = '.month';
                }
                if (minViewMode === MinViewModes.Day) {
                    listenerClass = '.day';
                }
                if (minViewMode === MinViewModes.Hour) {
                    listenerClass = '.hour';
                }
                if (minViewMode === MinViewModes.Minute) {
                    listenerClass = '.minute';
                }
                if (minViewMode === MinViewModes.Second) {
                    listenerClass = '.second';
                }
                return listenerClass;
            }
            /**
             * this is the function, to help setup onChange function given a displayFormat, similar to XEditable/datetime component
             *
             * @export
             * @param {JQuery} $elt
             * @param {string} displayFormat
             * @param {() => void} onChange
             */
            function setupOnChange($elt, displayFormat, onChange) {
                var listenerClass = getListenerClass(displayFormat);
                $elt.on('mouseup', listenerClass + ':not(.disabled)', onChange);
                $elt.on('mouseup', '[data-action="clear"]', onChange);
            }
            Internal.setupOnChange = setupOnChange;
        })(Internal = DateTimePicker.Internal || (DateTimePicker.Internal = {}));
    })(DateTimePicker = MAF.DateTimePicker || (MAF.DateTimePicker = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var AdvancedSearch;
            (function (AdvancedSearch) {
                /**
                 * this class provide simple behavior of a normal input
                 *
                 * @export
                 * @class InlineDatePickerComponent
                 * @implements {IInlineInput}
                 */
                var InlineDatePickerComponent = (function () {
                    function InlineDatePickerComponent($parent, options) {
                        var that = this;
                        this._$parent = $parent;
                        this._props = options;
                    }
                    InlineDatePickerComponent.prototype.update = function (states) {
                        this._states = states;
                        if (states.show) {
                            this.dom.removeClass("hidden");
                        }
                        else {
                            this.dom.addClass("hidden");
                        }
                    };
                    InlineDatePickerComponent.prototype.render = function () {
                        var template = "\n            <span>\n                <input />\n                <input name=\"a\" type=\"hidden\" value=\"\" />\n            </span>\n            ";
                        this.dom = $(template);
                        this._$parent.append(this.dom);
                    };
                    InlineDatePickerComponent.prototype.append = function () {
                        var that = this;
                        this.render();
                        this._picker = this.dom.mafDatepicker({});
                        MAF.DateTimePicker.Internal.setupOnChange(this.dom, InlineDatePickerComponent.defaults.format, function () {
                            setTimeout(function () {
                                console.log(that.dom.data("DateTimePicker").date());
                                that._props.onEnter(that.dom.data("DateTimePicker").date().format(InlineDatePickerComponent.defaults.format));
                            }, 1);
                        });
                    };
                    InlineDatePickerComponent.prototype.destroy = function () {
                        this.dom.remove();
                    };
                    InlineDatePickerComponent.prototype.focus = function () {
                        this.dom.data("DateTimePicker").show();
                    };
                    InlineDatePickerComponent.defaults = {
                        format: "DD/MM/YYYY"
                    };
                    return InlineDatePickerComponent;
                }());
                AdvancedSearch.InlineDatePickerComponent = InlineDatePickerComponent;
            })(AdvancedSearch = Internal.AdvancedSearch || (Internal.AdvancedSearch = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
var MAF;
(function (MAF) {
    var Datatable;
    (function (Datatable) {
        var Internal;
        (function (Internal) {
            var AdvancedSearch;
            (function (AdvancedSearch) {
                /**
                 * this class provide simple behavior of a normal input
                 *
                 * @export
                 * @class InlineTextboxComponent
                 * @implements {IInlineInput}
                 */
                var InlineTextboxComponent = (function () {
                    function InlineTextboxComponent($parent, options) {
                        var that = this;
                        this._$parent = $parent;
                        this._props = options;
                    }
                    InlineTextboxComponent.prototype.update = function (states) {
                        this._states = states;
                        if (states.show) {
                            this.dom.removeClass("hidden");
                        }
                        else {
                            this.dom.addClass("hidden");
                        }
                    };
                    InlineTextboxComponent.prototype.render = function () {
                        var template = "\n            <input type=\"text\" class=\"\"/>\n            ";
                        this.dom = $(template);
                        this._$parent.append(this.dom);
                    };
                    InlineTextboxComponent.prototype.append = function () {
                        var that = this;
                        this.render();
                        this.dom.on('keyup', function (e) {
                            if (e.keyCode == 13) {
                                // Do something
                                that._props.onEnter($(e.currentTarget).val());
                            }
                        });
                    };
                    InlineTextboxComponent.prototype.destroy = function () {
                        this.dom.off('keyup');
                        this.dom.remove();
                    };
                    InlineTextboxComponent.prototype.focus = function () {
                        this.dom.focus();
                    };
                    return InlineTextboxComponent;
                }());
                AdvancedSearch.InlineTextboxComponent = InlineTextboxComponent;
            })(AdvancedSearch = Internal.AdvancedSearch || (Internal.AdvancedSearch = {}));
        })(Internal = Datatable.Internal || (Datatable.Internal = {}));
    })(Datatable = MAF.Datatable || (MAF.Datatable = {}));
})(MAF || (MAF = {}));
