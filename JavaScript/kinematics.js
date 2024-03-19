$(document).ready(function () {
    $("select#units").change(function () {
        var selectedUnits = $(this).children("option:selected").val();
        $('.choosespecific').attr('id', selectedUnits)
        console.log('selectedUnits: ', selectedUnits)
        if (selectedUnits == "м-с") {
            $('.x-units').text('м')
            $('.v-units').text('м/c')
            $('.t-units').text('c')
        } else if (selectedUnits == "км-ч") {
            $('.x-units').text('км')
            $('.v-units').text('км/ч')
            $('.t-units').text('ч')
        }
    });

    myToFixed = function (num, accuracy) {
        if (typeof (num) === 'number') {
            str = num.toFixed(accuracy);
            while (((str.lastIndexOf('0') === str.length - 1) ||
                (str.lastIndexOf('.') === str.length - 1)) && (str.lastIndexOf('.') !== -1)) {
                str = str.slice(0, -1);
            }
            return str
        } else {
            return num
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

        step = 0 //для этапа разработки, если код зациклится

        {if ($('#x0').val() !== '') { x0 = Number($('#x0').val().replace(',', '.')) } else { x0 = '' } // проверка нужна для того,
        //чтобы Number() не превратила '' в 0.
        if ($('#x').val() !== '') { x = Number($('#x').val().replace(',', '.')) } else { x = '' }
        if ($('#v').val() !== '') { v = Number($('#v').val().replace(',', '.')) } else { v = '' }
        if ($('#v0').val() !== '') { v0 = Number($('#v0').val().replace(',', '.')) } else { v0 = '' }
        if ($('#a').val() !== '') { a = Number($('#a').val().replace(',', '.')) } else { a = '' }//потом в конце calculate наоборот
        if ($('#t').val() !== '') { t = Number($('#t').val().replace(',', '.')) } else { t = '' }
        if ($('#s').val() !== '') { s = Number($('#s').val().replace(',', '.')) } else { s = '' }
}

        while (counter !== 0, step < 10) {
            counter = 0
            // console.log('new iteration: counter =', counter)

            if ((x === '') && (x0 !== '')) { //не знаем х. х0 нужно во всех формулах
                console.log("if ((x === '') && (x0 !== '')) {")
                if ((v0 !== '') && (t !== '') && (a !== '')) { //считаем только если все значения есть
                    x = x0 + v0 * t + (a * t ** 2) / 2
                    counter += 1;
                    console.log("if (v0 && t && a) { x = x0 + v0 * t + (a * t ** 2) / 2")
                } else
                    if (s !== '') {
                        x = x0 + s
                        counter += 1;
                        console.log("if (s) {x = x0 + s")
                    }
            }

            if ((x0 === '') && (x !== '')) {
                if ((v0 !== '') && (t !== '') && (a !== '')) {
                    x0 = x - v0 * t - (a * t ** 2) / 2
                    counter += 1;
                    console.log("")
                } else
                    if (s !== '') {
                        x0 = x - s
                        counter += 1;
                        console.log("")
                    }
            }

            if ((v === '') && (a !== '') && (t !== '')) {
                if (v0 !== '') {
                    v = v0 + a * t
                    console.log('v = ', v)
                    counter += 1;
                } else
                    if ((x !== '') && (x0 !== '')) {
                        v = (x - x0 - (a * t ** 2) / 2) / t
                        counter += 1;
                    }
            }

            if ((v0 === '') && (v !== '') && (a !== '') && (t !== '')) {
                v0 = v - a * t
                counter += 1;
            }

            if ((a === '') && (v0 !== '') && (t !== '')) {
                if (v !== '') {
                    a = (v - v0) / t
                    counter += 1;
                } else
                    if ((x !== '') && (x0 !== '')) {
                        a = (2 * (x - x0 - v0 * t)) / t ** 2
                        counter += 1;
                    } else
                        if (s !== '') {
                            a = (2 * (s - v0 * t) / t ** 2)
                        }
            }

            if ((t === '') && (v !== '') && (v0 !== '')) {
                if (a !== '') {
                    t = (v - v0) / a
                }
                if (s !== '') {
                    t = 2 * s / (v - v0)
                }
                counter += 1;
            }

            if (s === '') {
                if ((x !== '') && (x0 !== '')) {
                    s = x - x0
                    counter += 1;
                } else
                    if ((v0 !== '') && (t !== '') && (a !== '')) {
                        s = v0 * t + (a * t ** 2) / 2
                    } else
                        if ((t !== '') && (a !== '')) {
                            s = a * t ** 2 / 2
                        }
            }

            step += 1
        }

        let Variables = {
            'x0': x0,
            'x': x,
            'v0': v0,
            'v': v,
            'a': a,
            't': t,
            's': s,
        }

        function final(str) {
            $('#' + str).val(myToFixed(Variables[str], 5))
            if (Variables[str] === '') {
                $(".not-enough-data-" + str).show()
                console.log('/')
            } else {
                $(".not-enough-data-" + str).hide()
                console.log('|')
            }
        }
        for (i in Variables) {
            final(i)
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

        $('#x0').val('')
        $('#x').val('')
        $('#v0').val('')
        $('#v').val('')
        $('#a').val('')
        $('#t').val('')
        $('#s').val('')

        // подстраиваем размеры инпутов при очистке
       inputResize()
    }
    $('#clear').click(function () {
        clear()
    })

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


