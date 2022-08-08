import {  
  Component,  
  ViewChild,  
  ComponentFactoryResolver,  
  ViewContainerRef  
} from '@angular/core'; 
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { NotfoundComponent } from './notfound/notfound.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  cname:any=""
  load:any=""
  constructor() {}  
  ngOnInit() {  
  }  
  compname(cname:any){
 
    if(cname=='comp1'){
    console.log(cname,true);

        this.load=Comp1Component
    }else if(cname=='comp2'){
      this.load=Comp2Component
    }else if(cname=='comp3'){
      this.load=Comp3Component
    }else if(cname=='comp4'){
      this.load=Comp4Component
    }else{
      this.load=NotfoundComponent
    }


  }

  
}  