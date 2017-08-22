import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-data',
  templateUrl: './config-data.component.html',
  styleUrls: ['./config-data.component.css']
})
export class ConfigDataComponent implements OnInit {
  @Output() CancleClick: EventEmitter<any> = new EventEmitter();
  @Output() saveClick: EventEmitter<any> = new EventEmitter();

  clientCHK: boolean = false;
  userPassword: boolean = false;

  host: string = 'q.cmmc.io';
  port: number = 9001;
  prefix: string = 'CMMC';
  username: string = '';
  password: string = '';
  clientId: string = 'devicesWs-' + (Math.random() * 1000).toFixed(2);

  constructor(private router: Router) { }

  ngOnInit() {
    this.onSubmit();
  }

  btnCancleClick() {
    this.CancleClick.emit();
  }

  onSubmit() {
    const config: object = {
      host: this.host,
      port: this.port,
      prefix: this.prefix,
      username: this.username,
      password: this.password,
      clientId: this.clientId
    };

    // this.saveClick.emit(config);
    console.log(`port = ${ this.port }
                prefix = ${ this.prefix }
                username= ${ this.username }
                password = ${ this.password }
                clientId = ${ this.clientId }
                `);
  }

}
