var tokenKey = $('input#token').val();
$.ajax({
    method: "POST",
    url: "www/lib/php/consultSystem.php",
    data: {getPerson: 1, token: tokenKey},
    dataType: "json"
}).done(function (e) {
    console.log();
    var html = "";
    var i = 0;
    jQuery.each(e, function () {
        html += '<div class="col-md-4 mt-4 mx-auto">';
        html += '<div class="card shadow" style="padding-top: 20px;">';
        html += '<div class="card-body">';
        html += '<div class="mx-auto d-block">';
        html += '<img class="rounded-circle mx-auto d-block mt-2" src="www/galeria/avatar/'+this.Model+'.png" alt="Card image cap">';
        html += '<h5 class="text-sm-center mt-2 mb-1">'+this.Character.replace('_', " ")+'</h5>\n';
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
        var idPerson = $(this).attr('id');
        $('div#content').toggle({
            effect: "slide",
            direction: "up",
            complete: function () {

                $('div.conteudoS').html('<div class="col-lg-6">\n' +
                    '                    <div class="card">\n' +
                    '                        <div class="card-header">\n' +
                    '                            <strong class="card-title">Credit Card</strong>\n' +
                    '                        </div>\n' +
                    '                        <div class="card-body">\n' +
                    '                          <!-- Credit Card -->\n' +
                    '                          <div id="pay-invoice">\n' +
                    '                              <div class="card-body">\n' +
                    '                                  <div class="card-title">\n' +
                    '                                      <h3 class="text-center">Pay Invoice</h3>\n' +
                    '                                  </div>\n' +
                    '                                  <hr>\n' +
                    '                                  <form action="" method="post" novalidate="novalidate">\n' +
                    '                                      <div class="form-group text-center">\n' +
                    '                                          <ul class="list-inline">\n' +
                    '                                              <li class="list-inline-item"><i class="text-muted fa fa-cc-visa fa-2x"></i></li>\n' +
                    '                                              <li class="list-inline-item"><i class="fa fa-cc-mastercard fa-2x"></i></li>\n' +
                    '                                              <li class="list-inline-item"><i class="fa fa-cc-amex fa-2x"></i></li>\n' +
                    '                                              <li class="list-inline-item"><i class="fa fa-cc-discover fa-2x"></i></li>\n' +
                    '                                          </ul>\n' +
                    '                                      </div>\n' +
                    '                                      <div class="form-group">\n' +
                    '                                          <label for="cc-payment" class="control-label mb-1">Payment amount</label>\n' +
                    '                                          <input id="cc-pament" name="cc-payment" type="text" class="form-control" aria-required="true" aria-invalid="false" value="100.00">\n' +
                    '                                      </div>\n' +
                    '                                      <div class="form-group has-success">\n' +
                    '                                          <label for="cc-name" class="control-label mb-1">Name on card</label>\n' +
                    '                                          <input id="cc-name" name="cc-name" type="text" class="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error">\n' +
                    '                                          <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>\n' +
                    '                                      </div>\n' +
                    '                                      <div class="form-group">\n' +
                    '                                          <label for="cc-number" class="control-label mb-1">Card number</label>\n' +
                    '                                          <input id="cc-number" name="cc-number" type="tel" class="form-control cc-number identified visa" value="" data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autocomplete="cc-number">\n' +
                    '                                          <span class="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>\n' +
                    '                                      </div>\n' +
                    '                                      <div class="row">\n' +
                    '                                          <div class="col-6">\n' +
                    '                                              <div class="form-group">\n' +
                    '                                                  <label for="cc-exp" class="control-label mb-1">Expiration</label>\n' +
                    '                                                  <input id="cc-exp" name="cc-exp" type="tel" class="form-control cc-exp" value="" data-val="true" data-val-required="Please enter the card expiration" data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" autocomplete="cc-exp">\n' +
                    '                                                  <span class="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>\n' +
                    '                                              </div>\n' +
                    '                                          </div>\n' +
                    '                                          <div class="col-6">\n' +
                    '                                              <label for="x_card_code" class="control-label mb-1">Security code</label>\n' +
                    '                                              <div class="input-group">\n' +
                    '                                                  <input id="x_card_code" name="x_card_code" type="tel" class="form-control cc-cvc" value="" data-val="true" data-val-required="Please enter the security code" data-val-cc-cvc="Please enter a valid security code" autocomplete="off">\n' +
                    '                                                  <div class="input-group-addon">\n' +
                    '                                                      <span class="fa fa-question-circle fa-lg" data-toggle="popover" data-container="body" data-html="true" data-title="Security Code" data-content="<div class=\'text-center one-card\'>The 3 digit code on back of the card..<div class=\'visa-mc-cvc-preview\'></div></div>" data-trigger="hover"></span>\n' +
                    '                                                  </div>\n' +
                    '                                              </div>\n' +
                    '                                          </div>\n' +
                    '                                      </div>\n' +
                    '                                      <div>\n' +
                    '                                          <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block">\n' +
                    '                                              <i class="fa fa-lock fa-lg"></i>&nbsp;\n' +
                    '                                              <span id="payment-button-amount">Pay $100.00</span>\n' +
                    '                                              <span id="payment-button-sending" style="display:none;">Sending…</span>\n' +
                    '                                          </button>\n' +
                    '                                      </div>\n' +
                    '                                  </form>\n' +
                    '                              </div>\n' +
                    '                          </div>\n' +
                    '\n' +
                    '                        </div>\n' +
                    '                    </div> <!-- .card -->\n' +
                    '\n' +
                    '                  </div>');
                $('div#content').toggle({
                    effect: "slide",
                    direction: "down"
                });
            }

        });
    });
}).fail(function () {
    alert('erro');
});


