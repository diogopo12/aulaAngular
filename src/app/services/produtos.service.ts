import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {   }

  private apiurl = environment.api + '/produtos'

  buscarTodosProdutos(){
    return this.http.get<IProduto[]>(this.apiurl)
  }

   
  
  buscarProdutosID(id: string){
    return this.http.get<IProduto>(this.apiurl+'/'+id)
  }

  cadastroProduto(produto: IProduto){
    console.log("cadastroProduto")
    return this.http.post(this.apiurl,produto)
  }
  
  deleteProduto(produto:IProduto){
    return this.http.delete(this.apiurl+'/'+produto.id);
  }
  
  updateProduto(produto:IProduto){
    return this.http.put(this.apiurl+'/'+produto.id,produto);
  }


}
