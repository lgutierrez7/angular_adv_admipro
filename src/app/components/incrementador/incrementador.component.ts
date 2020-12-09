import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(){
    this.btnclass = `btn ${this.btnclass}`;
  }

  
  //@Input() progreso: number = 40;
  @Input('valor') progreso: number = 40;
  @Input('class-btn') btnclass:string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  get getPorcentaje(){
    return `${ this.progreso }%`;
  }

  cambiarValor(valor:number){

    this.progreso = this.progreso + valor;
    if(this.progreso>100){
      this.progreso = 100;
    }
    if(this.progreso<0){
      this.progreso = 0;
    }

    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor:number){
    if(nuevoValor>100){
      nuevoValor = 100;
    }else if(nuevoValor<0){
      nuevoValor = 0;
    }
    this.valorSalida.emit(nuevoValor);
  }
}
