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
  private sueldo: Resultado[];

    public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public barChartLabels:string[] = [ '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [ 81, 56, 55, 40], label: 'Tu sueldo'},
    {data: [ 19, 86, 27, 90], label: 'Media'}
  ];


  
 
  

  

  
  ngOnInit() {
    this.totales = new Resultado();
    this.isVisible = Object.keys(this.totales);
  }


  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log(changes);

    if (changes['totales'].currentValue != null) {
        let _sueldo = changes['totales'].currentValue.sueldo;

        this.mongoService.getMongo(_sueldo)
          .subscribe(sueldo => this.sueldo = sueldo);

           /*  CHARTS   */

      
        


      
      }
  } 


  // events
    public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



 



}
