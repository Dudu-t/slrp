var tokenKey = $('input#token').val();
$.ajax({
    method: "POST",
    url: "www/lib/php/consultSystem.php",
    data: {getPerson: 1, token: tokenKey},
    dataType: "json"
}).done(function (playerData) {
    console.log(playerData);
    var html = "";
    var i = 0;
    jQuery.each(playerData, function () {
        html += '<div class="col-md-4 mt-4 mx-auto">';
        html += '<div class="card shadow" style="padding-top: 20px;">';
        html += '<div class="card-body">';
        html += '<div class="mx-auto d-block">';
        html += '<img class="rounded-circle mx-auto d-block mt-2" src="www/galeria/avatar/'+this.Model+'.png" alt="Card image cap">';
        html += '<h5 class="text-sm-center mt-2 mb-1">'+this.Character.replace('_', " ")+'</h5>';
        html += '<div class="location text-sm-center mt-2 mb-5"><i class="fa fa-map-marker"></i> '+this.Origin+' </div>';
        html += '</div>';
        html += '<hr>';
        html += '<div class="card-text text-sm-center">';
        html += '<button class="persons btn btn btn-primary col-sm-12" id="'+i+'"><i class="fa fa-eye"></i> Visualizar</button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        i++;
    });
    $('div#showPersons').html(html);
    //$('#content').show();
    $('button.persons').click(function () {
        var playerid = $(this).attr('id');
        $('div#content').toggle({
            effect: "slide",
            direction: "up",
            complete: function () {
                $.ajax('www/templates/sufee_admin/html/viewPerson.html').done(function (ht) {
                    $('div.content').html(ht);
                    $('div#content').toggle({
                        effect: "slide",
                        direction: "down"
                    });
                    $(function () { //Processamento do model

                        $('img#skin').prop("src", "www/galeria/skins/"+playerData[playerid].Model+".png");
                        $('#charName').html(playerData[playerid].Character.replace('_', ' '));
                        $('#origin').html(playerData[playerid].Origin);
                        $('#playingHours').html(playerData[playerid].PlayingHours+ " Horas");
                        $('#level').html(playerData[playerid].Level);
                        $('#xp').html(playerData[playerid].Exp+" XP");
                        $('#valCarLic').html(playerData[playerid].CarLic.replace(0, 'Não Possui').replace(1, 'Possui'));
                        $('#valWepLic').html(playerData[playerid].WepLic.replace(0, 'Não Possui').replace(1, 'Possui'));

                        $('#paycheck').html("US$ " + playerData[playerid].PayCheck);
                        $('#Cash').html("US$ " + playerData[playerid].Cash);
                        $('#bankaccount').html("US$ " + playerData[playerid].BankAccount);
                        $('#savings').html("US$ " + playerData[playerid].Savings);


                        if (playerData[playerid].CarLic == 0) {
                            $('#carlic').addClass('border-danger');
                            $('#iconCarLic').addClass('text-danger').addClass('ti-close').addClass('border-danger');
                        }
                        else {
                            $('#carlic').addClass('border-success');
                            $('#iconCarLic').addClass('text-success').addClass('ti-check').addClass('border-success');
                        }
                        if (playerData[playerid].WepLic == 0) {
                            $('#weaponlic').addClass('border-danger');
                            $('#iconWeaponLic').addClass('text-danger').addClass('ti-close').addClass('border-danger');
                        }
                        else {
                            $('#weaponlic').addClass('border-success');
                            $('#iconWeaponLic').addClass('text-success').addClass('ti-check').addClass('border-success');
                        }
                        $('button.voltar').click(function () {
                            $('div#content').toggle({
                                effect: "slide",
                                direction: "down",
                                complete: function () {
                                    $.ajax('www/templates/sufee_admin/html/personagens.html').done(function (respond) {
                                        $('div.content').html(respond);
                                    });
                                    $('div#content').toggle({
                                        effect: "slide",
                                        direction: "up"
                                    });
                                }

                            });

                        });
                    });

                });

                //js system


            }

        });
    });
}).fail(function () {
    alert('erro');
});


