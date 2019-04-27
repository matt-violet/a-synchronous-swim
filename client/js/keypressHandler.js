$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    console.log(arrowPress);
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

var $button = $('#swim');
$button.on('click', () => {console.log('click'); getRandomCommand()})



console.log('Client is running in the browser!');
