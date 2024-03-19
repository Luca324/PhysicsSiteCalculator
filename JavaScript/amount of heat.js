$(document).ready(function () {
    myToFixed = function (num, accuracy) {
        if (typeof (num) === 'number') {
            str = num.toFixed(accuracy);
            while (((str.lastIndexOf('0') === str.length - 1) ||
                (str.lastIndexOf('.') === str.length - 1)) && (str.lastIndexOf('.') !== -1)) {
                str = str.slice(0, -1);
            }
            return str
        }
    }

    const inputResize = function () {
        $('.input').each(function () {
            for (var i = 1; i < 10; i++) {
                if ($(this).is('.input' + i)) {
                    $buffer = $('.input' + i + '-buffer')
                    $buffer.text($(this).val());
                    $(this).width($buffer.width());
                }
            }
        })
    }
    const calculate = function () {
        console.log('you pressed the calculating button')
        counter = 1

        step = 0 //если код зациклится

        if ($('#Q').val() !== '') { Q = Number($('#Q').val().replace(',', '.')) } else { Q = '' }
        if ($('#m').val() !== '') { m = Number($('#m').val().replace(',', '.')) } else { m = '' }
        if ($('#t').val() !== '') { t = Number($('#t').val().replace(',', '.')) } else { t = '' }
        if ($('#t0').val() !== '') { t0 = Number($('#t0').val().replace(',', '.')) } else { t0 = '' }
        if (($('#c').val() !== '' ) && ($('#c').val() !== undefined )) { c = Number($('#c').val().replace(',', '.')) } else { c = '' }
        if (($('#Lλq').val() !== '') && ($('#Lλq').val() !== undefined )) { Lλq = Number($('#Lλq').val().replace(',', '.')) } else { Lλq = '' }
        if (($('#Δt').val() !== '') && ($('#Δt').val() !== undefined )) { deltat = Number($('#Δt').val().replace(',', '.')) } else { deltat = '' }

        selectedSpecific = $("select.specific").children("option:selected").val();

        while ((counter != 0) && (step < 30)) {
            counter = 0

            if ((Q === '') && m) {
                if (c && deltat) {
                    Q = c * m * deltat
                    counter += 1;
                }
                if (Lλq) {
                    Q = m * Lλq
                    counter += 1;
                }
            }

            if ((m === '') && Q) {
                if (c && deltat) {
                    m = Q / (c * deltat);
                    counter += 1; 
                }
                if (Lλq) {
                    m = Q / Lλq
                    counter += 1;
                }
            }

            if (t === '') {
                if ((t0 !== '') && deltat) {
                    t = t0 + deltat
                    counter += 1;
                }
                if (Q && c && m && t0) {
                    t = Q / (c * m) + (t0 !== '')
                    counter += 1;
                }
            }

            if (t0 === '') {
                if ((t !== '') && (deltat !== '')) {
                    t = t - deltat
                    counter += 1;
                }
                if (Q && c && m && (t !== '')) {
                    t0 = t - Q / (c * m)
                    counter += 1;
                }
            }

            if (deltat === '') {
                if ((t !== '') && (t0 !== '')) {
                    deltat = t - t0
                    counter += 1;
                }
                if (Q && m && c) {
                    deltat = Q / (c * m)
                    counter += 1;
                }
            }

            if ((c === '') && Q && deltat && m) {
                c = Q / (m * (deltat))
                counter += 1;
            }

            if ((Lλq === '') && Q && m) {
                Lλq = Q / m
                counter += 1;
            }
            step += 1
            if (step > 10) {
                break
            }        }

        let Variables = {
            'Q': Q,
            'm': m,
            't': t,
            't0': t0,
            'c': c,
            'Lλq': Lλq,
            'Δt': deltat,
        }

        function final(str) {
            $('#' + str).val(myToFixed(Variables[str], 5))
            if ((Variables[str] === '') | (Variables[str] === NaN) | (Variables[str] === undefined)) {
                $(".not-enough-data-" + str).show()
            } else {
                $(".not-enough-data-" + str).hide()
            }
        }
        for (i in Variables) {
            final(i)
        }
        $('#Δt').val(myToFixed(deltat, 5))

        switch ($('.choosespecific').attr('id')) {
            case 'c':
                if (Variables['c'] === '') {
                    $('.not-enough-data-Lλqc').show()
                } else {
                    $('.not-enough-data-Lλqc').hide()
                }
            case 'Lλq':
                if (Variables['Lλq'] === '') {
                    $('.not-enough-data-Lλqc').show()
                } else {
                    $('.not-enough-data-Lλqc').hide()
                }
        }

        // подстраиваем размеры инпутов при расчете
        inputResize()

    }

    $('#calculate').click(function () {
        calculate()
    })

    const clear = function () {
        console.log('you pressed the clear button')
        $(".not-enough-data").hide()
        $(".error").hide()

        $('#Q').val('')
        $('#m').val('')
        $('#t').val('')
        $('#t0').val('')
        $('#c').val('')
        $('#Lλq').val('')
        $('#Δt').val('')

        // подстраиваем размеры инпутов при очистке
        inputResize()
    }
    $('#clear').click(function () {
        clear()
    })
    $("select.specific").change(function () {
        var selectedSpecific = $(this).children("option:selected").val();
        if (selectedSpecific == 'c') {
            $('.choosespecific').attr('id', 'c')
        } else {
            $('.choosespecific').attr('id', 'Lλq')
        }
        if (selectedSpecific != 'c') {
            $('#tr-t').hide()
            $('#tr-t0').hide()
            $('#tr-Δt').hide()
            $('#units').text('Дж/кг')
        } else {
            $('#tr-t').show()
            $('#tr-t0').show()
            $('#tr-Δt').show()
            $('#units').text('Дж/(кг·К)')
        }
    });

    // подстраиваем размеры инпутов при вводе
    $('body').on('input', '.input', function () {
        for (var i = 1; i < 8; i++) {
            if ($(this).is('.input' + i)) {
                $buffer = $('.input' + i + '-buffer')
                $buffer.text($(this).val());
                $(this).width($buffer.width());
            }
        }
    });
})