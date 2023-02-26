import { spawn } from "node:child_process";
const executeCommand = (commandLists, index) => {
  const command = spawn(commandLists[index].command[0], [
    ...commandLists[index].command.slice(1),
  ]);
  command.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
  command.on("close", (code) => {
    if (code == 0) {
      console.log("command execute successfully");
    }
  });
};
export default executeCommand;
