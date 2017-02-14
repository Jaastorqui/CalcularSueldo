import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Resultado } from '../../resultado';
import { MongoService } from '../../mongo.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private mongoService: MongoService) {}
  @Input() totales:Resultado;
  private isVisible ;
  private sueldo;
  private numeroSueldos;
  public _sueldo;

    public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public barChartLabels:string[] = [ 'Sueldo'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [ 20000 ], label: 'Tu sueldo'},
    {data: [ 24000 ], label: 'Media'}
  ];

  

  
  ngOnInit() {
    this.totales = new Resultado();
    this.isVisible = Object.keys(this.totales);
  }


  ngOnChanges(changes: {[propName: string]: SimpleChange}) {

    if (changes['totales'].currentValue != null) {
        this._sueldo = changes['totales'].currentValue.sueldo;
        this.mongoService.getMongo(this._sueldo)
          .subscribe(
            (sueldo) => this.sueldo = sueldo,
            (error) => {}, 
            () => {

              let sueldoMedio = this.calcularSueldo(this.sueldo);
              /*  CHARTS   */
              this.barChartLabels = [ 'Sueldo'];
              this.barChartType = 'bar';
              this.barChartLegend = true;
    
              this.barChartData = [
                {data: [ this.sueldo ], label: 'Tu sueldo'},
                {data: [ sueldoMedio ], label: 'Sueldo medio'}
              ];
              this.numeroSueldos = this.sueldo.length;
            }
          );
      }
  } 

  calcularSueldo(sueldo) {
    let _sueldo = sueldo;
    let sum:number = 0;
    _sueldo.length
    _sueldo.forEach(elem => {  
      sum = sum + elem.sueldo;
    });

    return sum / sueldo.length;
  }

}
