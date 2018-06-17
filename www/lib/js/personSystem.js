var tokenKey = $('input#token').val();
$.ajax({
    method: "POST",
    url: "www/lib/php/consultSystem.php",
    data: {getPerson: 1, token: tokenKey},

}).done(function (e) {
    console.log(e);
}).fail(function () {
    alert('erro');
});


