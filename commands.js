import { spawn } from 'node:child_process';

const commandLists = [
    ['code' ,'/home/cipher/Documents/node/complete-node-bootcamp/4-natours/after-section-06'],
    ['code', '/home/cipher/Documents/auth-exlusive'],
    ['open', '.']
]
const executeCommand  = (index) => {
    const command = spawn(commandLists[index][0],[...(commandLists[index].slice(1))] )
    command.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    command.on('close', (code) => {
        if(code == 0){
            console.log('command excute successfully')
        }
    })
      
}
export default executeCommand;



