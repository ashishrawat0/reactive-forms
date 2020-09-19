import { Component } from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AddressService} from './address.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 addressForm: FormGroup
  addresses: FormArray;
  allAddress:any
  
  constructor(private formBuilder: FormBuilder, private addressService: AddressService){
    this.addressForm = this.formBuilder.group({
      addresses: this.formBuilder.array([ this.createAddress() ])
   });
   this.allAddress = this.addressForm.get('addresses')['controls'];
  }

  createAddress(): FormGroup {
    return this.formBuilder.group({
      address: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    });
 }
 addAddress(): void {
  this.addresses = this.addressForm.get('addresses') as FormArray;
  this.addresses.push(this.createAddress());

}
  ngOnIt(){   
  }
  removeAddress(i: number) {
    console.log(this.addresses)
    this.addresses.removeAt(i);
 }
 ////// You can save the details of the form using this functions 
 submitDetails(formData){
   const data = formData.value.addresses
   console.log(data)
    this.addressService.post(data).subscribe(res=>{
    })
 }
}
