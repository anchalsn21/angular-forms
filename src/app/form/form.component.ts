
 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl , Validators,FormBuilder, FormArray} from '@angular/forms';
 
 
 @Component({
   selector: 'app-form',
   templateUrl: './form.component.html',
   styleUrls: ['./form.component.css']
 })
 export class FormComponent implements OnInit {

  title="Users Dynamic form"
  userForm:FormGroup;
  showSubmit=false

 
 
  constructor(private fb:FormBuilder) {
 
    this.userForm=this.fb.group({
      users: this.fb.array([]) ,
    })
  }
 
 
  ngOnInit(){

  }

  users(): FormArray {
    return this.userForm.get("users") as FormArray
  }
 
 
  newUser(): FormGroup {
    
    return this.fb.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.email]),
    address: new FormControl('',[Validators.required]),
    mobile: new FormControl("",[Validators.required]),
     
    })
  }
 
 
  addUser() {
    console.log("Adding a User");
    this.showSubmit=true;
    this.users().push(this.newUser());
  }
 
 
  removeUser(index:number) {
    this.users().removeAt(index);
  }
 
 
  onSubmit() {
    console.log(this.userForm);
    let {users}=this.userForm.value
    let data=[]
    let local=JSON.parse(localStorage.getItem("savedData"))
    if(local) data=local;

    let savedData=[...data,...users]
    
    localStorage.setItem("savedData",JSON.stringify(savedData))
    this.userForm.reset()
  }
 
 
}