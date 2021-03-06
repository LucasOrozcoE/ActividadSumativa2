import { removeSummaryDuplicates } from '@angular/compiler';
import { Component,  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent  {
  // código, nombre, precio, cantidad, descripción 
  salida!: string;
  lista: any = [];
  suma = 0;
  total = 0;
  formulario = new FormGroup({
     
     producto: new FormGroup({
      codigo: new FormControl(''),
      nombre: new FormControl(''),
      precio: new FormControl(''),
      cantidad: new FormControl(''),
      descripcion: new FormControl(''),
     })
  });
  


  agregar() {
    if(this.formulario.valid){
    this.lista.push(this.formulario.value);
    this.formulario.reset();
    }
    }

  eliminar(){
    this.lista.pop();
  }

  // NO me entro al For
  // pagar(suma: number, total: number){
  
    
  //   for(let i = 1; i> this.lista.length; i++){   
  //     suma = suma + (this.lista[i].precio.value * this.lista[i].cantidad.value); 
  //     console.log(suma)
  //     total = suma * 0.19;
      
  //   }
  //   console.log(suma)
  //   console.log(total)
  //   alert('total a pagar: ' + total + this.lista.values);
  // }


}
