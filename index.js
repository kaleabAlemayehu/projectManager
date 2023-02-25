import keypress from 'keypress';
import {options} from './options.js';
import displayOptions from './displayOptions.js';
import command from './commands.js';
let selectedIndex = 0;
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
const keyPressHandler =  (ch, key) => {
  const length = options.length;
 
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
  switch (key.name) {
    case 'up':{
      selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : length  - 1;
      displayOptions(options, selectedIndex)
      break;
    }
    case 'down':{
      selectedIndex = selectedIndex < length - 1 ? selectedIndex + 1 : 0;
      displayOptions(options, selectedIndex)
      break;
    }

    case 'return':
       command(selectedIndex);
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