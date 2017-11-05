import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers', component: ServersComponent, children: [
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'something', redirectTo: 'not-found', pathMatch: 'full'} //redirectTo redirects to a specified path
  
];                      // you can use pathMatch: 'full' for redirects or regular component loads.
                        // its optional and helps you avoid angular's top-to-bottom path parsing

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,                      //QUERIES FOUND IN THE SERVERSCOMPONENT
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //routermodule needs to be added to imports in order to work.
  ],              // it also was imported at the top
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
