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
      this.prodotto.nome &&
      this.prodotto.prezzo &&
      this.prodotto.descrizione &&
      this.prodotto.quantita
    ) {
      this.api.createProduct(this.prodotto).subscribe(data => {
        console.log(JSON.stringify(data, null, 2))
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
    this.api.updateProduct(this.prodotto.id['$oid'], { nome: this.prodotto.nome, descrizione: this.prodotto.descrizione, prezzo: this.prodotto.prezzo, quantita: this.prodotto.quantita }).subscribe(data => {
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
