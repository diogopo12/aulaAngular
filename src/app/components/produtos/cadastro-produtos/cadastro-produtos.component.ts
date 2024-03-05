import { Component } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduto } from '../../../interfaces/produto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  
  constructor(private produtoService: ProdutosService, private router:Router) {}


  produtosForm = new FormGroup({
    id: new FormControl({value: '', disabled: true},[Validators.required]),
    nome: new FormControl('',[Validators.required]),
    status: new FormControl(false,[Validators.required]),
    preco: new FormControl('',[Validators.required]),
    moeda: new FormControl('R$',[Validators.required]),
  })  

  ngOnInit() {
    this.setFormProdutoValues()   

  }

  setFormProdutoValues(){
    this.produtosForm.controls.id.setValue('#')
    this.produtosForm.controls.nome.setValue('')
    this.produtosForm.controls.status.setValue(false)
    this.produtosForm.controls.preco.setValue('')
    this.produtosForm.controls.moeda.setValue('R$')
  }


  cadastrarProdutoID(){

    let produtosLocal:any;
    this.produtoService.buscarTodosProdutos()
        .subscribe({
          next: (value) => {
              produtosLocal = value; 
              this.cadastrarProduto(Number(produtosLocal[produtosLocal.length-1].id)+1)
                   
              },
          error: (erro) =>{console.error('Erro produtos: ' + erro)}    
          })

  }


  cadastrarProduto(id:number) {

    const produto: IProduto = this.produtosForm.value as unknown as IProduto;  
    
    produto.id = id.toString();
    produto.preco = Number(produto.preco);


    this.produtoService.cadastroProduto(produto).subscribe(
      (result) =>{
        console.log(result);
        Swal.fire({
          title: "Cadastro de Produtos",
          text: "Produto cadastrado com sucesso",
          icon: "success"
        });
        this.router.navigateByUrl('/produtos')
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

}


