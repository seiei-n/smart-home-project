const Switchbot = require('node-switchbot');
const switchbot = new Switchbot();
const device = switchbot.discover({id: process.env.SWITCHBOT_ID});


device.on('press', () => {
    console.log('pressed');
    }
);

device.off('press', () => {
    console.log('released');
    }
);

