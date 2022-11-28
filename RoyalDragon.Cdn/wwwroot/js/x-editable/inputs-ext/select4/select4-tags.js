/**
@class select2 tags
@extends abstractinput
@final
**/

(function ($) {
    "use strict";

    var Select4Tags = function (options) {
        this.init('select4-tags', options, Select4Tags.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Select4Tags, $.fn.editabletypes.abstractinput);

    $.extend(Select4Tags.prototype, {
        /**
        Renders input from tpl

        @method render() 
        **/
        render: function () {

            var $pa = this.$input.parent();
            $pa.children().remove();
            this.$input = $(this.options.htmlTemplate);
            $pa.append(this.$input);
            this.$input.closest('div.editable-container').addClass('editable-select2');
            
            MAF.Select2.loadAll(this.$input.parent())

            //copy class from option to container element
            this.$input.data("select2").$container.addClass(this.options.inputclass);

            //this event to prevent select2 from open behavior when clicking on x button
            //https://github.com/select2/select2/issues/3320
            var $thisInput = this.$input;
            this.$input.on('select2:unselect', function () {
                $thisInput.data('select2').options.set('disabled', true);
                setTimeout(function () {
                    $thisInput.data('select2').options.set('disabled', false);
                    // $thisInput.editable('setValue', '');
                }, 0);
            });
        },
        html2value: function (html) {
            return null; //we do not use value from display text
        },

        //display text from value
        value2html: function (value, element) {
            if (!value) {
                $(element).empty();
                return;
            }

            $(element).html("");
            for (var v = 0; v < value.length; v++) {
                $(element).append('<span class="tag tag-primary">' + value[v] + '</span>');
            }
        },

        value2input: function (value) {
            if (!value) {
                return;
            }

            this.$input.find("option").remove()
            for (var v = 0; v < value.length; v++) {
                this.$input.append(new Option(value[v], value[v], true, true));
            }
            this.$input.trigger("select2:change");
        },

        input2value: function () {
            var selectedObjects = $(this.$input).select2('data');
            return selectedObjects.map(function (item) {
                return item.id;
            })

        }
    });

    Select4Tags.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: "<select></select>",
        htmlTemplate: null
    });

    $.fn.editabletypes.select4Tags = Select4Tags;

}(window.jQuery));