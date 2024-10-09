import { Component } from '@angular/core';
import { SeguroNovoComponent } from './seguro-novo/seguro-novo.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EndossoInclusaoComponent } from "./endosso-inclusao/endosso-inclusao.component";
import { EndossoExclusaoComponent } from "./endosso-exclusao/endosso-exclusao.component";
import { EndossoCancelamentoComponent } from "./endosso-cancelamento/endosso-cancelamento.component";
import { PesquisaComponent } from "./pesquisa/pesquisa.component";
import { CotacaoComponent } from "./cotacao/cotacao.component";
import { CalculoComponent } from "./calculo/calculo.component";
import { PropostaComponent } from "./proposta/proposta.component";
import { ImportacaoComponent } from "./importacao/importacao.component";
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SeguroNovoComponent, DashboardComponent, EndossoInclusaoComponent, EndossoExclusaoComponent, EndossoCancelamentoComponent, PesquisaComponent, CotacaoComponent, CalculoComponent, PropostaComponent, ImportacaoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
   nomeTeste:string='';

  alteraTeste(nomeTeste:string){
    console.log(nomeTeste);
    this.nomeTeste = nomeTeste;
  }
}
