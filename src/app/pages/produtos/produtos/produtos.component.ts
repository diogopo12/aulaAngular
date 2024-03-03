import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProdutosComponent } from '../../../components/produtos/produtos.component';

@Component({
  selector: 'app-page-produtos',
  standalone: true,
  imports: [NgFor,ProdutosComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class PageProdutosComponent {

}
