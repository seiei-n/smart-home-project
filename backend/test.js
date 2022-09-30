const Switchbot = require('node-switchbot');
const switchbot = new Switchbot();
switchbot
  .discover({id: process.env.SWITCHBOT_ID})
  .then((device_list) => {
    device = device_list[0];
    console.log(device);
    return device.connect(); 
  }).then(() => {
    return device.turnOff();
  }
  ).then(() => {
    return device.disconnect();
  }
  ).then(() => {
    process.exit(0);
  }
  ).catch((err) => {
    console.log(err);
    process.exit(1);
  }
  );

  