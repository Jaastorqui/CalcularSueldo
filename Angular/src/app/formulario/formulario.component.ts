import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Calcular } from '../class/calcular';
import { Resultado } from '../resultado';
import { ResultadoComponent } from './resultado/resultado.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor() {}

  selected: Calcular;
  
  /* ngModel */
  sueldo:number = 18000;
  impuesto:number = 15;
  pagas: number = 14;
  totals:Resultado = null;
  

  

  onSelect() {

    let totals:Resultado = this.calculateTotals();
    this.totals = totals;
  }

  calculateTotals() {

    let sueldo = this.sueldo;
		let irpf = this.impuesto;
    let pagas = this.pagas;


		let anual = sueldo / (pagas);
		var base_cotizacion = anual + (anual*2 ) /12;
			
		//Impuestos naturales
		let contingencias = (base_cotizacion*4.7/100);
		let desempleo = (base_cotizacion*1.55/100);
		let fp = (base_cotizacion*0.1/100);
			
		let total_naturales = contingencias + desempleo + fp ;
			
		//Impuestos variables ( Irpf )
		let impuesto_irpf = ( anual * irpf ) / 100 ;
			
		let total_impuestos = impuesto_irpf + total_naturales;
		let sueldo_final = anual - total_impuestos;
			
		//Paga extra
		let extra = anual - (anual * irpf ) / 100;
		let mes_extra = (anual * pagas ) / 12;

    let resultado:Resultado = new Resultado();
    resultado.contingencias = contingencias;
		resultado.desempleo = desempleo;
		resultado.fp = fp;
		resultado.total_naturales = total_naturales;
		resultado.impuesto_irpf = impuesto_irpf;
		resultado.total_impuestos = total_impuestos;
		resultado.sueldo_final = sueldo_final;
		resultado.anual = anual;
		resultado.extra = extra;
		resultado.mes_extra = mes_extra;

		resultado.sueldo = this.sueldo;
		
    return resultado;

  }
}
