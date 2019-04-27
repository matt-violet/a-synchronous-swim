const serverUrl = 'http://127.0.0.1:3000';

// on keydown, send AJAX http request
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    console.log(arrowPress);
    var direction = arrowPress[1];
    // $.ajax({
    //   type: 'GET',
    //   // data: direction,
    //   url: serverUrl,
    //   success: (e) => {
        SwimTeam.move(direction.toLowerCase());
      }
    });
  // }
// });

var $button = $('#swim');

// on button click, send AJAX http request
$button.on('click', (e) => { 
  $.ajax({
    type: 'GET',
    // data: direction,
    url: serverUrl,
    success: (e) => {
      SwimTeam.move(e);
    }
  });
});

console.log('Client is running in the browser!');
