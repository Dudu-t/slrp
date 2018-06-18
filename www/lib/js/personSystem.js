var tokenKey = $('input#token').val();
$.ajax({
    method: "POST",
    url: "www/lib/php/consultSystem.php",
    data: {getPerson: 1, token: tokenKey},
    dataType: "json"
}).done(function (e) {
   console.log();
   jQuery.each(e, function () {
       console.log(this);
   });
}).fail(function () {
    alert('erro');
});


