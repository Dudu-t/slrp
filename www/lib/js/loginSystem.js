$(function () {
    $('body').addClass('bg-dark');

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
            $.ajax({
                method: "POST",
                url: "www/lib/php/consultSystem.php",
                data: {username: user, password: pass,  token: tokenKey},
                dataType: "json"
            }).done(function (e) {
                if (e.autenticado === 1){
                    $('div.container').toggle({
                        effect: "slide",
                        direction: "left",
                        complete: function () {
                            $.ajax('www/templates/sufee_admin/html/home.html').done(function (data) {
                                $('div#conteudo').html(data);
                            });
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
                    $('div#retorno').html('<div class="sufee-alert alert with-close alert-danger alert-dismissible"> Seu usuário e/ou senha não foram autenticados.<br /> Tente novamente.<button type="button" class="close" data-dismiss="alert"aria-label="Close"> <span aria-hidden="true">×</span></button></div>');


                }
            });
        }

        return false;
    });
});