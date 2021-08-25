import { Aluno } from '../model/Aluno';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  modalRef: BsModalRef;
  public alunoForm :FormGroup;
  public titulo = 'Alunos';

  public alunoSelecionado:Aluno;


  public alunos = [
    {id:1,nome:'Marta',sobrenome:'Suplici',telefone:33455659},
    {id:2,nome:'Paula',sobrenome:'Alcantara',telefone:33455659},
    {id:3,nome:'Laura',sobrenome:'Petira',telefone:33455659},
    {id:4,nome:'Luiza',sobrenome:'Safada',telefone:33455659},
    {id:5,nome:'Lucas',sobrenome:'Postironi',telefone:33455659},
    {id:6,nome:'Pedro',sobrenome:'Postulari',telefone:33455659},
    {id:7,nome:'Paulinho',sobrenome:'Gogó',telefone:33455659},
    ];

    
    
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }


    constructor(private fb : FormBuilder,
                private modalService: BsModalService) { 
      this.criarForm();
    }

    ngOnInit(): void {
    }


    criarForm(){
      this.alunoForm = this.fb.group(
        {nome : ['',Validators.required],
         sobrenome : ['',Validators.required],
         telefone : ['',Validators.required]
        }
      );
    }

    alunoSelect(aluno:Aluno){
      this.alunoSelecionado =aluno;
      this.alunoForm.patchValue(aluno);
    }

    alunoSubmit(){
      console.log(this.alunoForm.value);
    }


    voltar(){

      this.alunoSelecionado=null; 
    }

    

}
