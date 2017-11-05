import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  //the 'snapshot' and 'params' below are part of the built in 'ActivatedRoute' object
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']  // using the snapshot method is not dynamic. Use observable
    };
    this.route.params //params is an observable
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name']; // NOTE: even when the user leaves a component, the observables live on.
        },                                 //   to destroy the observable, you must unsubscribe along with ngDestroy
        (error)=>{
          alert(error)
        }
      )
  }

}
