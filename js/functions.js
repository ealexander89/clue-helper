var $options = [
  'Sin descubrir',
  'En la mesa',
  'En mi mano',
  'Descubierto!'
];

var $players = [
  'Alex',
  'Janet',
  'Jeni',
  'Julio',
  'Irmita',
  'Marlon',
  'Nani',
  'Pablo'
];

var $suspects = [
  'Entrenador Mostaza',
  'Profesor Moradillo',
  'Sr. Verdi',
  'Sra. Azulino',
  'Srita. Escarlata',
  'Sra. Blanco'
];

var $arms = [
  'Cuchillo',
  'Candelabro',
  'Pistola',
  'Veneno',
  'Trofeo',
  'Cuerda',
  'Bate',
  'Hacha',
  'Pesas'
];

var $rooms = [
  'Vestibulo',
  'Comedor',
  'Cocina',
  'Patio',
  'Observatorio',
  'Teatro',
  'Sala',
  'Spa',
  'Habitacion de huéspedes'
]

function fillTabs() {
  setTab('#tab-content1', $suspects);
  setTab('#tab-content2', $arms);
  setTab('#tab-content3', $rooms);

  $('.button-sospecha').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.tabs-content ul li .options select').on('change', function() {
    $value = $(this).val();

    if($value != 'Sin descubrir') {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}
function setTab($tab, $array) {
  $array.forEach(function($item, $index) {
    $html = '<li>';
    $html += '<label>' + $item + '</label>';
    $html += '<div class="options">';
    $html += '<select>';

    $options.forEach(function($option, $index) {
      $html += '<option>';
      $html += $option
      $html += '</option>';
    });

    $html += '<optgroup label="----------------------------------">';
    $players.forEach(function($player, $index) {
      $html += '<option>';
      $html += $player
      $html += '</option>';
    });
    $html += '</optgroup>';
    $html += '</select>';

    $html += '<button class="button-sospecha">?</button>';
    $html += '</div';
    $html += '</li>';

    $('ul', $tab).append($html);
  })
}

function refreshContent() {
  if (confirm("¿Realmente quieres resetear?") == true) {
    $('#tab-content1 ul').html('');
    $('#tab-content2 ul').html('');
    $('#tab-content3 ul').html('');
    fillTabs();
  }
}

$(document).ready(function() {
  fillTabs();

  $('#tabs .tab').click(function() {
    $index = $(this).index();
    console.log($index);
    $('#tabs .tab').removeClass('active');
    $(this).addClass('active');

    $('.tabs-content').removeClass('active');
    $('.tabs-content').eq($index).addClass('active');


  })
})
