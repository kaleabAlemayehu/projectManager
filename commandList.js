class Task {
  constructor(prompt, command) {
    this.prompt = prompt;
    this.command = command;
  }
}
export const commandLists = [
  new Task("Open File Manager", ["open", "."]),
  new Task("Firefox", ["firefox"]),
  new Task("Chrome", ["google-chrome"]),
  new Task("project: Nodejs Course", [
    "code",
    "/home/cipher/Documents/node/complete-node-bootcamp/4-natours/after-section-06",
  ]),
  new Task("Nerd: Project Nerds", [
    "code",
    "/home/cipher/Documents/auth-exlusive",
  ]),
];
