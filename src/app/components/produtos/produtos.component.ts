import { Component, Input } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { NgFor,NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  @Input() permission:string="read"; 
  produtos:any
  constructor(private produtoService: ProdutosService) {}

  ngOnInit() {
    this.produtoService.buscarTodosProdutos()
      .subscribe({
        next: (value) => {
            this.produtos = value;      
            console.log(this.produtos[this.produtos.length -1].id)
        
            }, error: (erro) =>{console.error('Erro produtos: ' + erro)}    
        })
  }

}
