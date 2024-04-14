import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-driven-form-demo';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError=true;
  submitted=false;

  userModel = new User('Pratik','',99999999999,'default','morning',true);

  validateTopic(value :any){
    if(value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.userModel);
  }
}
