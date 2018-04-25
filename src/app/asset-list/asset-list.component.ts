import { Component, OnInit } from '@angular/core';
import { Asset } from '../assets';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  assets: Asset[];

  constructor( private assetService: AssetService ) { }

  ngOnInit() {
    this.getAssets();
  }

  getAssets(): void {
    this.assetService.getAssets()
      .subscribe(assets => this.assets = assets);
  }
}
