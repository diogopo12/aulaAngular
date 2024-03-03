import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../../../services/produtos.service';
import { IProduto } from '../../../interfaces/produto';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  constructor(private produtoService: ProdutosService) {}

  produtosForm = new FormGroup({
    id: new FormControl(-1,[Validators.required]),
    nome: new FormControl('',[Validators.required]),
    status: new FormControl(false,[Validators.required]),
    preco: new FormControl(-1,[Validators.required]),
    moeda: new FormControl('',[Validators.required]),
  })

  cadastrarProduto() {
    const produto: IProduto = this.produtosForm.value as IProduto;
   
       
    waitForAsync
    this.produtoService.cadastroProduto(produto).subscribe((result) =>{
    console.log(result);
    },
    (erro) => {
      console.log(erro);
    }
    )
  }

}
