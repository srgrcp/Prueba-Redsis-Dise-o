import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  billto = [{ add: 'Reactial' }, { add: 'VOt. No. 384351851' }]
  shipping = [{ add: '11 Stonepot' }, { add: 'Clinton' }]
  list = [
    { service: 'Net Consultancy', quantity: 50, price: 25, vot: 0 },
    { service: 'Net Consulty Services', quantity: 50, price: 10, vot: 0 }
  ]
  billtoswitch = false
  itemsswitch = false

  deleteBill(i){
      this.billto.splice(i, 1)
  }

  deleteShip(i){
      this.shipping.splice(i, 1)
  }
}
