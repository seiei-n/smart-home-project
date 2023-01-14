import noble from "@abandonware/noble";


var DEVICE_NAME = "ESP32_SMART_LOCK";
var SERVICE_UUID = "33f9bdbe-bb12-4aa1-afb7-f18dfa160f2c";
var SERVICE_CHARACTERISTIC_UUID = "6a0d9053-4291-4f19-ba6f-03175f331233";



//start ble
noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

//search ble
noble.on('discover', function(peripheral) {
    //output seach device
    console.log("DEVICE_NAME: " + peripheral.advertisement.localName);
    console.log("UUID: " + peripheral.uuid);
    console.log("RSSI: " + peripheral.rssi);
    console.log();

    //equals devicename
    if(peripheral.advertisement.localName == DEVICE_NAME){
        console.log("find");
        noble.stopScanning();

        //connect
        peripheral.connect(function(error){
          console.log("connect");

          //find service
          peripheral.discoverServices(SERVICE_UUID, function(error, services) {
            var deviceInformationService = services[0];

            //find CharacteristicService
            deviceInformationService.discoverCharacteristics(SERVICE_CHARACTERISTIC_UUID, function(error, characteristics) {

              //get notify data
              characteristics[0].on('data', function(data, isNotification) {
                var result = "";
                for(var i=0; i<data.length; i++){
                  result += data[i] + ',';
                }
                console.log(result);
              });

              //これすごく重要
              characteristics[0].subscribe(function(error) {
                console.log('notify');
              });

            });
          });
        });
        //切断処理
        peripheral.disconnect(function(error){
          console.log("disconnected from peripheral");
          console.log("Start Scaning");
          noble.startScanning();
        });
    }
});