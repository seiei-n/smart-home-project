
import { Switchbot } from './node_modules/switchbot/lib/switchbot';
export const switchbot = new Switchbot();
export const turnOn =  function () {

  switchbot
  .discover({id: process.env.SWITCHBOT_ID})
  .then((device_list) => {
    device = device_list[0];
    console.log(device);
    return device.connect();
  }).then(() => {
    return device.turnOn();
  }
  ).then(() => {
    return device.disconnect();
  }
  ).then(() => {
    process.exit(0);
  }
  )
}

export const turnOff = function () {
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

  );
}
