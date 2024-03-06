import { Component } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduto } from '../../../interfaces/produto';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {
  
  produtoEdit:any
  orderObj = {
    "id": null,
    "nome": null,
    "status": null,
    "preco": null,
    "moeda": null}
  
  constructor(private produtoService: ProdutosService, private router:Router,private route:ActivatedRoute) {}


  produtosForm = new FormGroup({
    id: new FormControl({value: '', disabled: true},[Validators.required]),
    nome: new FormControl('',[Validators.required]),
    status: new FormControl(false,[Validators.required]),
    preco: new FormControl('',[Validators.required]),
    moeda: new FormControl('R$',[Validators.required]),
  })  

  ngOnInit() {    
    const idProdutoEdit = this.route.snapshot.paramMap.get('id');
    console.log(idProdutoEdit)
    this.produtoService.buscarProdutoID(idProdutoEdit).subscribe(
      {
        next: (value) => {
            this.produtoEdit = value;
            this.setFormProdutoValues(this.produtoEdit)      
            },
        error: (erro) =>{console.error('Erro produtos: ' + erro)}    
        }
    )       
  }

  setFormProdutoValuesNull(){
    this.produtosForm.controls.id.setValue('#')
    this.produtosForm.controls.nome.setValue('')
    this.produtosForm.controls.status.setValue(false)
    this.produtosForm.controls.preco.setValue('')
    this.produtosForm.controls.moeda.setValue('R$')
  }
  setFormProdutoValues(produto:IProduto){
    this.produtosForm.controls.id.setValue(produto.id!.toString())
    this.produtosForm.controls.nome.setValue(produto.nome)
    this.produtosForm.controls.status.setValue(produto.status)
    this.produtosForm.controls.preco.setValue(produto.preco.toString())
    this.produtosForm.controls.moeda.setValue(produto.moeda)
  }


  cadastrarProdutoID(){

    const idProdutoEdit = this.route.snapshot.paramMap.get('id'); 
    if  (idProdutoEdit == null) {

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
      else{
        this.editarProduto(idProdutoEdit)

      }

  }

  editarProduto(idProdutoEdit:any){    

    let produto: IProduto = this.produtosForm.value as unknown as IProduto; 
    produto.id = idProdutoEdit.toString();
    
    produto = Object.assign(this.orderObj, produto);
    console.log('editarProduto') 
    console.log(produto)

    this.produtoService.updateProduto(produto).subscribe(
      (result) =>{
        console.log(result);
        Swal.fire({
          title: "Edição de Produtos",
          text: "Produto editado com sucesso",
          icon: "success"
        });
        this.router.navigateByUrl('/produtos')
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  


  cadastrarProduto(id:number) {

    let produto: IProduto = this.produtosForm.value as unknown as IProduto;  
    
    produto.id = id.toString();
    produto.preco = Number(produto.preco);

    produto = Object.assign(this.orderObj, produto);

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


