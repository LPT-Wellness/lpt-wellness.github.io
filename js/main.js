/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    skel
        .breakpoints({
            xlarge: '(max-width: 1680px)',
            large: '(max-width: 1280px)',
            medium: '(max-width: 980px)',
            small: '(max-width: 736px)',
            xsmall: '(max-width: 480px)'
        });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#page-wrapper'),
            $banner = $('#banner'),
            $header = $('#header');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Mobile?
        if (skel.vars.mobile)
            $body.addClass('is-mobile');
        else
            skel
                .on('-medium !medium', function () {
                    $body.removeClass('is-mobile');
                })
                .on('+medium', function () {
                    $body.addClass('is-mobile');
                });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Scrolly.
        $('.scrolly')
            .scrolly({
                speed: 1500,
                offset: $header.outerHeight()
            });

        // Menu.
        $('#menu')
            .append('<a href="#menu" class="close"></a>')
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right',
                target: $body,
                visibleClass: 'is-menu-visible'
            });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0
            && $header.hasClass('alt')) {

            $window.on('resize', function () {
                $window.trigger('scroll');
            });

            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function () {
                    $header.removeClass('alt');
                },
                enter: function () {
                    $header.addClass('alt');
                },
                leave: function () {
                    $header.removeClass('alt');
                }
            });

        }

    });

})(jQuery);

/*
(function () {
    const APP_ID = 'AF67BAEC-AC5F-A102-FF4A-5DADCF67B600';
    const API_KEY = 'DFE382CE-364F-4109-BBBC-F1635E1E5754';

    Backendless.serverURL = 'https://eu-api.backendless.com';
    Backendless.initApp(APP_ID, API_KEY);

    const reservationsTable = Backendless.Data.of('reservations');
    const customersTable = Backendless.Data.of('customers');

    const $createObjStatusMsg = document.getElementById('create-obj-status');
    const $modifierPanel = document.getElementById('modifier-panel');
    const $currentValue = document.getElementById('current-value');
    const $input = document.getElementById('input');
    const $updateBtn = document.getElementById('update-btn');

    async function createObject() {
        const reservation = await reservationsTable.save({
            start_date: new Date(),
            end_date: new Date(),
        });

        const customer = await customersTable.save({
            email: 'phs@y62.de',
            name: 'Philipp',
            phone: '+4900000',
            address: 'Paderborn ....'
        });

        reservationsTable.setRelation(reservation, "customer", [customer]);
    }

    function updateObjectValue(object) {
        $currentValue.innerText = object.foo;
    }

    function subscribeOnObjectChanges(object) {
        reservationsTable.rt().addUpdateListener('objectId = \'' + object.objectId + '\'', updateObjectValue);
    }

    function onEnter(callback) {
        return function onKeyPress(e) {
            if (e.keyCode === 13) {//Enter key
                callback();
            }
        };
    }

    function onObjectCreate(object) {
        $modifierPanel.classList.remove('d-none');

        $updateBtn.addEventListener('click', saveObject);
        $input.addEventListener('keypress', onEnter(saveObject));

        updateObjectValue(object);
        subscribeOnObjectChanges(object);

        function saveObject() {
            object.foo = $input.value;

            $input.value = '';

            reservationsTable.save(object);
        }
    }

    createObject();
    //.then(onObjectCreate);
})();

*/
