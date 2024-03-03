import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {   }

  apiurl = 'http://localhost:3000/produtos'

  buscarTodosProdutos(){
    return this.http.get<IProduto[]>(this.apiurl)
  }

  cadastroProduto(produto: IProduto){
    console.log("Service função")
    return this.http.post(this.apiurl,produto)
  }
}
