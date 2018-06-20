$(function () {
    $('body').addClass('bg-dark');
    var erro = 0;
    var tempo = 0;

    $('form#login').submit(function () {
        var user = $('input#user').val();
        var pass = $('input#pass').val();
        var tokenKey = $('input#token').val();

        if (user === "" || pass === ""){
            $('div#loginBlock').addClass("border-danger");
            $('div#retorno').html('<div class="sufee-alert alert with-close alert-danger alert-dismissible">Preencha todos os campos.<button type="button" class="close" data-dismiss="alert"aria-label="Close"> <span aria-hidden="true">×</span></button></div>');
            if (user === ""){
                $('input#user').addClass('is-invalid');
                $('div.container').effect("shake");
                $('div#iconeUser').addClass("border-danger");

            }
            else{
                $('input#user').removeClass('is-invalid');
                $('div#iconeUser').removeClass("border-danger");


            }
            if (pass === ""){
                $('input#pass').addClass('is-invalid');
                $('div.container').effect("shake");
                $('div#iconePass').addClass("border-danger");
            }
            else{
                $('input#pass').removeClass('is-invalid');
                $('div#iconePass').removeClass("border-danger");

            }
        }
        else {
            $('div#loginBlock').removeClass("border-danger");

            if (erro < 3 && $.cookie('tempo') == 0){
                $.ajax({
                    method: "POST",
                    url: "www/lib/php/consultSystem.php",
                    data: {username: user, password: pass, token: tokenKey},
                    dataType: "json"
                }).done(function (e) {
                    if (e.autenticado === 1) {
                        $.removeCookie('tempo');
                        $('div.container').toggle({
                            effect: "slide",
                            direction: "left",
                            complete: function () {
                                $.ajax('www/templates/sufee_admin/html/home.html').done(function (data) {
                                    $('div#conteudo').html(data);
                                });
                            }
                        });
                        erro = 0;
                    }
                    else {
                        $('div.container').effect("shake");
                        $('div#loginBlock').addClass("border-danger");
                        $('input#pass').addClass("is-invalid");
                        $('input#user').addClass("is-invalid");
                        $('div#iconePass').addClass("border-danger");
                        $('div#iconeUser').addClass("border-danger");
                        $('div#retorno').html('<div class="sufee-alert alert with-close alert-danger alert-dismissible"> Seu usuário e/ou senha não foram autenticados.<br /> Tente novamente.<button type="button" class="close" data-dismiss="alert"aria-label="Close"> <span aria-hidden="true">×</span></button></div>');
                        erro ++;

                    }
                });
            }
            else{
                $('div.container').effect("shake");
                $('div#loginBlock').addClass("border-danger");
                $('input#pass').addClass("is-invalid");
                $('input#user').addClass("is-invalid");
                $('div#iconePass').addClass("border-danger");
                $('div#iconeUser').addClass("border-danger");
                if (tempo == 0) {
                    var cookie = $.cookie('tempo');
                    if (cookie > 0){

                        tempo = cookie;
                    }
                    else {
                        tempo += 10;
                    }
                    var temp = setInterval(function () {
                        tempo--;
                        $.cookie('tempo', tempo);
                        if (tempo == 0) {
                            clearInterval(temp);
                            erro = 0;
                            setTimeout(function () {
                                $('div#retorno').html('');
                            },1000);
                        }
                        $('div#retorno').html('<div class="sufee-alert alert with-close alert-danger alert-dismissible"> Você errou a senha várias vezes aguarde ' + tempo + ' segundos.<br /> Aguarde...<button type="button" class="close" data-dismiss="alert"aria-label="Close"> <span aria-hidden="true">×</span></button></div>');

                    }, 1000);
                }
                else{
                    tempo += 10;
                }

            }
        }
        return false;
    });
});