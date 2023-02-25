
module.exports = (options, selectedOptions) => {
    console.clear();
    options.forEach((opt, index) => {
        if(index == selectedOptions){
            console.log(`> ${opt}`)
        }else{
            console.log(`  ${opt}`);
        }
    });
}