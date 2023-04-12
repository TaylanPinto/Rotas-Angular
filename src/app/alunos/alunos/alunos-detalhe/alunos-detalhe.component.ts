import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private  alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any)  => {
        let id = params ['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }
ngOnDestroy(){
  this.inscricao.unsubscribe();
}
}
