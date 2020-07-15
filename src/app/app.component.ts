import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-angulars';
}

/**
 * 
 * 
 * js
 * 
 * 
 * ********************************


 import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators,FormBuilder, FormArray} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm:FormGroup;
  
  
  // form= new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('',[Validators.email]),
  //   address: new FormControl('',[Validators.required]),
  //   mobile: new FormControl("",[Validators.required]),
  // });
  
  constructor(private fb:FormBuilder) { 

    // this.formArray.push(this.form)
    this.userForm=this.fb.group({
      users: this.fb.array([]) ,
    })
  }
  
  ngOnInit() {
  }

  onSubmit(index,form) {
    // TODO: Use EventEmitter with form value
    console.log(index,this.users,form);

 let savedForms:any=[]
 let local=  JSON.parse(localStorage.getItem('savedForms'))
 if(local){
   savedForms=local
 }
 savedForms.push(this.users[index].value)
 localStorage.setItem("savedForms",JSON.stringify(savedForms))

//  this.users[index].reset();
//  this.users[index].removeControl()

    // this.formArray.splice(index, 1,this.formArray);


  }

addNewForm(){
  console.log("inside the add new form",this.userForm);
  
  // this.formArray.push(this.form)
  this.users().push(this.newUser());
}

removeUser(index:number) {
  this.users().removeAt(index);
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
}


**********************
 html
 <div class="container">
  <div class="row">
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div formArrayName="users">
        <div *ngFor="let form of users().controls; let i = index">
          <!-- <div  *ngFor="let form of formArray; let i=index">
    <form [formGroup]="form" (ngSubmit)="onSubmit(i,form)"> -->
          <div [formGroupName]="i" class="">
            <label>
              Name
            </label>
            <input
              type="text"
              formControlName="name"
              placeholder="Enter name"
              required
            />

            <!-- <div
              *ngIf="
                form.controls['name'].invalid &&
                (form.controls['name'].dirty || form.controls['name'].touched)
              "
              class="alert alert-danger form-danger"
              role="alert"
            >
              <div *ngIf="form.controls['name'].invalid">
                Invalid
              </div>
            </div> -->
           
          </div>

          <div>
            <label>
              Email
            </label>
            <input
              type="email"
              formControlName="email"
              placeholder="Enter Email"
              required
            />
            <!-- <div
              *ngIf="
                form.controls['email'].invalid &&
                (form.controls['email'].dirty || form.controls['email'].touched)
              "
              class="alert alert-danger form-danger"
              role="alert"
            >
              <div *ngIf="form.controls['email'].invalid">
                Invalid
              </div>
            </div> -->
          </div>

          <div>
            <label>
              Address
            </label>
            <input
              type="text"
              formControlName="address"
              placeholder="Enter Address"
              required
            />
            <!-- <div
              *ngIf="
                form.controls['address'].invalid &&
                (form.controls['address'].dirty ||
                  form.controls['address'].touched)
              "
              class="alert alert-danger form-danger"
              role="alert"
            >
              <div *ngIf="form.controls['address'].invalid">
                Invalid
              </div>
            </div> -->
          </div>

          <div>
            <label>
              Mobile
            </label>
            <input
              type="number"
              min="0000000001"
              max="9999999999"
              formControlName="mobile"
              placeholder="Enter Mobile"
              required
            />
            <!-- <div
              *ngIf="
                form.controls['mobile'].invalid &&
                (form.controls['mobile'].dirty ||
                  form.controls['mobile'].touched)
              "
              class="alert alert-danger form-danger"
              role="alert"
            >
              <div *ngIf="form.controls['mobile'].invalid">
                Invalid
              </div>
            </div> -->
          </div>

       
          <button type="submit" [disabled]="!form.valid">Submit</button>
          <!-- [disabled]="!form.valid" -->
          <div></div>
        </div>
      </div>
    </form>
    <!-- </form> -->
  </div>
  <div>
    <button (click)="addNewForm()" type="button">Add new Form</button>
  </div>
</div>





 */