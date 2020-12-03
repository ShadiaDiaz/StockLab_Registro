import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DocenteService } from 'src/app/services/docente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../models/docente';
@Component({
  selector: 'app-docente-registro',
  templateUrl: './docente-registro.component.html',
  styleUrls: ['./docente-registro.component.css']
})
export class DocenteRegistroComponent implements OnInit {
  formGroup: FormGroup;
  docente: Docente;
  constructor(private formBuilder: FormBuilder, private docenteService: DocenteService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm
  }

  private buildForm(...args: []) {
    this.docente = new Docente();
    this.docente.identificacion = '';
    this.docente.nombres = '';
    this.docente.sexo = '';

    this.docente.correo = '';
    this.docente.contraseña = '';



    this.formGroup = this.formBuilder.group({
      identificacion: [this.docente.identificacion, [Validators.required, Validators.maxLength(25)]],
      nombres: [this.docente.nombres, [Validators.required, Validators.maxLength(50)]],
      sexo: [this.docente.sexo, [Validators.required, Validators.maxLength(50)]],
      edad: [this.docente.edad, [Validators.required, Validators.maxLength(50)]],
      correo: [this.docente.correo, [Validators.required, Validators.maxLength(50)]],
      contraseña: [this.docente.contraseña, [Validators.required, Validators.maxLength(50)]],
    });
  }
  get control() {
    return this.formGroup.controls;
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.agregar();
  }


  agregar() {
    this.docente = this.formGroup.value;
    this.docenteService.post(this.docente).subscribe(p=>{
      if(p != null){
        const messageBox = this.modalService.open(AlertModalComponent)​
        messageBox.componentInstance.title = "Resultado Operación";​
        messageBox.componentInstance.cuerpo = 'docente registrado!!! :-)';
        this.docente = p;
      }
    });
  }
}
