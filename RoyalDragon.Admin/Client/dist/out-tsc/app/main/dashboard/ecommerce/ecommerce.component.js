import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { colors } from 'app/colors.const';
import { locale as english } from 'app/main/dashboard/i18n/en';
import { locale as french } from 'app/main/dashboard/i18n/fr';
import { locale as german } from 'app/main/dashboard/i18n/de';
import { locale as portuguese } from 'app/main/dashboard/i18n/pt';
let EcommerceComponent = class EcommerceComponent {
    /**
     * Constructor
     * @param {AuthenticationService} _authenticationService
     * @param {DashboardService} _dashboardService
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(_authenticationService, _dashboardService, _coreConfigService, _coreTranslationService) {
        this._authenticationService = _authenticationService;
        this._dashboardService = _dashboardService;
        this._coreConfigService = _coreConfigService;
        this._coreTranslationService = _coreTranslationService;
        this.isMenuToggled = false;
        // Private
        this.$barColor = '#f3f3f3';
        this.$trackBgColor = '#EBEBEB';
        this.$textMutedColor = '#b9b9c3';
        this.$budgetStrokeColor2 = '#dcdae3';
        this.$goalStrokeColor2 = '#51e5a8';
        this.$textHeadingColor = '#5e5873';
        this.$strokeColor = '#ebe9f1';
        this.$earningsStrokeColor2 = '#28c76f66';
        this.$earningsStrokeColor3 = '#28c76f33';
        this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));
        this.isAdmin = this._authenticationService.isAdmin;
        this.isClient = this._authenticationService.isClient;
        this._coreTranslationService.translate(english, french, german, portuguese);
        // Statistics Bar Chart
        this.statisticsBar = {
            chart: {
                height: 70,
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0,
                    top: -15,
                    bottom: -15
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '20%',
                    startingShape: 'rounded',
                    colors: {
                        backgroundBarColors: [this.$barColor, this.$barColor, this.$barColor, this.$barColor, this.$barColor],
                        backgroundBarRadius: 5
                    }
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            colors: [colors.solid.warning],
            series: [
                {
                    name: '2020',
                    data: [45, 85, 65, 45, 65]
                }
            ],
            xaxis: {
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            tooltip: {
                x: {
                    show: false
                }
            }
        };
        // Statistics Line Chart
        this.statisticsLine = {
            chart: {
                height: 70,
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            grid: {
                // show: true,
                borderColor: this.$trackBgColor,
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                padding: {
                    // left: 0,
                    // right: 0,
                    top: -30,
                    bottom: -10
                }
            },
            stroke: {
                width: 3
            },
            colors: [colors.solid.info],
            series: [
                {
                    data: [0, 20, 5, 30, 15, 45]
                }
            ],
            markers: {
                size: 2,
                colors: colors.solid.info,
                strokeColors: colors.solid.info,
                strokeWidth: 2,
                strokeOpacity: 1,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 5,
                        fillColor: '#ffffff',
                        strokeColor: colors.solid.info,
                        size: 5
                    }
                ],
                shape: 'circle',
                radius: 2,
                hover: {
                    size: 3
                }
            },
            xaxis: {
                labels: {
                    show: true,
                    style: {
                        fontSize: '0px'
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            tooltip: {
                x: {
                    show: false
                }
            }
        };
        // Revenue Report Chart
        this.revenueReportChartoptions = {
            chart: {
                height: 230,
                stacked: true,
                type: 'bar',
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    columnWidth: '17%',
                    endingShape: 'rounded'
                }
            },
            colors: [colors.solid.primary, colors.solid.warning],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                padding: {
                    top: -20,
                    bottom: -10
                },
                yaxis: {
                    lines: { show: false }
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                labels: {
                    style: {
                        colors: this.$textMutedColor,
                        fontSize: '0.86rem'
                    }
                },
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: this.$textMutedColor,
                        fontSize: '0.86rem'
                    }
                }
            }
        };
        // Budget Chart
        this.budgetChartoptions = {
            chart: {
                height: 80,
                toolbar: { show: false },
                zoom: { enabled: false },
                type: 'line',
                sparkline: { enabled: true }
            },
            stroke: {
                curve: 'smooth',
                dashArray: [0, 5],
                width: [2]
            },
            colors: [colors.solid.primary, this.$budgetStrokeColor2],
            tooltip: {
                enabled: false
            }
        };
        // Goal Overview  Chart
        this.goalChartoptions = {
            chart: {
                height: 245,
                type: 'radialBar',
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    left: 1,
                    top: 1,
                    opacity: 0.1
                }
            },
            colors: [this.$goalStrokeColor2],
            plotOptions: {
                radialBar: {
                    offsetY: -10,
                    startAngle: -150,
                    endAngle: 150,
                    hollow: {
                        size: '77%'
                    },
                    track: {
                        background: this.$strokeColor,
                        strokeWidth: '50%'
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            color: this.$textHeadingColor,
                            fontSize: '2.86rem',
                            fontWeight: '600'
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: [colors.solid.success],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: 'round'
            },
            grid: {
                padding: {
                    bottom: 30
                }
            }
        };
        // Browser States Primary Chart
        this.statePrimaryChartoptions = {
            chart: {
                height: 30,
                width: 30,
                type: 'radialBar'
            },
            grid: {
                show: false,
                padding: {
                    left: -15,
                    right: -15,
                    top: -12,
                    bottom: -15
                }
            },
            colors: [colors.solid.primary],
            series: [54.4],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '22%'
                    },
                    track: {
                        background: this.$trackBgColor
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            stroke: {
                lineCap: 'round'
            }
        };
        // Browser States Warning Chart
        this.stateWarningChartoptions = {
            chart: {
                height: 30,
                width: 30,
                type: 'radialBar'
            },
            grid: {
                show: false,
                padding: {
                    left: -15,
                    right: -15,
                    top: -12,
                    bottom: -15
                }
            },
            colors: [colors.solid.warning],
            series: [6.1],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '22%'
                    },
                    track: {
                        background: this.$trackBgColor
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            stroke: {
                lineCap: 'round'
            }
        };
        // Browser States Secondary Chart
        this.stateSecondaryChartoptions = {
            chart: {
                height: 30,
                width: 30,
                type: 'radialBar'
            },
            grid: {
                show: false,
                padding: {
                    left: -15,
                    right: -15,
                    top: -12,
                    bottom: -15
                }
            },
            colors: [colors.solid.secondary],
            series: [14.6],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '22%'
                    },
                    track: {
                        background: this.$trackBgColor
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            stroke: {
                lineCap: 'round'
            }
        };
        // Browser States Info Chart
        this.stateInfoChartoptions = {
            chart: {
                height: 30,
                width: 30,
                type: 'radialBar'
            },
            grid: {
                show: false,
                padding: {
                    left: -15,
                    right: -15,
                    top: -12,
                    bottom: -15
                }
            },
            colors: [colors.solid.info],
            series: [4.2],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '22%'
                    },
                    track: {
                        background: this.$trackBgColor
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            stroke: {
                lineCap: 'round'
            }
        };
        // Browser States Danger Chart
        this.stateDangerChartoptions = {
            chart: {
                height: 30,
                width: 30,
                type: 'radialBar'
            },
            grid: {
                show: false,
                padding: {
                    left: -15,
                    right: -15,
                    top: -12,
                    bottom: -15
                }
            },
            colors: [colors.solid.danger],
            series: [8.4],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '22%'
                    },
                    track: {
                        background: this.$trackBgColor
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            stroke: {
                lineCap: 'round'
            }
        };
        // Earnings Chart
        this.earningChartoptions = {
            chart: {
                type: 'donut',
                height: 120,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [53, 16, 31],
            legend: { show: false },
            comparedResult: [2, -3, 8],
            labels: ['App', 'Service', 'Product'],
            stroke: { width: 0 },
            colors: [this.$earningsStrokeColor2, this.$earningsStrokeColor3, colors.solid.success],
            grid: {
                padding: {
                    right: -20,
                    bottom: -8,
                    left: -20
                }
            },
            plotOptions: {
                pie: {
                    startAngle: -10,
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                offsetY: 15
                            },
                            value: {
                                offsetY: -15,
                                formatter: function (val) {
                                    return parseInt(val) + '%';
                                }
                            },
                            total: {
                                show: true,
                                offsetY: 15,
                                label: 'App',
                                formatter: function (w) {
                                    return '53%';
                                }
                            }
                        }
                    }
                }
            },
            responsive: [
                {
                    breakpoint: 1325,
                    options: {
                        chart: {
                            height: 100
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 120
                        }
                    }
                },
                {
                    breakpoint: 1065,
                    options: {
                        chart: {
                            height: 100
                        }
                    }
                },
                {
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 120
                        }
                    }
                }
            ]
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // get the currentUser details from localStorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // Get the dashboard service data
        this._dashboardService.onApiDataChanged.subscribe(response => {
            this.data = response;
        });
    }
    /**
     * After View Init
     */
    ngAfterViewInit() {
        // Subscribe to core config changes
        this._coreConfigService.getConfig().subscribe(config => {
            // If Menu Collapsed Changes
            if ((config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) &&
                localStorage.getItem('currentUser')) {
                setTimeout(() => {
                    if (this.currentUser.roleName == 'Admin') {
                        // Get Dynamic Width for Charts
                        this.isMenuToggled = true;
                        this.statisticsBar.chart.width = this.statisticsBarChartRef?.nativeElement.offsetWidth;
                        this.statisticsLine.chart.width = this.statisticsLineChartRef?.nativeElement.offsetWidth;
                        this.earningChartoptions.chart.width = this.earningChartRef?.nativeElement.offsetWidth;
                        this.revenueReportChartoptions.chart.width = this.revenueReportChartRef?.nativeElement.offsetWidth;
                        this.budgetChartoptions.chart.width = this.budgetChartRef?.nativeElement.offsetWidth;
                        this.goalChartoptions.chart.width = this.goalChartRef?.nativeElement.offsetWidth;
                    }
                }, 500);
            }
        });
    }
};
__decorate([
    ViewChild('statisticsBarChartRef')
], EcommerceComponent.prototype, "statisticsBarChartRef", void 0);
__decorate([
    ViewChild('statisticsLineChartRef')
], EcommerceComponent.prototype, "statisticsLineChartRef", void 0);
__decorate([
    ViewChild('earningChartRef')
], EcommerceComponent.prototype, "earningChartRef", void 0);
__decorate([
    ViewChild('revenueReportChartRef')
], EcommerceComponent.prototype, "revenueReportChartRef", void 0);
__decorate([
    ViewChild('budgetChartRef')
], EcommerceComponent.prototype, "budgetChartRef", void 0);
__decorate([
    ViewChild('statePrimaryChartRef')
], EcommerceComponent.prototype, "statePrimaryChartRef", void 0);
__decorate([
    ViewChild('stateWarningChartRef')
], EcommerceComponent.prototype, "stateWarningChartRef", void 0);
__decorate([
    ViewChild('stateSecondaryChartRef')
], EcommerceComponent.prototype, "stateSecondaryChartRef", void 0);
__decorate([
    ViewChild('stateInfoChartRef')
], EcommerceComponent.prototype, "stateInfoChartRef", void 0);
__decorate([
    ViewChild('stateDangerChartRef')
], EcommerceComponent.prototype, "stateDangerChartRef", void 0);
__decorate([
    ViewChild('goalChartRef')
], EcommerceComponent.prototype, "goalChartRef", void 0);
EcommerceComponent = __decorate([
    Component({
        selector: 'app-ecommerce',
        templateUrl: './ecommerce.component.html',
        styleUrls: ['./ecommerce.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], EcommerceComponent);
export { EcommerceComponent };
//# sourceMappingURL=ecommerce.component.js.map