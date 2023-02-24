const  keypress = require('keypress');
const options = require('./options');
const displayOptions = require('./displayOptions');
let selectedIndex = 0;
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
const keyPressHandler =  (ch, key) => {
 
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
  switch (key.name) {
    case 'up':{
      selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : options.length  - 1;
      displayOptions(options, selectedIndex)
      break;
    }
    case 'down':{
      selectedIndex = selectedIndex < options.length - 1 ? selectedIndex + 1 : 0;
      displayOptions(options, selectedIndex)
      break;
    }

    case 'return':
      console.log('conformint choice selected index is : ', selectedIndex);
      break;
  
    default:{
      if(key.ctrl && key.name == 'c'){
        console.clear();
        console.log('the program exited')
      }else{
        console.log('move up, down or choose something', key);
        
      }
      break;
    }
  }
}
displayOptions(options, selectedIndex);
// listen for the "keypress" event
process.stdin.on('keypress', keyPressHandler);
process.stdin.setRawMode(true);
process.stdin.resume();