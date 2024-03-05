$(document).ready(function () {
    const isBigger = function (Z, A) {
        if ((Z !== '') & (A !== '')) {
            console.log('Number(Z) > Number(A)    ', Number(Z) > Number(A))
            return ( Number(Z) > Number(A) )
        } else {
            return false
        }
    }
    const calculate = function () {
        console.log('You pressed the calculating button')
        if ($('#Zbefore').val()) {
            for (i in periodicTable) {
                if (periodicTable[i]['Z'] == $('#Zbefore').val()) {
                    $('#elementbefore').text(i)
                    if ($('#Abefore').val() === '') { $('#Abefore').val(periodicTable[i]['A']) }
                    for (j in periodicTable) {
                        if (periodicTable[j]['Z'] == Number($('#Zbefore').val()) + 1) {
                            $('#elementafter').text(j)
                            $('#Aafter').val($('#Abefore').val())
                            $('#Zafter').val(Number($('#Zbefore').val()) + 1)
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
                            if (periodicTable[j]['Z'] == Number($('#Zafter').val()) - 1) {
                                $('#elementbefore').text(j)
                                $('#Abefore').val($('#Aafter').val())
                                $('#Zbefore').val(Number($('#Zafter').val()) - 1)
                            }
                        }
                    }

                }
            }
        if (($('#elementafter').text() === '') | ($('#elementbefore').text() === '')) {
            $(".not-enough-data").show()
        } else { $(".not-enough-data").hide() }

        if ( ($('#Abefore').val() === '1') & ($('#Zbefore').val() === '1') ) {// если водород-1, то не может быть бета-распада
            $(".H-1").show()
        } else { 
            $(".H-1").hide() 
            if (isBigger($('#Zbefore').val(), $('#Abefore').val()) | isBigger($('#Zafter').val(), $('#Aafter').val())) {
                $(".Z-bigger-A").show()// зарядовое число не может быть больше, чем массовое
                console.log('$(".Z-bigger-A").show()')
        } else { console.log('$(".Z-bigger-A").hide()'); $(".Z-bigger-A").hide() }}


    }
    $('#calculate').click(function () {
        calculate()
    })
    const clear = function () {
        console.log('you pressed the clear button')

        $(".not-enough-data").hide()
        $(".H-1").hide()
        $(".Z-bigger-A").hide()

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