$.ajax('www/templates/sufee_admin/html/home.html').done(function (data) {
    $.ajax({
        method: "POST",
        url: "www/lib/php/consultSystem.php",
        data: {tokenRequest: 1},
        dataType: "json"
    }).done(function (e) {
        console.log(e);
        $('input#token').val(e.tokenAuth);
        $('div#conteudo').html(data);
    });

});

