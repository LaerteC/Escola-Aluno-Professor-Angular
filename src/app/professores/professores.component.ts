import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Professor } from '../model/Professor';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public titulo='Professores';
  public professorForm:FormGroup;
  public professorSelecionado:Professor ;


  constructor(private fb: FormBuilder,private modalService: BsModalService) {

    this.criarForm();
   }

  public professores=[
    {id:1,nome:' Mario',disciplina:' Matemática'},
    {id:2,nome:' Fernando',disciplina:' Português'},
    {id:3,nome:' Felipe',disciplina:' Filosofia'},
    {id:4,nome:' Gusmão',disciplina:' História'},
    {id:5,nome:' Razer',disciplina:' Geografia'}
  ];


 

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  criarForm(){

    this.professorForm = this.fb.group(
      {nome : ['',Validators.required],
      disciplina: ['',Validators.required]}
    );
  }

  

  professorSelect(professor:Professor){
      this.professorSelecionado = professor;
      this.professorForm.patchValue(professor);
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  voltar(){

    this.professorSelecionado =null;
  }
  ngOnInit(): void {
  }

}
