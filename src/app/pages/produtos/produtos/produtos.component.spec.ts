import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProdutosComponent } from './produtos.component';

describe('ProdutosComponent', () => {
  let component: PageProdutosComponent;
  let fixture: ComponentFixture<PageProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
