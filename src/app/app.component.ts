import { Component } from '@angular/core';
import { User } from './User';
import { Cost } from './Cost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartSetu';

  userDetails: User = new User();
  costClass: Cost = new Cost();

  password;
  role;
  feedback;
  flag = false;
  submitted=false;

  selectedDay: number = 0;
  discountAmount: number = 0;
  
  constructor( private router:Router) { }

  ngOnInit() {
  }

  costDetails(){
    this.submitted=true;
    console.log("Hello");
  }

  onSubmit(){
    console.log("Happy");
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxxYOkAgVWcPvCENtX5agDGJ10fSGPWHZvG0ka2RiVXG7oIUBs/exec'
    const form = document.forms['google-sheet2']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
    })  
}

costSubmit(){
  console.log("Happy123456");
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyH1Ra88Ar__VGrpd0B-ILzlN971OW8IKKzm7bpC5lHCzb2trwF/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thanks for using our Service..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
  })  
}

selectChangeHandler (event: any) {
  this.selectedDay = event.target.value;
  this.discountAmount = this.selectedDay - this.selectedDay*0.1;
}

}
