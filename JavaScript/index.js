$(document).ready(function() {
    if (counter%2 == 1) { $('#menu').hide() }
    $('footer').html('<p><span class="top">© Мосолова Т.А., Андреева Е.А., 2024. All rights reserved.        <a href="https://github.com/Luca324/PhysicsSiteCalculator">            <img src="img/github-mark-white.svg"><span>        github</span>        </a>    </span>    </p><p> Этот сайт создан в учебных целях и предназначен для свободного некоммерческого использования. Вы можете        использовать код, дизайн и контент сайта при условии сохранения авторства. Коммерческое использование сайта без        разрешения владельца запрещено.</p>')

    
    
    $('#menubutton').click(function() {

        if (counter%2 == 0) {
            $('#menu').hide()
            $("#work").show()
            $('header').show()

            $('body').css({'background': '#FAF6EB'})
        } else {
            $('#menu').show()
            $("#work").hide()
            $('header').hide()

            $('body').css({'background': '#1F3439'})
        }

        if (counter != 1) {
            $('#inner').toggleClass('disactive')
        }
        $('#inner').toggleClass('active');

        counter += 1
    })
})