import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetComponent } from './asset/asset.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: AssetListComponent },
  { path: 'asset/:id', component: AssetComponent },
  { path: 'asset/new', component: AssetComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
