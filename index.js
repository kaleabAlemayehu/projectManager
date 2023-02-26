import keypress from "keypress";
import { display } from "./displayOptions.js";
import command from "./commands.js";
import { commandLists } from "./commandList.js";
let selectedIndex = 0;
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
const keyPressHandler = (ch, key) => {
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }
  switch (key.name) {
    case "up": {
      selectedIndex =
        selectedIndex > 0 ? selectedIndex - 1 : commandLists.length - 1;
      display(commandLists, selectedIndex);
      break;
    }
    case "down": {
      selectedIndex =
        selectedIndex < commandLists.length - 1 ? selectedIndex + 1 : 0;
      display(commandLists, selectedIndex);
      break;
    }

    case "return":
      command(commandLists, selectedIndex);
      break;

    default: {
      if (key.ctrl && key.name == "c") {
        console.clear();
      } else {
        console.log("move up, down or choose something", key);
      }
      break;
    }
  }
};
display(commandLists, selectedIndex);
// listen for the "keypress" event
process.stdin.on("keypress", keyPressHandler);
process.stdin.setRawMode(true);
process.stdin.resume();
