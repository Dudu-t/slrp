$(function () {
    $.ajax('www/templates/sufee_admin/html/feed.html').done(function (data) {
        $('div#content').html(data);
        $('li.itens').removeClass('active');
        $('li#feedLi').addClass('active');
    });
    function markClick(idLi, idA, nameFile){
        $('a'+idA).click(function () {
            $.ajax('www/templates/sufee_admin/html/' + nameFile + '.html').done(function (data) {
                $('div#content').toggle({
                    effect: "slide",
                    direction: "left",
                    complete: function () {
                        $('div#content').html(data);
                        $(this).toggle({
                            effect: "slide",
                            direction: "right",
                        });

                    }
                });

                $('li.itens').removeClass('active');
                $('li' + idLi).addClass('active');
            });
        });
    }

    markClick('#meuPersonagemLi', '#meuPersonagemA', 'personagens');
    markClick('#feedLi', '#feedA', 'feed');


});