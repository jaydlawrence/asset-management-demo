import { Component, OnInit, Input  } from '@angular/core';
import { Asset } from '../assets';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  @Input() asset: Asset;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assetService: AssetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAsset();
  }

  getAsset(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.assetService.getAsset(id)
      .subscribe(asset => this.asset = asset);
    } else {
      this.asset = new Asset();
    }
  }

  goToList(): void {
    this.router.navigateByUrl('/list');
  }

  save(): void {
    this.assetService.updateAsset(this.asset)
      .subscribe(() => this.goToList());
  }

  create(): void {
    this.assetService.addAsset(this.asset)
      .subscribe(() => this.goToList());
  }
}
