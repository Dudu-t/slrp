$(function () {
    $('body').addClass('bg-dark');

    $('form#login').submit(function () {
        var user = $('input#user').val();
        var pass = $('input#pass').val();
        if (user === "" || pass === ""){
            if (user === ""){
                $('input#user').addClass('is-invalid');

            }
            else{
                $('input#user').removeClass('is-invalid');
            }
            if (pass === ""){
                $('input#pass').addClass('is-invalid');
            }
            else{
                $('input#pass').removeClass('is-invalid');
            }
        }
        else {
            $.ajax({
                method: "POST",
                url: "www/lib/php/consultSystem.php",
                data: {username: user, password: pass},
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

                }
            });
        }

        return false;
    });
});