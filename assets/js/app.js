$(document).ready(function() {

  $('button').on('click', function() {
    $(this).removeClass('pulse');

    var gridSize = prompt("Enter grid size (max of 64)", "16");
    if (gridSize > 15 && gridSize <= 64) {
      // $('#draw').empty();
      for (var i = 0; i < gridSize; i++) {
        $('#draw').append('<div class="etch-row"></div>');
      };
      for (var x = 0; x < gridSize; x++) {
        $('.etch-row').append('<div class="etch-boxes"></div>');
      };
      $('.etch-row').height(600 / gridSize);
      $('.etch-boxes').height(600 / gridSize);
      $('.etch-boxes').width(600 / gridSize);
    } else {
      alert('Please pick a number from 16-64');
    }

    if (!document.getElementById('erase')) {
      $(this).text('Redraw');
      // $('#nav-mobile').append('<button id="erase">Erase</button>');
      $('#nav-mobile').append('<button id="clear">Clear</button>')
    };

    // $('#erase').on('click', function() {
    //     $('div').on('mouseenter', '.etch-boxes', function() {
    //       $(this).css('background-color', '#ee6e73');
    //     });
    // });

    $('#clear').on('click', function() {
      $('.etch-boxes').css('background-color', '#ee6e73');
    });
    $('')
  });

  $('div').on('mouseenter', '.etch-boxes', function() {
    $(this).css('background-color', 'black');
  });


});
