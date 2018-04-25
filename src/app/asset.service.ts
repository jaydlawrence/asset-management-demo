import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Asset } from './assets';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AssetService {
  private assetUrl = 'api/asset';

  constructor(
    private http: HttpClient,
  ) { }

  getAssets (): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.assetUrl)
      .pipe(
        catchError(this.handleError('getAssets', []))
      );
  }

  getAsset(id: number): Observable<Asset> {
    const url = `${this.assetUrl}/${id}`;
    return this.http.get<Asset>(url).pipe(
      catchError(this.handleError<Asset>(`getAsset id=${id}`))
    );
  }

  updateAsset (asset: Asset): Observable<any> {
    return this.http.put(this.assetUrl, asset, httpOptions).pipe(
      catchError(this.handleError<any>('updateAsset'))
    );
  }

  addAsset (asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(this.assetUrl, asset, httpOptions).pipe(
      catchError(this.handleError<Asset>('addAsset'))
    );
  }

  deleteAsset (asset: Asset | number): Observable<Asset> {
    const id = typeof asset === 'number' ? asset : asset.id;
    const url = `${this.assetUrl}/${id}`;

    return this.http.delete<Asset>(url, httpOptions).pipe(
      catchError(this.handleError<Asset>('deleteAsset'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
