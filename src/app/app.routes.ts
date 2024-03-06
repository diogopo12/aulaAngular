import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageProdutosComponent } from './pages/produtos/produtos/produtos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PageCadastroProdutosComponent } from './pages/produtos/cadastro-produtos/cadastro-produtos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'produtos', component: PageProdutosComponent},
    { path: 'produtos/cadastro', component: PageCadastroProdutosComponent},
    { path: 'produtos/editar/:id', component: PageCadastroProdutosComponent}

];
