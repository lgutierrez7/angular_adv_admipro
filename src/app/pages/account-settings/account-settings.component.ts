import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector("#theme");
  //public links: NodeListOf<Element>;
  constructor(private  settingService: SettingService) { }

  ngOnInit(): void {
    //this.links =  document.querySelectorAll('.selector');
    this.settingService.checkCurrentTheme();
  }

  changeTheme(theme:string){

    this.settingService.changeTheme(theme);


  }

  /*
  checkCurrentTheme(){


    this.links.forEach(element=>{

      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme.getAttribute('href');

      if(btnThemeUrl===currentTheme){
        element.classList.add('working');
      }

    })
    console.log(this.links);

  }*/
}
