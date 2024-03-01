import { Component } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class PageProdutosComponent {
  titulotable: string = "Produtos"
  constructor(private produtoService: ProdutosService) {}

  ngOnInit() {
    this.produtoService.buscarTodosProdutos().subscribe(produtos => {
      console.log(produtos);      
    })
  }

}
