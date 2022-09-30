const Switchbot = require('node-switchbot');
const switchbot = new Switchbot();

switchbot.discover({ model: "H", quick: true })
    .then((device_list) => {
        return device_list[0].turnOn();
    }
    ).then(() => {
        console.log(device_list);
    });

