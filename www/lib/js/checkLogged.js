$.ajax({
    method: "POST",
    url: "www/lib/php/consultSystem.php",
    data: {requestAccount: 1},
    dataType: "json"
}).done(function (e) {
    console.log(e.accountLogged);
    if (e.accountLogged === 0){
        $.ajax('www/templates/sufee_admin/html/page-login.html').done(function (data) {
            $('div#conteudo').html(data);
        });
    }
});
