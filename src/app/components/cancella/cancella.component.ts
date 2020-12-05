import { ItemsInCart } from './../../interfaces/itemsInCart';
import { SessionService } from './../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cancella',
  templateUrl: './cancella.component.html',
  styleUrls: ['./cancella.component.css']
})
export class CancellaComponent implements OnInit {
  cart: Array<ItemsInCart> = []
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private cartService: SessionService, private _location: Location) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  conferma() {
    this.cart.splice(this.id, 1);
    this._location.back()
    //this.router.navigateByUrl('/conferma');
  }

  annulla() {
    this._location.back()
    //this.router.navigateByUrl('/annulla');
  }

}
