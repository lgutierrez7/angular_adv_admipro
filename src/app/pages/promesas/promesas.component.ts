import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    this.getusuarios().then( users =>{
      console.log('usuarios' + users);
    });
  }

  getusuarios(){

    return new Promise(resolve =>{

        fetch('https://reqres.in/api/users')
        .then(response => response.json() )
        .then(body => resolve( body.data));

    });
  }
}
