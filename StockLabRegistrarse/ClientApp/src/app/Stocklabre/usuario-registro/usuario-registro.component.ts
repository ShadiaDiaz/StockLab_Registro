import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Docente } from '../models/docente';
import { AlertModalComponent } from 'src/app/@base/modal/alert-modal/alert-modal.component';
import { DocenteService } from 'src/app/services/docente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {
  formGroup: FormGroup;
  docente: Docente;
  constructor(private formBuilder: FormBuilder,
    private personService: DocenteService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(...args: []) {
    this.docente = new Docente();

    this.docente.identificacion = '';
    this.docente.nombres = '';
    this.docente.apellidos = '';
    this.docente.sexo = '';
    this.docente.correo = '';
    this.docente.password = '';




    this.formGroup = this.formBuilder.group({
      identificacion: [this.docente.identificacion, [Validators.required, Validators.maxLength(13)]],
      nombres: [this.docente.nombres, [Validators.required, Validators.maxLength(25)]],
      apellidos: [this.docente.apellidos, [Validators.required, Validators.maxLength(25)]],
      sexo: [this.docente.sexo, [Validators.required, this.ValidaSexo, Validators.maxLength(11)]],
      edad: [this.docente.edad, [Validators.required, this.ValidaEdad]],
      correo: [this.docente.correo, [Validators.required,Validators.maxLength(30), Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")]],
      password: [this.docente.password, [Validators.required, Validators.pattern("(?=.*[-!#$%&/()?¡_])(?=.*[A-Z])(?=.*[a-z]).{8,}")]]
    });
  }



  private ValidaSexo(control: AbstractControl) {
    const sexo = control.value;
    if (sexo.toLocaleUpperCase() !== 'MASCULINO' && sexo.toLocaleUpperCase() !== 'FEMENINO') {
      return { validSexo: true, messageSexo: 'Sexo No Valido' };
    }
    return null;
  }

  private ValidaEdad(control: AbstractControl){
    const edad = control.value;
    if(edad < 0 || edad > 100){
      return {validEdad: true, messageEdad: 'Edad no valida'};
    }
    return null;
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
    this.personService.post(this.docente).subscribe(result => {
      if (result != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Docente creado!!! :-)';
        this.docente = result;
      }
    });
  }
}
