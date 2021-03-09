const { spawn } = require('child_process');
var axios = require('axios');
const { exit } = require('process');

const subprocess = spawn(process.argv[0], ['./bin/www'], {
    detached: true,
    stdio: 'inherit'
});

subprocess.unref();

var failCounter = 0;

setInterval(async function () {
    try {
        await axios.get('http://localhost:3000/', {
            timeout: 1000
        });
        failCounter = 0;
        console.log("alive")
    } catch {
        console.log("dead")
        if (failCounter >= 3) {
            exit(1);
        }
        failCounter += 1;
    }
}, 5000);
