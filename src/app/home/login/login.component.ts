import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SignupService } from 'src/app/shared/signup.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public objSrv:SignupService,private fb:FormBuilder) { }
  type:string ="password";
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    this.objSrv.getLogin();
  
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.objSrv.ppLogData={userName: '', password:''};
    }
  }
  onSubmit(){
    if(this.objSrv.ppLogData!=null){
      console.log(this.objSrv.ppLogData);
      //Send obj to db
      this.objSrv.postLogin().subscribe(
        res=>{
        this.objSrv.getUser();
        alert("Login Success!!!");
        },
        err=>{alert('Error!!!'+err);}
    )
    
    }else{
      //throw error
      this.validateAllFormFields(this.loginForm);
      alert("Your Form is Invalid");
    }
  }
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })

}
}