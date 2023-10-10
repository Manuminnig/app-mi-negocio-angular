import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosListaComponent } from './productos-lista.component';
import { ProductoDataService } from '../producto-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductosListaComponent', () => {
  let component: ProductosListaComponent;
  let fixture: ComponentFixture<ProductosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosListaComponent ],
      imports: [HttpClientModule],
      providers: [ProductoDataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
