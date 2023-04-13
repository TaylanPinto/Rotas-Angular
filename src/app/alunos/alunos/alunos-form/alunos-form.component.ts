import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy{
 
  aluno: any = {};
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ){  }

  ngOnInit() {
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          let id = params['id'];

          this.aluno = this.alunosService.getAluno(id);

          if (this.aluno === null){
            this.aluno = {};
          }
        }
      );
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}


