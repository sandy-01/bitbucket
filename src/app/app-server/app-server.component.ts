import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './app-server.component.html',
  styles: [`.online {color: white;}`]
})
export class AppServerComponent implements OnInit {
 serverID: number = 10;
 serverStatus: string = "offline";
 serverName: "sever is not created";
 userName ='testcase';
 severcreated = false;

 allowNewServer = true;
  
 getServerStatus(){
   return this.serverStatus;
 }

 getColor(){
  return this.serverStatus === 'online' ? 'green' : 'red';
}

 OnCreateServer(){
   this.severcreated = true;
 }
  constructor() {
     this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
   }


  ngOnInit() {
  }  

}
  