import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { PropertyService } from 'src/app/shared/property.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(public cusServ:CustomerService, public propSrv:PropertyService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.cusServ.ppData={BorrowerId:0,FirstName:'',LastName:'',Contact:'',Dob:'',Gender:'',Occupation:'',IdentityType:'',Address:'',City:'',State:'',ZipCode:''};
      this.propSrv.ppData={ApplicationId:0,LoanType:'',LoanPurpose:'',LoanTenure:'',RequestAmount:0};
    }
  }
  onSubmit(form:NgForm)
  {
    this.cusServ.postCustomer().subscribe(
        res=>{this.resetForm(form);
        this.cusServ.getCustomerList();
        alert("Record Insertion Success!!!");
        },
        err=>{alert('Error!!!'+err);}
    )
  }
  onSubmitProperty(form:NgForm) {
    this.propSrv.postProperty().subscribe(
      res=>{this.resetForm(form);
      this.propSrv.getPropertyList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}
  )
  }
  insertRecord(form:NgForm)
  {
    this.cusServ.postCustomer().subscribe(
      res=>{this.resetForm(form);
      this.cusServ.getCustomerList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.cusServ.putCustomer().subscribe(
      res=>{this.resetForm(form);
      this.cusServ.getCustomerList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}
