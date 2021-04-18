import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  crearCliente:boolean = false;
  constructor(private formBuilder:FormBuilder) { }
  formulario=this.formBuilder.group({
    Nombre : ['',Validators.required],
    Apellido : ['',Validators.required],
    Direccion : ['',Validators.required],
    Documento : ['',Validators.required]

  })
  ngOnInit(): void {
  }
AddCliente(){
  console.log(this.formulario.value)
}
}
