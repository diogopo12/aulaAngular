import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {   }

  buscarTodosProdutos(){
    return this.http.get<IProduto[]>('http://localhost:3000/produtos')
  }
}
