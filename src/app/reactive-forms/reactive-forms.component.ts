import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit{

  public registrationForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.email]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
  }

  public submitForm(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value);
      console.log(this.registrationForm.value.firstName);
      console.log(this.registrationForm.value.lastName);
    }
  }
}
