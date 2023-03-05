// local module

const { add } = require('./other.js')

const http = require('http');
const fs = require('fs');

// console.log(fs);

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        // fs.readFile('data.txt', (err, data) => {
        //     if (err) {
        //         // console.log(err);
        //         res.write('Failed to read Data !!!')
        //         res.end()
        //     } else {
        //         res.write(data)
        //         res.end()
        //     }
        // })

        // const data = fs.readFileSync('data.txt')
        // res.write(data)
        // res.end()

        fs.writeFile('newData.txt', 'Hello Node JS !!!!', (err) => {
            if (err) {
                res.write('Data failed to write')
                res.end()
            } else {
                res.write('Data written successfully!')
                res.end()
            }
        })
    }
});

const PORT = 5000;
server.listen(PORT)
console.log(`Server is running at : ${PORT}`);



const events = require('events')
// console.log(events);
const eventEmitter = new events.EventEmitter();

// creating an envent
const newEktaEvent = () => {
    console.log("Dekho eita ekta notun Event !!!")
}

// assing the event handler to event emitter

eventEmitter.on('tipo', newEktaEvent).newEktaEvent

// firing the event via event emiiter

eventEmitter.emit('tipo');