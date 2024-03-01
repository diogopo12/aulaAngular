import { Component } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class PageProdutosComponent {
  titulotable: string = "Produtos"
  produtos:any

  constructor(private produtoService: ProdutosService) {}

  ngOnInit() {
    this.produtoService.buscarTodosProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;      
    })
  }

}
