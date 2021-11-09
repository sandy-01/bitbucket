import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{pid:101,post:"This is the post of literature,how important the awarenees of languages in our day to life.",
  powner:"John",pheading:"Literature"},
  {pid:102,post:"This is the post of literature,how important the awarenees of languages in our day to life.",powner:"Samuel",pheading:"Literature"},
  {pid:103,post:"This is the post of literature,how important the awarenees of languages in our day to life.",powner:"Mathew",pheading:"Literature"},
  {pid:104,post:"This is the post of literature,how important the awarenees of languages in our day to life.",powner:"David",pheading:"Literature"},
  {pid:105,post:"This is the post of literature,how important the awarenees of languages in our day to life.",powner:"Jason",pheading:"Literature"},
  {pid:106,post:"This is the post of literature,how important the awarenees of languages in our day to life.",powner:"Emma",pheading:"Literature"}]
 

  title = 'sandep-app';
  UserName = '';
  showsecret = false; 
  log = []; 
 
  onToggleDetails(){
    this.showsecret = !this.showsecret;
    this.log.push(new Date());
    
  }
   
  clickEmpty(){
    this.UserName = '';
  }

}