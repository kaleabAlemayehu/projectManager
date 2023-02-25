import chalk from 'chalk';
export default (options, selectedOptions) => {
    console.clear();
    options.forEach((opt, index) => {
        if(index == selectedOptions){
            console.log(`${chalk.bold.greenBright('>')} ${chalk.bold.greenBright(opt)}`);
        }else{
            console.log(`  ${chalk.green(opt)}`);
        }
    });
}