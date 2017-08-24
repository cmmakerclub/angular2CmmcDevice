import { Component } from '@angular/core';
import { MqttServiceOptions, MqttService } from 'ngx-mqtt';
var config = require('../config/config')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  MQTT_SERVICE_OPTIONS: MqttServiceOptions = {
    hostname: config.hostname,
    port: config.port,
    path: config.path
  };

  setConfig(config) {
    console.log(`set config`, config);
    // this.hostname = config.host;
    // this.port = config.port;
  }

}
