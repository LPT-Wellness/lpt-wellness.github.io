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


(async function () {
    const APP_ID = 'AF67BAEC-AC5F-A102-FF4A-5DADCF67B600';
    const API_KEY = 'DFE382CE-364F-4109-BBBC-F1635E1E5754';

    Backendless.serverURL = 'https://eu-api.backendless.com';
    Backendless.initApp(APP_ID, API_KEY);

    const reservationsTable = Backendless.Data.of('reservations');
    const customersTable = Backendless.Data.of('customers');

    async function createObject(startDate, endDate, email, name, phone, address) {
        const reservation = await reservationsTable.save({
            start_date: startDate,
            end_date: endDate,
        });

        const customer = await customersTable.save({
            email,
            name,
            phone,
            address
        });

        reservationsTable.setRelation(reservation, 'customer', [customer]);
        return reservation;
    }

    async function retrieveOccupiedDates() {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        const whereClause = "end_date > " + date.getTime();
        const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);
        queryBuilder.setPageSize(100);
        return reservationsTable.find(queryBuilder).then(results => {
            results = results.map(res => {
                const startDate = new Date(res.start_date);
                let endDate = new Date(res.end_date);

                const diffTime = Math.abs(endDate - startDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (false  && diffDays >= 1) {
                    const dateOffset = (24 * 60 * 60 * 1000) * 1; //1 day
                    endDate = new Date(endDate.getTime() - dateOffset);
                }


                return [startDate, endDate];
            });
            return results;
        });
    }

    let startDate, endDate = null;
    let picker = null;


    function initializePicker(disabledDays) {
        if (picker != null) {
            picker.destroy();
        }
        picker = new Litepicker({
            element: document.getElementById('litepicker'),
            plugins: ['mobilefriendly'],
            lang: 'de-DE',
            inlineMode: true,
            lockDaysInclusivity: '()',
            lockDays: disabledDays,
            minDate: new Date(new Date().toDateString()),
            highlightedDays: disabledDays,
            numberOfMonths: 2,
            showWeekNumbers: true,
            minDays: 2,
            tooltipNumber: (totalDays) => {
                return totalDays - 1;
            },
            showTooltip: true,
            singleMode: false,
            tooltipText: {'one': 'Tag', 'other': 'Tage'},
            disallowLockDaysInRange: true,
            splitView: false,
            numberOfColumns: 2,
            maxDays: 50,
            format: 'DD.MM.YYYY',
            position: 'top',
            setup: (p) => {
                p.on('error:range', () => {
                    p.clearSelection();
                    startDate = endDate = null;
                    alert('Der gewählte Zeitraum kann nicht gewählt werden, da mind. ein Tag bereits belegt ist.');
                });
                p.on('selected', (date1, date2) => {
                    startDate = date1.dateInstance;
                    endDate = date2.dateInstance;
                });
            }
        });
    }

    if (document.getElementById('litepicker') != null) {
        initializePicker(await retrieveOccupiedDates());

        document.querySelector('#booking-form').addEventListener('submit', function (evt) {
            evt.preventDefault();
            const formData = new FormData(document.querySelector('#booking-form'));
            const formObj = {};
            for (let pair of formData.entries()) {
                formObj[pair[0]] = pair[1];
            }

            $('#booking-form :input').prop('disabled', true);

            const address = '' + formObj['street'] + ', ' + formObj['zip'] + ' ' + formObj['city'];

            createObject(startDate, endDate, formObj['email'], formObj['name'], formObj['telephone'], address).then(res => {
                alert('Die Anfrage wurde erfolgreich abgesendet! Eine Kopie wurde per Mail zugesandt' +
                    ' und wir melden uns bei dir um letzte Details zu klären.');
                $('#form-success').show();
            }).catch(async () => {
                $('#form-error').show();
                alert('Die Anfrage hat leider nicht geklappt. Für das gewählte Datum existiert bereits eine Anfrage.');
                initializePicker(await retrieveOccupiedDates());
                $('#booking-form :input').prop('disabled', false);
            });
        });
    }
})();

