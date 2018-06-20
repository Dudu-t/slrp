
$(function () {
    $.ajax('www/templates/sufee_admin/html/feed.html').done(function (data) {
        $('div#content').html(data);
        $('li.itens').removeClass('active');
        $('li#feedLi').addClass('active');
    });
    var paginaAtual = "";
    function markClick(idLi, idA, nameFile){
           $('a' + idA).click(function () {
               if (paginaAtual !== nameFile) { //Esta condição evita sobrecarga de requisições
                  // console.log(paginaAtual+ " "+ nameFile);
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
               }
               paginaAtual = nameFile;
           });




    }
    markClick('#meuPersonagemLi', '#meuPersonagemA', 'personagens');
    markClick('#feedLi', '#feedA', 'feed');


});