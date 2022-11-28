//Initialize the plugin Table filter
$.TableFilter = new Object();
$.TableFilter.autoStart = true;


$.TableFilter.Tables = new Array();


$(function () {
    jQuery.expr[':'].contains = function (a, i, m) {
        return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
    };

    function stringContains(s, arg) {
        return s.toString().toUpperCase().indexOf(arg.toString().toUpperCase()) >= 0;
    }
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str) {
            return this.indexOf(str) == 0;
        };
    }


    //Get the Bootstrap Version
    $.TableFilter.bsVersion = (typeof $.fn.typeahead !== 'undefined' ? 2 : 3);

    $.TableFilter.start = function () {
        var currentUrl = window.location.search.substring(1);


        for (var i = 0; i < $.TableFilter.Tables.length; i++) {
            var table = $.TableFilter.Tables[i];

            var loadUrl;
            var params;
            var tbody;


            if ($(table).data('isajax')) {
                tbody = $(table).find('tbody');
                loadUrl = tbody.data('auto-load-url');
                params = distinctParameter(currentUrl + parameterBuilder(loadUrl));

                if (params.length > 0) {
                    var url = loadUrl.substring(0, loadUrl.indexOf('?'));

                    tbody.attr('data-auto-load-url', url + params);
                }


            } else {
                //loadUrl = window.location.search.toString();

            }



            $(table).find('.columnfilter').each(function () {
                createFilterBox($(this), table);
            });
        }
    };

    $('body').append('<div class="fullScreenBox" style="display: none;"></div>');
    var fullScreenBox = $('.fullScreenBox');

    $(document).on('click', '.closeBtn, .fullScreenBox', function () {
        fullScreenBox.hide();
        $('.filterBox').hide();
    });


    $(window).resize(function () {
        fullScreenBoxSizer();
    });

    fullScreenBoxSizer();

    function fullScreenBoxSizer() {
        var elem = fullScreenBox;
        elem.css('height', $(window).height());
        elem.css('width', $(window).width());
    }

    $('body').append('<div class="tableFilterFilterBoxes"></div>');

    var filterBoxesContainer = $('.tableFilterFilterBoxes');


    //if ($.TableFilter.autoStart == true) {
    //    $.TableFilter.start();
    //}



    function createFilterBox(item, tableName) {
        item = $(item);

        var text = $(item).text();
        var id = $(item).data('id').replace(/[^\w]/gi, '')
        filterBoxesContainer.append('<div id="' + id + '" class="filterBox" data-reload-element="' + 'table' + '" data-table-name="' + tableName + '" style="display:none; z-index: 1024"></div>');


        // Check if filter is in use :
        var parameterName = $(item).attr('data-parameterName');

        var activeFilterClass = "";

        if (location.search.indexOf(parameterName) != -1) {
            activeFilterClass = "active";
        }

        item.html('<div style="width: 100%; position: relative;float: left;"><span class="thString" style="float: left;">' +
            text + '</span><i class="fa fa-filter sortable ' +
            activeFilterClass + '" style="float: left;position: absolute;right: 0;"></i></div>');

        switch ($(item).data('type')) {
            case "Date":
                createDateFilterBoxContent(item, $('#' + id));
                break;
            case "Default":
            default:
                createDefaultFilterBoxContent(item, $('#' + id));
                break;
        }
    }

    function createDefaultFilterBoxContent(item, filterBox) {
        var url = $(item).attr('data-sort-url');
        var parameterName = $(item).attr('data-parameterName');

        if (url == null || url == '') {
            filterBox.append('<div class="sort sortAsc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + parameterName + '" data-ID2="asc"><span>Sort A to Z</span></div>');
            filterBox.append('<div class="sort sortDesc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + parameterName + '" data-ID2="desc""><span>Sort Z to A</span></div>');
            return;
        }

        // With Ajax Request
        filterBox.html(getFilterLoader());

        $.ajax({
            type: 'get',
            url: url,
            success: function (e) {

                filterBox.html('');
                var paramName = e.ParameterName;

                if (paramName != null && paramName !== "Error") {

                    filterBox.append('<div class="sort sortAsc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + paramName + '" data-ID2="asc"><span>Sort A to Z</span></div>');
                    filterBox.append('<div class="sort sortDesc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + paramName + '" data-ID2="desc""><span>Sort Z to A</span></div>');


                    filterBox.append('<div class="clearFilter"><span  data-parameterName="' + paramName + '">Clear Filter from "' + paramName + '"</span></div>');

                    filterBox.append('<div style="margin-left: 4px;margin-top: 5px;"><input type="text" placeholder="Search" class="fastFilterBox" style="margin: 0px;" /></div>');

                    var box = '<div style="margin-left: 5px; margin-top: 10px; margin-bottom: 10px; max-height:230px; overflow: auto;border: solid 1px lightgray;padding-left: 2px;max-width: 100%;">';

                    var urlValue = getURLParameter(paramName);


                    box += ('<label class="filterElementLabel"><input type="checkbox" ' + (urlValue == null ? 'checked="checked"' : ' ') + ' class="selectAllCheckBox"><span>Select All</span></label>');

                    for (var i = 0; i < e.Items.length; i++) {

                        var displayValue = e.Items[i].Display;
                        var itemValue = e.Items[i].Id;


                        var isChecked = urlValue == null ? true : stringContains(urlValue, itemValue);

                        box += ('<label class="filterElementLabel"><input type="checkbox" class="childCheckBox" data-ID="' + itemValue + '" ' + (isChecked ? 'checked="checked"' : ' ') + '><span>' + displayValue + '</span></label>');

                    }
                    box += '</div>';
                    box += '<div class="bottomBtn">';

                    box += '<span class="btn ' + ($.TableFilter.bsVersion === 2 ? 'btn-mini' : 'btn-xs') + ' btn-primary filterBtn" data-parameterName="' + paramName + '">Ok</span>';

                    box += '<span class="btn ' + ($.TableFilter.bsVersion === 2 ? 'btn-mini' : 'btn-xs') + ' btn-default closeBtn">Close</span>';
                    box += '</div>';
                    filterBox.append(box);

                } else if (paramName === "Error") {
                    var errorMessage;
                    errorMessage = '<div style="padding: 5px;"><div class="filterErrorImage"></div><div style="margin-top: 6px;">' + e.Description + '</div></div>';

                    filterBox.append(errorMessage);

                } else {
                    filterBox.css('display', 'none');
                    filterBox.removeClass('closable');
                }

            }
        });
    }





    function createDateFilterBoxContent(item, filterBox) {
        var url = $(item).attr('data-sort-url');
        var parameterName = $(item).attr('data-parameterName');

        if (url == null || url == '') {
            filterBox.append('<div class="sort sortAsc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + parameterName + '" data-ID2="asc"><span>Sort A to Z</span></div>');
            filterBox.append('<div class="sort sortDesc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + parameterName + '" data-ID2="desc""><span>Sort Z to A</span></div>');
            return;
        }

        // With Ajax Request
        filterBox.html(getFilterLoader());

        $.ajax({
            type: 'get',
            url: url,
            success: function (e) {

                filterBox.html('');
                var paramName = parameterName;

                if (paramName != null && paramName !== "Error") {

                    filterBox.append('<div class="sort sortAsc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + paramName + '" data-ID2="asc"><span>Sort A to Z</span></div>');
                    filterBox.append('<div class="sort sortDesc sortBoxItem" data-parameterName="xSort" data-parameterName2="xOrder" data-ID="' + paramName + '" data-ID2="desc""><span>Sort Z to A</span></div>');


                    filterBox.append('<div class="clearFilter"><span  data-parameterName="' + paramName + '">Clear Filter from "' + paramName + '"</span></div>');

                    //filterBox.append('<div style="margin-left: 4px;margin-top: 5px;"><input type="text" placeholder="Search" class="fastFilterBox" style="margin: 0px;" /></div>');

                    var box = '<div style="margin-left: 5px; margin-top: 10px; margin-bottom: 10px; max-height:230px; overflow: auto;border: solid 1px lightgray;padding-left: 2px;max-width: 100%;">';


                    box += ('<label title="Select or unselect all elements" class="toggleAllElements" data-tree-element="#treeDate' + paramName + '">Toggle all elements</label>');

                    //Implemet code here

                    box += '<div id="treeDate' + paramName + '"></div>';
                    //Implement code here


                    box += '</div>';
                    box += '<div class="bottomBtn">';

                    box += '<span class="btn ' + ($.TableFilter.bsVersion === 2 ? 'btn-mini' : 'btn-xs') + ' btn-primary filterBtnDate filterBtn" data-parameterName="' + paramName + '">Ok</span>';

                    box += '<span class="btn ' + ($.TableFilter.bsVersion === 2 ? 'btn-mini' : 'btn-xs') + ' btn-default closeBtn">Close</span>';
                    box += '</div>';
                    filterBox.append(box);



                    $('#treeDate' + paramName).dynatree({
                        onActivate: function (node) {
                            // A DynaTreeNode object is passed to the activation handler
                            // Note: we also get this event, if persistence is on, and the page is reloaded.
                            //alert("You activated " + node.data.value);
                        },
                        checkbox: true,
                        selectMode: 3,
                        debugLevel: 0,
                        persist: false, classNames: {
                            container: "dynatree-container",
                            node: "dynatree-node",
                            folder: "",
                            nodeIcon: "",
                            title: "dynatree-title",
                        },
                        children: e.Items
                    });



                } else if (paramName === "Error") {
                    var errorMessage;
                    errorMessage = '<div style="padding: 5px;"><div class="filterErrorImage"></div><div style="margin-top: 6px;">' + e.Description + '</div></div>';

                    filterBox.append(errorMessage);

                } else {
                    filterBox.css('display', 'none');
                    filterBox.removeClass('closable');
                }

            }
        });
    }


    $(document).on('click', '.columnfilter', function () {
        var id = $(this).data('id');
        var elem = $('#' + id.replace(/[^\w]/gi, ''));

        elem.css('display', 'block');

        var p = $('.columnfilter[data-id="' + id + '"]').offset();

        $('.filterBox#' + id.replace(/[^\w]/gi, '')).css('top', p.top + 24);
        $('.filterBox#' + id.replace(/[^\w]/gi, '')).css('left', p.left - 4);

        fullScreenBox.css('display', 'block');
    });

    $(document).on('click', '.filterBtn', function () {
        tableManager($(this));
    });

    function tableManager(mainElement, excludeParameter) {
        var currentFilter = mainElement;
        var parameterName = currentFilter.attr('data-parameterName');

        if (parameterName == null)
            parameterName = currentFilter.find('span').attr('data-parameterName');

        var parameterName2 = currentFilter.attr('data-parameterName2');

        if (parameterName2 == null)
            parameterName2 = currentFilter.find('span').attr('data-parameterName2');

        //&xOrder=asc
        var value = currentFilter.attr('data-ID');
        if (value == null) {
            value = "";
            if (currentFilter.hasClass('filterBtnDate')) {
                var list = $('#treeDate' + parameterName).dynatree("getSelectedNodes");

                var concatChar = '';

                for (var j = 0; j < list.length; j++) {
                    var val = list[j].data.value;
                    if (list[j].data.value != null) {
                        value += concatChar + val;
                        concatChar = ',';
                    }
                }


            }
            else {
                var checkedItem = currentFilter.closest('.filterBox').find('input:checked[type="checkbox"]').not('.selectAllCheckBox');
                var j = checkedItem.length;
                checkedItem.each(function () {
                    var separator = j == 1 ? '' : ',';

                    var id = $(this).data('id');
                    value += id + separator;
                    j--;
                });
            }
        }

        var value2 = currentFilter.attr('data-ID2');
        if (value2 == null)
            value2 = currentFilter.find('span').attr('data-ID2');




        var table = mainElement.closest('[data-table-name]');
        var name = table.data('table-name');
        var reloadElement = table.data('reload-element');

        var isAjax = $(name).data('isajax');

        if (isAjax == true && reloadElement !== 'undefined') {


            var tbody = $(name).find('tbody');
            var currentUrl = tbody.data('auto-load-url');

            var url = currentUrl.substring(0, currentUrl.indexOf('?'));
            var params = currentUrl.substring(currentUrl.indexOf('?'), currentUrl.length);

            var secondaryParameters = parameterBuilder(parameterName, parameterName2, currentFilter, value, value2, '&');

            params = params + secondaryParameters;
            params = distinctParameter(params, excludeParameter);
            params = params == '' ? '/' : params;

            window.history.pushState(null, null, params);

            tbody.load(url + params, function () {
                $('.columnfilter').each(function () {
                    var elem = $(this);
                    var text = elem.text();
                    elem.html(text);
                });
                $('.filterBox').remove();
                $.TableFilter.start();
            });

        } else {

            var currentUrl = window.location.toString();

            var url = currentUrl.substring(0, currentUrl.indexOf('?'));
            var params = currentUrl.substring(currentUrl.indexOf('?'), currentUrl.length);

            var secondaryParameters = parameterBuilder(parameterName, parameterName2, currentFilter, value, value2, '&');

            params = params + secondaryParameters;
            params = distinctParameter(params, excludeParameter);




            window.location.replace(url + params);
        }
    }


    function parameterBuilder(parameterName, parameterName2, currentFilter, value, value2, startChar) {

        var stringBuilder = startChar == null ? '?' : startChar;
        if (parameterName != null && parameterName != '') {

            var params = urlBuilder();
            if (params != null) {
                //for the dates 
                if (currentFilter != null && currentFilter.hasClass('filterBtnDate')) {
                    var list = $('#treeDate' + parameterName).dynatree("getSelectedNodes");

                    var concatChar = '';
                    stringBuilder += parameterName + '=';
                    for (var j = 0; j < list.length; j++) {
                        var val = list[j].data.value;
                        if (list[j].data.value != null) {
                            stringBuilder += concatChar + val;
                            concatChar = ',';
                        }
                    }

                    stringBuilder += '&';
                }

                for (var i = 0; i < params.length; i++) {
                    /*
                    0: "approval=false"
                    1: "cie=Amaris%20Belgium"
                    2: "week=44"
                    */

                    var pair = params[i];
                    var p = pair.split("=");
                    if (!(parameterName.startsWith('xSort') && p[0].startsWith('xSort')) && !(parameterName.startsWith('xOrder') && p[0].startsWith('xOrder')) && p[0] != 'page') {
                        if (p[0] != parameterName && p[0] != parameterName2 && !p[0].startsWith('xSort') && !p[0].startsWith('xOrder')) {
                            stringBuilder += p[0] + '=' + p[1] + '&';
                        }
                    }

                }

            }

            if (value != null && value != '' && !currentFilter.hasClass('clearFilter')) {
                stringBuilder += parameterName + '=' + value;
            }

            if (value2 != null && value2 != '') {
                stringBuilder += '&' + parameterName2 + '=' + value2;
            }
            return stringBuilder;
        }
        return '/'; //bug fix for null
    }

    function distinctParameter(parameterString, excludeParameter) {
        var params = parameterString.replace('?', '').split('&');

        var list = new Array();
        var startChar = '?';
        var sb = '';

        for (var i = 0; i < params.length; i++) {
            var item = params[i];
            item = item.split('=');
            if (item.length > 1) {
                var name = item[0];
                //var value = item[1];
                var isInArray = $.inArray(name, list);
                if (isInArray == -1 && excludeParameter != name) {
                    list.push(name);
                    sb += startChar + params[i];

                    if (startChar === '?') {
                        startChar = '&';
                    }
                }
            }

        }

        return sb.replace(' ', '+');

    }


    function urlBuilder() {
        var url = $(location).attr('href');
        if (url.indexOf("?") !== -1) {
            var params = new Array();
            var queryString = url.substring(url.lastIndexOf("?") + 1);
            $.map(queryString.split("&"), function (pair) {
                //params.length++;
                if (pair != '')
                    params.push(pair);
                //var p = pair.split("=");
                //params[p[0]] = p[1];

            });
            return params;
        }
        return null;
    }


    $('body').on('click', '.clearFilter, .sortBoxItem', function () {
        var elem = $(this);
        var excludeParameter = elem.children().data('parametername');
        tableManager(elem, excludeParameter);
    });
    $('body').on('click', '.toggleAllElements', function () {
        var elem = $(this);
        var treeNode = elem.data('tree-element');
        $(treeNode).dynatree("getRoot").visit(function (node) {
            node.toggleSelect();
        });
        return false;
    });


    $(document).on('keyup', '.fastFilterBox', function () {
        var tbvalue = $(this).val();
        var box = $(this).closest('.filterBox').closest('.filterBox');
        var checkbox = box.find('label');

        if (tbvalue.length >= 1) {
            checkbox.not(':contains("' + tbvalue + '")').hide();
            checkbox.find(':contains("' + tbvalue + '")').show();


            checkbox.not(':contains("' + tbvalue + '")').find('input').prop('checked', false);
            checkbox.find(':contains("' + tbvalue + '")').find('input').prop('checked', true);

        }
        else if (tbvalue.length < 2) {
            checkbox.show();
        }

    });
    $(document).on('change', '.childCheckBox', function () {
        var isChecked = true;
        var parent = $(this).closest('div');
        parent.find('input[type="checkbox"]').not('.selectAllCheckBox').each(function () {
            if (!this.checked) {
                isChecked = false;
                return false;
            }
            return true;
        });

        parent.find('.selectAllCheckBox').prop('checked', isChecked);
    });




    $(document).on('change', '.selectAllCheckBox', function () {
        var isChecked = this.checked;
        var parent = $(this).closest('div');

        parent.find('input[type="checkbox"]').not('.selectAllCheckBox').prop('checked', isChecked);
    });

    //Create an unmodifiable Enum for the Column type so it cannot be modified.
    var COLUMNTYPE = Object.freeze({
        Text: 'text',
        Date: 'date',
        Number: 'number'
    });


});


$.TableFilter.addTable = function addTableToManager(tableSelector) {

    $.TableFilter.Tables.push(tableSelector);
}

function getFilterLoader() {
    return '<div style="text-align: center; margin: 5px;"><img src="/Content/images/ajax-loader.gif" alt="Loading..." /></div>';
}
function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}