$(document).ready(function () {
    // for (elementName in periodicTable) {
        // $('.selectelement').append(`<option value="${elementName}">${elementName}</option>`);
    // }
    const calculate = function () {
        console.log('You pressed the calculating button')
        if ($('#Zbefore').val()) {
            for (i in periodicTable) {
                if (periodicTable[i]['Z'] == $('#Zbefore').val()) {
                    $('#elementbefore').text(i)
                    if ($('#Abefore').val() === '') { $('#Abefore').val(periodicTable[i]['A']) }
                    for (j in periodicTable) {
                        if (periodicTable[j]['Z'] == Number($('#Zbefore').val()) - 2) {
                            $('#elementafter').text(j)
                            $('#Aafter').val(Number($('#Abefore').val()) - 4)
                            $('#Zafter').val(Number($('#Zbefore').val()) - 2)
                        }
                    }
                }

            }
        } else
            if ($('#Zafter').val()) {
                for (i in periodicTable) {
                    if (periodicTable[i]['Z'] == $('#Zafter').val()) {
                        $('#elementafter').text(i)
                        if ($('#Aafter').val() === '') { $('#Aafter').val(periodicTable[i]['A']) }
                        for (j in periodicTable) {
                            if (periodicTable[j]['Z'] == Number($('#Zafter').val()) + 2) {
                                $('#elementbefore').text(j)
                                $('#Abefore').val(Number($('#Aafter').val()) + 4)
                                $('#Zbefore').val(Number($('#Zafter').val()) + 2)
                            }
                        }
                    }

                }
            }
        if (($('#elementafter').text() === '') | ($('#elementbefore').text() === '')) {
            $(".not-enough-data").show()
        } else { $(".not-enough-data").hide() }
    }
    $('#calculate').click(function () {
        calculate()
    })
    const clear = function () {
        console.log('you pressed the clear button')

        $(".not-enough-data").hide()

        $('#Zbefore').val('')
        $('#Abefore').val('')
        $('#Zafter').val('')
        $('#Aafter').val('')
        $('#elementbefore').text('')
        $('#elementafter').text('')
    }
    $('#clear').click(function () {
        clear()
    })
})