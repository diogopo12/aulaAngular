import { Component, Input } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { NgFor,NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduto } from '../../interfaces/produto';
import { PageCadastroProdutosComponent } from '../../pages/produtos/cadastro-produtos/cadastro-produtos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule,PageCadastroProdutosComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  @Input() permission:string="read"; 
  produtos:any
  prodEdit:any
  constructor(private produtoService: ProdutosService) {}

  ngOnInit() {
    this.produtoService.buscarTodosProdutos()
      .subscribe({
        next: (value) => {
            this.produtos = value;      
            },
        error: (erro) =>{console.error('Erro produtos: ' + erro)}    
        })
  }

  deleteProdutoAlert(produto:IProduto){
    Swal.fire({
      title: "Tem certeza?",
      text: "Você realmente quer deletar o produto: "+ produto,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteProduto(produto)
        Swal.fire({
          title: "Deletado!",
          icon: "success"
        });
      }
    });
  }

  deleteProduto(produto:IProduto){
    this.produtoService.deleteProduto(produto)
        .subscribe(response => {
          this.produtos = this.produtos.filter((itemProduto: { id: number | undefined; }) => itemProduto.id !== produto.id);
        });
  }

  updateProduto(produto:IProduto){
    this.produtoService.updateProduto(produto)
        .subscribe(response => {
          this.produtos = this.produtos.filter((itemProduto: { id: number | undefined; }) => itemProduto.id !== produto.id);
        });
  }

}
