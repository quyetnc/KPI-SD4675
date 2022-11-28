Feedback = (function ($) {
    const ribbon = document.getElementById('feedback-ribbon'),
        toggle_layout = ribbon.querySelector('.layout-feedback-ribbon'),
        brandColor = getComputedStyle(ribbon.querySelector('.feedback-palette')).backgroundImage.match(/rgb\([0-9 ,]*\)/g)[0],
        subpanelErrorSelector = '.subpanel-error';
    let applicationName = ribbon.getAttribute('data-application');

    /**
     * using template literals to store the feedback gooey menu template
     * layout class: layout-feedback-ribbon
     */
    let menu_obj = `<div class="layout-SVGShape SVGShape-curve">
            <svg xmlns="http://www.w3.org/2000/svg" id="SVGShape" width="24" height="107.867" viewBox="0 0 24 107.867">
                <g id="menu-item-background">
                    <path class="SVGShapeFill" d="M23.642 0s-1.46 17.539-13.193 29.963S.049 50.669.049 54.292s-.886 11.129 10.4 24.329 13.193 29.246 13.193 29.246z" fill="#6d2077"></path>
                </g>
             </svg>
        </div>
        <div class="feedback-menu-group" id="feedback-toggle">
            <button class="b-button b-button--open"  onclick="Feedback.Toggle.animate()" type="button" role="button">
                <i class="fa fa-comment"></i>
            </button>
            <nav class="js-navigation-feedbackRibbon feedback-menu-group--list" data-open="false" role="complementary">
                <ul class="list-item--feedback-ribbon no-bullet">
                    <li class="list-item list-item__bugs">
                        <a class="list-item--link menu-item-bug">
                            <span class="icon__fa">
                                <i class="fa fa-bug"></i>
                            </span>
                            <span class="text">Bug</span>
                        </a>
                    </li>
                    <li class="list-item list-item__ideas">
                        <a class="list-item--link menu-item-idea">
                            <span class="icon__fa">
                                <i class="fa fa-lightbulb-o"></i>
                            </span>
                            <span class="text">Ideas</span>
                        </a>
                    </li>
                    <li class="list-item list-item__details">
                        <a class="list-item--link menu-item-details">
                            <span class="icon__fa">
                                <i class="fa fa-eye"></i>
                            </span>
                            <span class="text">Details</span>
                        </a>
                    </li>
                    <li class="list-item list-item__satisfaction">
                        <a class="list-item--link menu-item-survey">
                            <span class="icon__fa">
                                <i class="fa fa-comment"></i>
                            </span>
                            <span class="text">Satisfaction</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>`;

    /*
     * Update slide panel's style according to employee's holding
     */
    const adjustStyleByBrand = function () {
        ribbon.querySelectorAll('.feedback-slidepanel .panel-footer .btn-submit').forEach(button => {
            button.style.backgroundColor = brandColor;
            button.style.borderColor = brandColor;
        });
        //ribbon.querySelectorAll('.feedback-slidepanel .panel-heading .icon__fa').forEach(icon => {
        //    icon.style.color = brandColor;
        //});
    };

    /*
     * Reset unobtrusive validation (fix issues with forms rendered at client side)
     */
    const resetFormValidation = function () {
        ribbon.querySelectorAll('.feedback-slidepanel form.subpanel:not(.is-hidden)').forEach(form => {
            $(form).removeData("validator");
            $(form).removeData("unobtrusiveValidation");
            $.validator.unobtrusive.parse(form);
            if ($(form).data('validator')) {
                $(form).data('validator').settings.ignore = '.note-editor *';
            }
        });
    };

    const Resources = (function () {
        const summernoteJs = ribbon.getAttribute('data-summernote-js'),
            summernoteCss = ribbon.getAttribute('data-summernote-css'),
            html2canvasJs = ribbon.getAttribute('data-html2canvas-js');

        const loadScript = function (contentPath, checkFunc = null) {
            return new Promise(resolve => {
                const hasCheck = typeof checkFunc === 'function';

                // Check if script is already loaded
                if (!hasCheck || !checkFunc()) {
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    if (script.readyState) { // IE
                        script.onreadystatechange = function () {
                            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                                script.onreadystatechange = null;
                                resolve();
                            }
                        };
                    } else { // Others
                        script.onload = function () {
                            resolve();
                            script.onload = null;
                        };
                    }
                    script.src = contentPath;
                    document.head.append(script);
                } else {
                    resolve();
                }
            });
        };

        const loadStyle = function (contentPath, checkFunc = null) {
            const hasCheck = typeof checkFunc === 'function';

            if (!hasCheck || !checkFunc()) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = contentPath;
                document.head.append(link);
            }
        };

        const loadAllResources = function () {
            loadScript(html2canvasJs, !!window.html2canvas);
            loadScript(summernoteJs, !!$.fn.summernote).then(() => {
                loadStyle(summernoteCss);
            });
        };

        window.addEventListener('load', function () {
            loadAllResources();
        });

        return {
            load: loadAllResources
        };
    })();

    const Toggle = (function () {
        const animate = function () {
            const toggle_menu_list = document.querySelector('.js-navigation-feedbackRibbon'),
                menu_group = document.querySelector('.feedback-menu-group'),
                SVG_shape_layout = document.querySelector('.layout-SVGShape'),
                layout_feedbackRibbon = document.querySelector('.layout-feedback-ribbon'),
                isOpening = toggle_menu_list.getAttribute('data-open') !== 'true',
                b_button = document.querySelector('.b-button i');

            /**
             * Handle toggle's behaviour in one frame
             */
            if (isOpening) {
                Menu.show();
                toggle_menu_list.setAttribute('data-open', true);

                b_button.classList.remove('fa-comment');
                b_button.classList.add('fa-close');

                layout_feedbackRibbon.classList.remove('is-closed');
                layout_feedbackRibbon.classList.add('is-opened');

                menu_group.classList.remove('slide-in-left');
                menu_group.classList.add('slide-in-right');

                SVG_shape_layout.classList.remove('slide-in-left');
                SVG_shape_layout.classList.add('slide-in-right', 'SVGShape-curve-anim', 'anim-is-closed');

                const menuItemBackgrounds = ribbon.querySelectorAll('.list-item--feedback-ribbon .list-item--link');

                menuItemBackgrounds.forEach(bg => {
                    bg.style.backgroundColor = brandColor;
                });
            } else {
                Menu.hide();
                toggle_menu_list.setAttribute('data-open', false);

                b_button.classList.remove('fa-close')
                b_button.classList.add('fa-comment')

                layout_feedbackRibbon.classList.remove('is-opened');
                layout_feedbackRibbon.classList.add('is-closed');

                menu_group.classList.remove('slide-in-right');
                menu_group.classList.add('slide-in-left');

                SVG_shape_layout.classList.remove('slide-in-right');
                SVG_shape_layout.classList.add('slide-in-left');
            }
        };

        return {
            animate: animate
        };
    })();

    const Menu = (function () {
        (function initMenu() {
            const feedback_toggle = document.querySelector('.layout-feedback-ribbon');

            if (feedback_toggle) {
                feedback_toggle.innerHTML += `${menu_obj}`;
            }

            // Apply the brand color for the buttons & SVG
            document.querySelector('.b-button').style.backgroundColor = brandColor;
            document.querySelector('.SVGShapeFill').setAttribute('fill', brandColor);

            ribbon.querySelectorAll('.list-item--link').forEach(menuItem => {
                if (menuItem.classList.contains('menu-item-bug')) {
                    menuItem.onclick = function (event) {
                        Bug.show(event);
                    };
                } else if (menuItem.classList.contains('menu-item-idea')) {
                    menuItem.onclick = function (event) {
                        Idea.show(event);
                    };
                } else if (menuItem.classList.contains('menu-item-details')) {
                    menuItem.onclick = function (event) {
                        Details.show(event);
                    };
                } else if (menuItem.classList.contains('menu-item-survey')) {
                    menuItem.onclick = function (event) {
                        Survey.show(event);
                    };
                }
            });
        })();

        const menuItems = document.querySelector('.list-item--feedback-ribbon');
        const showMenu = () => menuItems.classList.remove('slide-in-left');
        const hideMenu = () => menuItems.classList.add('slide-in-left');

        return {
            show: showMenu,
            hide: hideMenu
        };
    })();

    const SlidePanel = (function () {
        (function initSlidePanel() {
            const div = document.createElement('div');
            div.innerHTML = ''
                + '<div class="feedback-slidepanel is-hidden">'
                + '    <div class="panel panel-feedback">'
                + '        <div class="subpanel subpanel-loader">'
                + '            <div class="panel-heading">'
                + '                <button type="button" class="close"><span aria-is-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
                + '                <div class="title"><span class="text">Loading<i class="ellipsis"></i></span></h4>'
                + '            </div>'
                + '            <div class="panel-body">'
                + '                <i class="fa fa-spin fa-spinner"></i>'
                + '            </div>'
                + '        </div>'
                + '    </div>'
                + '</div>';
            ribbon.append(div.firstChild);

            const loader = ribbon.querySelector('.subpanel-loader .panel-body');
            loader.style.color = brandColor;
        })();

        const slidePanel = ribbon.querySelector('.feedback-slidepanel'),
            loader = slidePanel.querySelector('.subpanel-loader');

        /**
         * Hide subpanel by selector, or if selector is not defined then hide all
         * @param {any} selector
         */
        const hideSubpanel = function (selector) {
            ribbon.querySelectorAll('.feedback-slidepanel .subpanel' + (selector || '')).forEach(subpanel => {
                subpanel.classList.add('is-hidden');
            });
        }

        const showSlidePanel = function () {
            // Hide the gooey button if the slide panel is showing
            if (toggle_layout.getAttribute('data-open') === 'true') {
                Toggle.animate();
            }

            // Remove subpanels that are failed to load
            slidePanel.querySelectorAll(subpanelErrorSelector).forEach(subpanel => {
                subpanel.remove();
            });

            slidePanel.classList.add('is-active');
            slidePanel.classList.remove('is-hidden');
        };

        const hideSlidePanel = function () {
            slidePanel.classList.remove('is-active');
            slidePanel.classList.add('is-hidden');
        };

        const showLoader = function () {
            loader.classList.remove('is-hidden');
        };

        const hideLoader = function () {
            loader.classList.add('is-hidden');
        };

        (function registerEvents() {
            slidePanel.addEventListener('click', function (event) {
                if (event.target.classList.contains('btn-cancel')) { // Find button cancel to close side panel
                    hideSlidePanel();
                }
                if (event.target.parentElement.classList.contains('close')) { // Find button close to close side panel
                    hideSlidePanel();
                }
            });
        })();

        return {
            hide: hideSlidePanel,
            show: showSlidePanel,
            hideSubpanel: hideSubpanel,
            showLoader: showLoader,
            hideLoader: hideLoader
        };
    })();

    const Summernote = (function () {
        const initSummernote = function (selector, options) {
            if (typeof selector !== 'undefined') {
                selector = selector || '.summernote';
                options = Object.assign({
                    focus: false,
                    height: 150,
                    maximumImageFileSize: 300000,
                    toolbar: [],
                }, options);
                $(selector).summernote(options);
            }
        };

        return {
            init: initSummernote
        };
    })();

    const Bug = (function () {
        const showBugSubpanel = function (event) {
            const subpanelSelector = '.subpanel-bug',
                subpanelUrl = ribbon.getAttribute('data-bug-subpanel'),
                menuItem = ribbon.querySelector('.menu-item-bug');

            // Disable menu click
            if (typeof event !== 'undefined') {
                menuItem.onclick = null;
            }

            SlidePanel.hideSubpanel();

            const takeScreenshot = function () {
                return new Promise(resolve => {
                    html2canvas(document.body, {
                        allowTaint: true,
                        foreignObjectRendering: false,
                        ignoreElements: node => {
                            if (node.id === 'feedback-ribbon') return true;
                            if (node.classList.contains('is-hidden')) return true;
                            if (node.nodeName === 'SCRIPT') return true;
                            return false;
                        },
                        letterRendering: false,
                        logging: false,
                        onclone: elementClone => {
                            const images = elementClone.querySelectorAll('img');
                            images.forEach(img => {
                                img.crossOrigin = 'anonymous';
                            });

                            const checkboxes = elementClone.querySelectorAll('[type="checkbox"]');
                            checkboxes.forEach(chk => {
                                chk.style.display = 'none';
                            });

                            const radios = elementClone.querySelectorAll('[type="radio"]');
                            radios.forEach(radio => {
                                radio.style.display = 'none';
                            });
                        },
                        useCORS: true,
                    }).then(generatedCanvas => {
                        const quality = 1,
                            scaleRatio = 1;

                        const img = new Image();
                        img.src = generatedCanvas.toDataURL('image/jpeg', quality);
                        img.onload = function () {
                            // Adjust screenshot size
                            const yOffset = 0, /* This is adjusted based on testing experience */
                                x = window.pageXOffset !== undefined ? window.pageXOffset : document.documentElement.scrollLeft || document.scrollLeft || 0,
                                y = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop || document.scrollTop || 0,
                                width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                            // Draw screenshot on canvas
                            const canvas = document.createElement('canvas');
                            canvas.width = width * scaleRatio;
                            canvas.height = height * scaleRatio;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, x, y + yOffset, width, height, 0, 0, width * scaleRatio, height * scaleRatio);

                            resolve(canvas.toDataURL('image/jpeg'));
                        };
                    });
                });
            };

            const bugSubpanel = ribbon.querySelector(subpanelSelector);
            if (bugSubpanel === null) {
                (function initBugSubpanel() {
                    // Take screenshot
                    const takeScreenshotPromise = takeScreenshot();

                    const initBugInfo = function (form) {
                        // Init CurrentUrl
                        form.querySelector('[name="CurrentUrl"]').value = window.location;

                        // Init Message
                        const textarea = form.querySelector('[name="Message"]'),
                            template = textarea.getAttribute('data-template');
                        takeScreenshotPromise.then(screenshotData => {
                            // NOTE: To prevent an issue with summernote, the screenshot will not be appended if the form is not showing
                            if (!form.classList.contains('is-hidden') && !form.closest('.feedback-slidepanel').classList.contains('is-hidden')) {
                                // Create screenshot element from Base64 string
                                $(textarea).summernote('pasteHTML', template + '<p></p><img src="' + screenshotData + '" />');

                                // Indicate that the screenshot has been appended
                                textarea.setAttribute('data-load-screenshot', true);
                            }
                        });
                    };

                    const handleFormSubmission = function (form) {
                        form.onsubmit = function (event) {
                            event.preventDefault();

                            $(form).validate();
                            if (!$(form).valid()) return false;

                            (function beforeSend() {
                                form.classList.add('form-sending');
                                form.querySelectorAll('[type="submit"]').forEach(btn => {
                                    btn.disabled = true;
                                });
                            })();

                            let request = new XMLHttpRequest();
                            request.onreadystatechange = function () {
                                if (this.readyState === XMLHttpRequest.DONE) {
                                    if (this.status >= 200 && this.status < 400) {
                                        try {
                                            const response = JSON.parse(this.response);
                                            if (response.status !== 'success') {
                                                MAF.Utils.showError(response.message);
                                            } else {
                                                (function success() {
                                                    MAF.Utils.showSuccess(response.message);
                                                    SlidePanel.hide();

                                                    $(form.querySelector('#Message')).summernote('reset');
                                                    form.reset();
                                                })();
                                            }
                                        } catch (ex) {
                                            MAF.Utils.showError(this.response);
                                        }
                                    } else {
                                        MAF.Utils.showError(this.response);
                                    }

                                    (function complete() {
                                        resetFormValidation();
                                        form.classList.remove('form-sending');
                                        form.querySelectorAll('.panel-footer [type="submit"]').forEach(btn => {
                                            btn.disabled = false;
                                        });
                                    })();
                                }
                            };
                            request.open('POST', form.action, true);
                            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                            const formData = [
                                'ApplicationId=' + form.querySelector('[name="ApplicationId"]').value,
                                'Subject=' + form.querySelector('[name="Subject"]').value,
                                'CurrentUrl=' + form.querySelector('[name="CurrentUrl"]').value,
                                'Message=' + encodeURIComponent(form.querySelector('[name="Message"]').value)
                            ];
                            request.send(formData.join('&'));
                        };

                        return false;
                    };

                    SlidePanel.showLoader();

                    (function requestBugPanel() {
                        let request = new XMLHttpRequest();
                        request.open('GET', subpanelUrl + '?application=' + applicationName, true);
                        request.onreadystatechange = function () {
                            if (this.readyState === XMLHttpRequest.DONE) {
                                const div = document.createElement('div');
                                div.innerHTML = this.response;

                                SlidePanel.hideLoader();

                                // Append HTML
                                const mainPanel = ribbon.querySelector('.panel-feedback');
                                if (div.querySelector(subpanelSelector) === null) {
                                    // Errors occurred
                                    div.classList.add('subpanel-error');
                                    mainPanel.append(div);
                                } else {
                                    mainPanel.append(div.firstChild);

                                    const form = mainPanel.querySelector(subpanelSelector);
                                    Summernote.init(form.querySelector('[name="Message"]'), {
                                        placeholder: 'Describe your issue...',
                                        callbacks: {
                                            onInit: initBugInfo(form)
                                        }
                                    });
                                    handleFormSubmission(form);
                                    adjustStyleByBrand();
                                    resetFormValidation();
                                }
                            }
                        };
                        request.send();
                    })();
                })();
            } else {
                bugSubpanel.classList.remove('is-hidden');

                const textarea = bugSubpanel.querySelector('[name="Message"]');
                if (textarea.getAttribute('data-load-screenshot') !== 'true') {
                    const form = textarea.closest('.subpanel'),
                        template = textarea.getAttribute('data-template'),
                        takeScreenshotPromise = takeScreenshot();

                    takeScreenshotPromise.then(screenshotData => {
                        // NOTE: To prevent an issue with summernote, the screenshot will not be appended if the form is not showing
                        if (!form.classList.contains('is-hidden') && !form.closest('.feedback-slidepanel').classList.contains('is-hidden')) {
                            // Create screenshot element from Base64 string
                            $(textarea).summernote('pasteHTML', template + '<p></p><img src="' + screenshotData + '" />');

                            // Indicate that the screenshot has been appended
                            textarea.setAttribute('data-load-screenshot', true);
                        }
                    });
                }
            }

            SlidePanel.show();

            // Re-enable menu click
            menuItem.onclick = function (event) {
                Bug.show(event);
            };
        };

        return {
            show: showBugSubpanel
        };
    })();

    const Idea = (function () {
        const showIdeaSubpanel = function () {
            const subpanelSelector = '.subpanel-idea',
                subpanelUrl = ribbon.getAttribute('data-idea-subpanel');
            menuItem = ribbon.querySelector('.menu-item-bug');

            // Disable menu click
            if (typeof event !== 'undefined') {
                menuItem.onclick = null;
            }

            SlidePanel.hideSubpanel();

            const ideaSubpanel = ribbon.querySelector(subpanelSelector);
            if (ideaSubpanel === null) {
                const handleFormSubmission = function (form) {
                    form.onsubmit = function (event) {
                        event.preventDefault();

                        $(form).validate();
                        if (!$(form).valid()) return false;

                        (function beforeSend() {
                            form.classList.add('form-sending');
                            form.querySelectorAll('[type="submit"]').forEach(btn => {
                                btn.disabled = true;
                            });
                        })();

                        let request = new XMLHttpRequest();
                        request.onreadystatechange = function () {
                            if (this.readyState === XMLHttpRequest.DONE) {
                                if (this.status >= 200 && this.status < 400) {
                                    try {
                                        const response = JSON.parse(this.response);
                                        if (response.status !== 'success') {
                                            MAF.Utils.showError(response.message);
                                        } else {
                                            (function success() {
                                                MAF.Utils.showSuccess(response.message);
                                                SlidePanel.hide();

                                                $(form.querySelector('#Message')).summernote('reset');
                                                form.reset();
                                            })();
                                        }
                                    } catch (ex) {
                                        MAF.Utils.showError(this.response);
                                    }
                                } else {
                                    MAF.Utils.showError(this.response);
                                }

                                (function complete() {
                                    resetFormValidation();
                                    form.classList.remove('form-sending');
                                    form.querySelectorAll('.panel-footer [type="submit"]').forEach(btn => {
                                        btn.disabled = false;
                                    });
                                })();
                            }
                        };
                        request.open('POST', form.action, true);
                        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                        const formData = [
                            'ApplicationId=' + form.querySelector('[name="ApplicationId"]').value,
                            'Subject=' + form.querySelector('[name="Subject"]').value,
                            'CurrentUrl=' + form.querySelector('[name="CurrentUrl"]').value,
                            'Message=' + encodeURIComponent(form.querySelector('[name="Message"]').value),
                            'IsAnonymous=' + (form.querySelector('[name="IsAnonymous"]:checked') !== null ? 'True' : 'False')

                        ];
                        request.send(formData.join('&'));
                    };

                    return false;
                };

                SlidePanel.showLoader();

                (function initIdeaSubpanel() {
                    let request = new XMLHttpRequest();
                    request.open('GET', subpanelUrl + '?application=' + applicationName, true);
                    request.onreadystatechange = function () {
                        if (this.readyState === XMLHttpRequest.DONE) {
                            const div = document.createElement('div');
                            div.innerHTML = this.response;

                            SlidePanel.hideLoader();

                            // Append HTML
                            const mainPanel = ribbon.querySelector('.panel-feedback');
                            if (div.querySelector(subpanelSelector) === null) {
                                // Errors occurred
                                div.classList.add('subpanel-error');
                                mainPanel.append(div);
                            } else {
                                mainPanel.append(div.firstChild);

                                const form = ribbon.querySelector(subpanelSelector);
                                Summernote.init(subpanelSelector + ' [name="Message"]', {
                                    placeholder: 'Tell us about your idea!'
                                });
                                handleFormSubmission(form);

                                adjustStyleByBrand();
                                resetFormValidation();

                                // Init CurrentUrl
                                form.querySelector('[name="CurrentUrl"]').value = window.location;
                            }
                        }
                    };
                    request.send();
                })();
            } else {
                ideaSubpanel.classList.remove('is-hidden');
            }

            SlidePanel.show();

            // Re-enable menu click
            menuItem.onclick = function (event) {
                Bug.show(event);
            };
        };

        return {
            show: showIdeaSubpanel
        };
    })();

    const Details = (function () {
        const showDetailsSubpanel = function () {
            const subpanelSelector = '.subpanel-details',
                subpanelUrl = ribbon.getAttribute('data-details-subpanel'),
                menuItem = ribbon.querySelector('.menu-item-bug');

            // Disable menu click
            if (typeof event !== 'undefined') {
                menuItem.onclick = null;
            }

            SlidePanel.hideSubpanel();

            const detailsSubpanel = ribbon.querySelector(subpanelSelector);
            if (detailsSubpanel === null) {
                SlidePanel.showLoader();

                (function initDetailsSubpanel() {
                    let request = new XMLHttpRequest();
                    request.open('GET', subpanelUrl + '?application=' + applicationName, true);
                    request.onreadystatechange = function () {
                        if (this.readyState === XMLHttpRequest.DONE) {
                            const div = document.createElement('div');
                            div.innerHTML = this.response;

                            SlidePanel.hideLoader();

                            // Append HTML
                            const mainPanel = ribbon.querySelector('.panel-feedback');
                            if (div.querySelector(subpanelSelector) === null) {
                                // Errors occurred
                                div.classList.add('subpanel-error');
                                mainPanel.append(div);
                            } else {
                                mainPanel.append(div.firstChild);
                            }
                        }
                    };
                    request.send();
                })();
            } else {
                detailsSubpanel.classList.remove('is-hidden');
            }

            SlidePanel.show();

            // Re-enable menu click
            menuItem.onclick = function (event) {
                Bug.show(event);
            };
        };

        return {
            show: showDetailsSubpanel,
        };
    })();

    const Survey = (function () {
        const surveyKey = 'Feedback_Survey_' + applicationName,
            today = new Date().toISOString().substr(0, 10),
            defaultLocalSurvey = { NextCheckingDate: today, IsDone: false };

        // Get tomorrow
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow = tomorrow.toISOString().substr(0, 10);

        const getLocalSurvey = function () {
            let localSurvey;
            try {
                const rawLocalSurvey = localStorage.getItem(surveyKey);
                localSurvey = JSON.parse(rawLocalSurvey);

                // Safe check
                if (localSurvey === null
                    || localSurvey.NextCheckingDate === undefined || !moment(localSurvey).isValid()
                    || typeof (localSurvey.IsDone) !== 'boolean') {
                    localSurvey = defaultLocalSurvey;
                }
            } catch (ex) {
                localSurvey = defaultLocalSurvey;
            }

            return localSurvey;
        };

        const requestEmployeeSurvey = function () {
            return new Promise(resolve => {
                let request = new XMLHttpRequest();
                request.open('GET', '/Feedback/Ribbon/CheckSurvey?application=' + applicationName, true);
                request.onreadystatechange = function () {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        if (this.status >= 200 && this.status < 400) {
                            try {
                                const survey = JSON.parse(this.response);
                                resolve(survey);
                            } catch (ex) {
                                resolve(defaultLocalSurvey);
                            }
                        } else {
                            resolve(defaultLocalSurvey);
                        }
                    }
                };
                request.send();
            });
        };

        const removeSurveyButton = function () {
            const surveyButton = ribbon.querySelector('.menu-item-survey');
            if (surveyButton !== null) {
                surveyButton.remove();
            }
        };

        const showSurvey = function () {
            const subpanelSelector = '.subpanel-survey',
                subpanelUrl = ribbon.getAttribute('data-survey-subpanel'),
                menuItem = ribbon.querySelector('.menu-item-bug');

            // Disable menu click
            if (typeof event !== 'undefined') {
                menuItem.onclick = null;
            }

            SlidePanel.hideSubpanel();

            const surveySubpanel = ribbon.querySelector(subpanelSelector);
            if (surveySubpanel === null) {
                const handleFormSubmission = function (form) {
                    form.onsubmit = function (event) {
                        event.preventDefault();

                        if (!$(form).valid()) return false;

                        (function beforeSend() {
                            form.classList.add('form-sending');
                            form.querySelectorAll('[type="submit"]').forEach(btn => {
                                btn.disabled = true;
                            });
                        })();

                        let request = new XMLHttpRequest();
                        request.onreadystatechange = function () {
                            if (this.readyState === XMLHttpRequest.DONE) {
                                if (this.status >= 200 && this.status < 400) {
                                    try {
                                        const response = JSON.parse(this.response);
                                        if (response.status !== 'success') {
                                            MAF.Utils.showError(response.message);
                                        } else {
                                            (function success() {
                                                MAF.Utils.showSuccess(response.message);
                                                SlidePanel.hide();
                                                removeSurveyButton();
                                                form.reset();

                                                const survey = getLocalSurvey();
                                                survey.IsDone = true;
                                                localStorage.setItem(surveyKey, JSON.stringify(survey));
                                            })();
                                        }
                                    } catch (ex) {
                                        MAF.Utils.showError(this.response);
                                    }
                                } else {
                                    MAF.Utils.showError(this.response);
                                }

                                (function complete() {
                                    resetFormValidation();
                                    form.classList.remove('form-sending');
                                    ribbon.querySelectorAll('.panel-footer [type="submit"]').forEach(btn => {
                                        btn.disabled = false;
                                    });
                                })();
                            }
                        };
                        request.open('POST', form.action, true);
                        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                        request.send('AppName=' + form.querySelector('[name="AppName"]').value
                            + '&ValueSatisfactionTypeId=' + form.querySelector('[name="ValueSatisfactionTypeId"]:checked').value
                            + '&Comment=' + encodeURI(form.querySelector('[name="Comment"]').value));
                    };

                    return false;
                };

                SlidePanel.showLoader();

                (function initSurveySubpanel() {
                    let request = new XMLHttpRequest();
                    request.onreadystatechange = function () {
                        if (this.readyState === XMLHttpRequest.DONE) {
                            const div = document.createElement('div');
                            div.innerHTML = this.response;

                            SlidePanel.hideLoader();

                            // Append HTML
                            const mainPanel = ribbon.querySelector('.panel-feedback');
                            if (div.querySelector(subpanelSelector) === null) {
                                // Errors occurred
                                div.classList.add('subpanel-error');
                                mainPanel.append(div);
                            } else {
                                mainPanel.append(div.firstChild);

                                adjustStyleByBrand();
                                resetFormValidation();

                                const form = ribbon.querySelector(subpanelSelector);
                                handleFormSubmission(form);

                                const btnSkip = form.querySelector('.btn-skip-survey');
                                btnSkip.onclick = skip;
                            }
                        }
                    };
                    request.open('GET', subpanelUrl + '?application=' + applicationName, true);
                    request.send();
                })();
            } else {
                surveySubpanel.classList.remove('is-hidden');
            }

            SlidePanel.show();

            // Re-enable menu click
            menuItem.onclick = function (event) {
                Bug.show(event);
            };
        };

        const skip = function () {
            SlidePanel.hide();

            // Update local data
            let rawSurvey = localStorage.getItem(surveyKey),
                survey = JSON.parse(rawSurvey);
            survey.IsDone = true;
            rawSurvey = JSON.stringify(survey);
            localStorage.setItem(surveyKey, rawSurvey);

            removeSurveyButton();
        };

        (function checkSurvey() {
            const today = new Date().toISOString().substr(0, 10);
            let localSurvey = getLocalSurvey();

            // Check local survey
            if (localSurvey.NextCheckingDate <= today) {
                requestEmployeeSurvey().then(remoteSurvey => {
                    if (localSurvey.NextCheckingDate < remoteSurvey.NextCheckingDate) { // There's a new survey
                        if (!remoteSurvey.IsDone) { // User hasn't done the new survey
                            Survey.show();
                        } else { // User has done it somewhere else
                            removeSurveyButton();
                        }

                        localStorage.setItem(surveyKey, JSON.stringify(remoteSurvey));
                    } else { // No new survey
                        // Show survey if it's the first time user opens app today
                        if (localSurvey.IsDone || remoteSurvey.IsDone) {
                            removeSurveyButton();
                            if (remoteSurvey.IsDone) localSurvey.IsDone = true;
                        } else {
                            Survey.show();
                        }
                        localSurvey.NextCheckingDate = tomorrow;
                        localStorage.setItem(surveyKey, JSON.stringify(localSurvey));
                    }
                });
            } else {
                localSurvey.NextCheckingDate = tomorrow;
                localStorage.setItem(surveyKey, JSON.stringify(localSurvey));

                if (localSurvey.IsDone) {
                    removeSurveyButton();
                }
            }
        })();

        return {
            show: showSurvey,
            skip: skip
        };
    })();

    return {
        Resources: Resources,
        Toggle: Toggle,
        Menu: Menu,
        SlidePanel: SlidePanel,
        Bug: Bug,
        Idea: Idea,
        Details: Details,
        Survey: Survey
    };
})(jQuery);