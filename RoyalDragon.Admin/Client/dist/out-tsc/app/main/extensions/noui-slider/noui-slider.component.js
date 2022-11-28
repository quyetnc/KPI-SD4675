import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from './noui-slider.snippetcode';
let NouiSliderComponent = class NouiSliderComponent {
    constructor() {
        // noUiSlider Single handle & Steps values
        this.sliderSingleHandelValue = [20, 60];
        this.sliderStepsValue = [10, 80];
        // noUiSlider Tap & Limit values
        this.sliderTapValue = [15, 65];
        this.sliderLimitValue = [10, 20];
        this.sliderWithNgModel = 15;
        // noUiSlider Scale / Pipes
        this.sliderScalePipesValue = [40, 60];
        this.configSliderScalePipes = {
            behaviour: 'drag',
            connect: true,
            limit: 80,
            step: 5,
            range: {
                min: 20,
                max: 80
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.configSliderDefault0 = {
            behaviour: 'tap',
            connect: true,
            limit: 80,
            step: 5,
            range: {
                min: 20,
                max: 80
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.configSliderSecondary0 = {
            behaviour: 'tap',
            connect: true,
            limit: 80,
            step: 5,
            range: {
                min: 20,
                max: 80
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.configSliderSuccess0 = {
            behaviour: 'tap',
            connect: true,
            limit: 80,
            step: 5,
            range: {
                min: 20,
                max: 80
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.configSliderWarning0 = {
            behaviour: 'tap',
            connect: true,
            limit: 80,
            step: 5,
            range: {
                min: 20,
                max: 80
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.configSliderDanger0 = {
            behaviour: 'tap',
            connect: true,
            limit: 80,
            step: 5,
            range: {
                min: 20,
                max: 80
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.configSliderInfo0 = {
            behaviour: 'tap',
            connect: true,
            limit: 80,
            step: 5,
            range: {
                min: 20,
                max: 80
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        // noUiSlider tooltip value
        this.sliderTooltipValue = [50, 70];
        // disable
        this.disabled = false;
        // slider input
        this.sliderInputValue = [5, 15];
        this.sliderSelectValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        // noUiSlider Color / Default Handle / Circle Filled Handle / Square Handle
        this.sliderDefault0 = [45, 55];
        this.sliderSecondary0 = [40, 60];
        this.sliderSuccess0 = [35, 65];
        this.sliderInfo0 = [30, 70];
        this.sliderWarning0 = [27, 75];
        this.sliderDanger0 = [28, 72];
        // vertical Single Handle
        this.verticalSingleHandleValue0 = 40;
        this.configVerticalSingleHandle = {
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        // vertical upper
        this.verticalUpperValue0 = 60;
        this.configVerticalUpper = {
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        // vertical tooltip
        this.verticalTooltipValue0 = [10, 70];
        this.configVerticalTooltip = {
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        // vertical limit
        this.verticalLimitValue0 = [10, 70];
        this.configVerticalLimit = {
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        // snippet code variables
        this._snippetCodeBootstrapSlider = snippet.snippetCodeBootstrapSlider;
        this._snippetCodeSliderSliderValues = snippet.snippetCodeSliderSliderValues;
        this._snippetCodeSliderTap = snippet.snippetCodeSliderTap;
        this._snippetCodeSliderLimit = snippet.snippetCodeSliderLimit;
        this._snippetCodeSliderWithNgModel = snippet.snippetCodeSliderWithNgModel;
        this._snippetCodeSliderScalePipes = snippet.snippetCodeSliderScalePipes;
        this._snippetCodeSliderTooltip = snippet.snippetCodeSliderTooltip;
        this._snippetCodeSliderInput = snippet.snippetCodeSliderInput;
        this._snippetCodeSliderColors = snippet.snippetCodeSliderColors;
        this._snippetCodeVerticalSingleHandle = snippet.snippetCodeVerticalSingleHandle;
        this._snippetCodeVerticalUpper = snippet.snippetCodeVerticalUpper;
        this._snippetCodeVerticalTooltip = snippet.snippetCodeVerticalTooltip;
        this._snippetCodeVerticalLimit = snippet.snippetCodeVerticalLimit;
    }
    /**
     * Slider Input Change
     *
     * @param index
     * @param value
     */
    sliderInputChange(index, value) {
        let newRange = [this.sliderInputValue[0], this.sliderInputValue[1]];
        newRange[index] = newRange[index] + value;
        this.sliderInputValue = newRange;
    }
    /**
     * on Select Change
     */
    onSelectChange() {
        this.sliderInputValue = [this.SelectValueInitial, this.SelectValueFinal];
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'noUiSlider',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Extensions',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'noUiSlider',
                        isLink: false
                    }
                ]
            }
        };
    }
};
NouiSliderComponent = __decorate([
    Component({
        selector: 'app-noui-slider',
        templateUrl: './noui-slider.component.html',
        styleUrls: ['./noui-slider.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], NouiSliderComponent);
export { NouiSliderComponent };
//# sourceMappingURL=noui-slider.component.js.map