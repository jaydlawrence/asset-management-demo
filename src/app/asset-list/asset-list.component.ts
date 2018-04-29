import { Component, OnInit, ViewChild } from '@angular/core';
import { Asset } from '../assets';
import { AssetService } from '../asset.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  assets: Asset[];
  dataSource: MatTableDataSource<Asset>;
  displayedColumns = ['name', 'type', 'quantity'];

  @ViewChild(MatSort) sort: MatSort;

  constructor( private assetService: AssetService ) { }

  ngOnInit() {
    this.getAssets();
  }

  getAssets(): void {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assets = assets;
        this.dataSource = new MatTableDataSource(this.assets);
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    if (filterValue) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    } else {
      this.dataSource.filter = null;
    }
  }
}
