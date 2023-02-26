import chalk from "chalk";

export const display = (commandLists, selectedOptions) => {
  console.clear();
  commandLists.forEach((opt, index) => {
    if (index == selectedOptions) {
      console.log(
        `${chalk.bold.greenBright(">")} ${chalk.bold.greenBright(opt.prompt)}`
      );
    } else {
      console.log(`  ${chalk.green(opt.prompt)}`);
    }
  });
};
