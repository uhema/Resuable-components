import { Component, OnInit, ViewChild, ElementRef , AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  searchToggle: boolean = false;
  showPopOver:boolean = false;
  screenWidth:any;
  constructor() { }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
    @HostListener('window:resize', ['$event'])
    resizeHandle(event?){
 
   this.screenWidth = window.innerWidth;
   if(this.screenWidth <= 768)
   this.setMobileinitialscreen();
    };
    @HostListener('window:onload', ['$event'])
    onloadHandle(event?){
   
   this.screenWidth = window.innerWidth;
   console.log(this.screenWidth);
   if(this.screenWidth <= 768)
      this.setMobileinitialscreen();
    }
    setMobileinitialscreen(){
  
      this.searchToggle=true;
    }
  ngOnInit() {
    if(window.innerWidth <= 768){
      this.setMobileinitialscreen();
    }
  }
  onDisplayLeftPannel(){
    this.searchToggle = !this.searchToggle;
  }
 showPop($event){
   this.showPopOver=!this.showPopOver;

}
closeShowPopOver($event){
  console.log("showpop");
  this.showPopOver=!this.showPopOver;
  return this.showPopOver;
}


}
