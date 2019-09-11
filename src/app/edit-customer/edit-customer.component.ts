import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  message: string;
  @Input() customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  editCustomer(customerForm) {
    const id = customerForm.value.id;
    const { firstName, lastName } = customerForm.value;
    const customer = {
      firstName,
      lastName
    };
    this.customerService.edit(id, customer).subscribe( () => {
      this.message = 'Successful';
    }, error => {
      this.message = 'updated fail';
    });
  }
}
