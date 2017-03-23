import { Component } from '@angular/core';
import { UtilService } from './util.service';

import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  bars;relbar;authorized:boolean=false;
 user;city;mycity;newloc:boolean=true;
count=[0,0,1,2,1,0,1,3,4,2,0,0,1,2,1,0,1,3,4,2,]
clicked=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,]
attending=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]; 
  
 
  onsubmit(){
    if (this.city==undefined||this.city.length<1){}else {
      this._cookieService.put('city', this.city);

     this.newloc=false;this.attendbar(0);//Resets Attendance for new location;
      this.newloc=true;
      this.utilService.getAllBars(this.city).subscribe(bars => {
      this.bars = bars;
    });
     setTimeout(()=>{

        this.relbar=this.bars.businesses;

         },3000)
    }
  }

  attendbar(i){
  
    if (this.newloc==true) {
      this.count[i]+=1;
      this.clicked[i]=false;
      this.attending[i]=true;

    } else {

this.count=[0,0,1,2,1,0,1,3,4,2,0,0,1,2,1,0,1,3,4,2,]
this.clicked=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,]
this.attending=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]; 
 


    }
        
  }
  constructor(private utilService: UtilService,private _cookieService:CookieService) { }

  ngOnInit() {

this.mycity=this._cookieService.get('city');
if (this.mycity==undefined||this.mycity.length<1){

this.utilService.getAllBars("San+Francisco").subscribe(bars => {
      this.bars = bars;
     
    });
  }else{
this.utilService.getAllBars(this.mycity).subscribe(bars => {
      this.bars = bars;
    });

  }
  this.utilService.getUser().subscribe(user => {
      this.user = user;
    });

setTimeout(()=>{

this.relbar=this.bars.businesses;

if(this.user.username==undefined||this.user.username.length<1){
 this.authorized=false;
}else {
 this.authorized=true,
 console.log(this.user);
}

},3000)


  }

  
}
