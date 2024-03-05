$(document).ready(function() {
    if (counter%2 == 1) { $('#menu').hide() }
    
    $('#menubutton').click(function() {
        console.log('you pressed the button')

        if (counter%2 == 0) {
            $('#menu').hide()
            $("#work").show()
            $('header').show()

            $('body').css({'background': '#FAF6EB'})
            $('#svgbutton').css({'background': '#FAF6EB', 'fill': '#1F3439'})
            
            console.log('work, header - show; menu - hide')
        } else {
            $('#menu').show()
            $("#work").hide()
            $('header').hide()

            $('body').css({'background': '#1F3439'})
            $('#svgbutton').css({'background': '#1F3439', 'fill': '#FAF6EB'})

            console.log('work, header - hide; menu - show')
        }
        counter += 1
    })
})