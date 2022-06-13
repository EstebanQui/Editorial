var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Bonjour !',
  'l\’hyper-connectivité permet de rester en contact, se tenir informé et partager de l’information, mais cela sollicite sans cesse notre attention. À cause de ce surplus d\’informations, vos capacités cognitives en sont diminuées. C\’est-à-dire vos capacités à vous concentrer, à acquérir des connaissances, à s\'adapter et à interagir avec les autres.',
  'Oui cela prend plusieurs formes ;-Elle nuit à notre qualité et à la quantité de sommeil, car notre cerveau a besoin d\’une phase de repos alors que à cause des écrans, ce dernier est sursollicité.-Elle favorise une baisse de notre activité physique, plus de temps passer sur les écrans, c\’est moins de temps à bouger et à faire du sport. - Elle nous expose à la lumière bleue, qui est dangereuse pour notre vision. Car une exposition prolongée peut provoquait des lésions au niveau de la rétine et du cristallin. Cette lumière est aussi suspectée de favoriser la cataracte précoce.',
  'Oui malheureusement, les risques de cette surcharge d’information peuvent amener une perte de concentration, du stress, un épuisement mental voire une dépression.',
  'Je vous invite à regarder cette vidéo ci-dessous ⬇️⬇️⬇️'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="images/profil_chat_picture.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="images/profil_chat_picture.svg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}