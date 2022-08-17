import { Component, OnInit, NgZone, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { RequestService } from 'src/app/widgets-examples/request.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {

  isBuyActive:boolean = true;
  activeCurrency:string = '';
  newActiveCurrency:string =''
  coinList:string[] = [];
  changeCurrency:boolean = false;
  groups:any[] = [];
  currentPrice:string ='';
  percentage:number =1;
  currentTargets:any[]=[];
  searchTerm:string = '';

  targetValues = new Array(5);
  targetPercentage = new Array(5).fill(1);
  ocoTargetValues = new Array(5);
  ocoTargertPercentage = new Array(5).fill(1);

  isOcoEnabled:boolean = false;
  isLimitActive:boolean = false;

  isMarketActive:boolean = true;

  constructor(
    private _RequestService:RequestService,
    private _ngZone:NgZone
  ) { }

  ngOnInit(): void {
    this._RequestService.getCoinsList().subscribe(
      (data)=>{
        this.coinList = data.message;
        this.activeCurrency = this.coinList[0];
        this.getCurrencyPrice();
      }
    );

    this._RequestService.getGroups().subscribe(
      (data)=>{
        this.groups = data.message;
      }
    );
  }

  @HostListener('window:mouseover', ['$event'])
  onMouseOver(e:any) {
    this.updateData();
  }

  @HostListener('window:mouseMove', ['$event'])
  onMouseMove(e:any) {
    this.updateData();
  }

  updateData(){
    
  }

  activateMarket(){
    this.isMarketActive = true;
    this.isLimitActive = false;
    this.isOcoEnabled = false;
  }

  activateLimit(){
    this.isMarketActive = false;
    this.isLimitActive = true;
    this.isOcoEnabled = false;
  }


  activateBuy(){
    this.isBuyActive = true;
    this.isMarketActive = true;
    this.isOcoEnabled = false;
    this.isLimitActive = false;
    this.currentTargets = [];
  }

  activateSell(){
    this.isBuyActive = false;
    this.isMarketActive = true;
    this.isOcoEnabled = false;
    this.isLimitActive = false;
    this.currentTargets = [];
  }

  changeCoin(){
    this.changeCurrency = true;
  }

  closeMenu(){
    this.changeCurrency = false;
  }

  setCurrentCoin(value:string){
    this.activeCurrency = value;
    this.changeCurrency = false;
    this.getCurrencyPrice();
  }

  getCurrencyPrice(){
    this._RequestService.getPrice(this.activeCurrency).subscribe(
      (data)=>{
        this.currentPrice = data.price;
      }
    );
  }

  incrementTarget(){
    if(this.currentTargets.length<5){
      this.currentTargets.push(0);
      console.log(this.currentTargets.length);
    }
  }

  enableOco(){
    this.isOcoEnabled = true;
    this.isLimitActive = false;
    this.isMarketActive = false;
  }

}
