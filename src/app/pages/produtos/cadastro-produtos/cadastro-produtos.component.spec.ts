import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastroProdutosComponent } from './cadastro-produtos.component';

describe('CadastroProdutosComponent', () => {
  let component: PageCadastroProdutosComponent;
  let fixture: ComponentFixture<PageCadastroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCadastroProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCadastroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
