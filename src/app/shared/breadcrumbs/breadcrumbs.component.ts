import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo : string;
  public tituloSub$ : Subscription;
  constructor(private router: Router) {

    this.tituloSub$ = this.getArgumentosRuta(). subscribe(
      event => {
        console.log(event);
        this.titulo = event.titulo;
        document.title = `Admin Pro - ${this.titulo}`;
      }
    )

   }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getArgumentosRuta(){

    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild ==null ),
      map(  (event: ActivationEnd) => event.snapshot.data),
    );
    /*
    subscribe(
      event => {
        console.log(event);
        this.titulo = event.titulo;
        document.title = `Admin Pro - ${this.titulo}`;
      }
    )*/
  }
}
