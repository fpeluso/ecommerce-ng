import { ActivatedRoute } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { ProdottoImpl } from './../../models/prodottoImpl';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent implements OnInit {

  prodotto: ProdottoImpl = new ProdottoImpl();
  prodotti: Array<ProdottoImpl> = [];
  editState: boolean = false;
  editIndex: number;

  constructor(private api: CrudService) { }

  ngOnInit(): void {
    this.updateList();
  }

  updateList(): void {
    this.prodotti = [];
    this.api.getProductList().subscribe(data => {
      for (const d of (data as any)) {
        const resProd = { ...d }
        this.prodotti.push(resProd);
      }
    })
  }

  addProduct(): void {
    if (
      this.prodotto &&
      this.prodotto.name &&
      this.prodotto.price &&
      this.prodotto.description &&
      this.prodotto.quantity
    ) {
      this.api.createProduct(this.prodotto).subscribe(data => {
        this.prodotto.id = data['$oid']
        this.prodotto = new ProdottoImpl();
        this.updateList();
      })
    }
  }

  delProduct(i: number): void {
    this.api.deleteProduct(this.prodotti[i].id).subscribe(data => {
      this.updateList();
    })
  }

  edit(i: number): void {
    this.prodotto = Object.assign({}, this.prodotti[i]);
    this.editIndex = i;
    this.editState = true;
  }

  confirm(): void {
    this.api.updateProduct(this.prodotto.id, { name: this.prodotto.name, description: this.prodotto.description, price: this.prodotto.price, quantity: this.prodotto.quantity }).subscribe(data => {
      this.prodotto = new ProdottoImpl();
      this.editState = false;
      this.updateList();
    })
  }

  cancel(): void {
    this.prodotto = new ProdottoImpl();
    this.editState = false;
  }
}
