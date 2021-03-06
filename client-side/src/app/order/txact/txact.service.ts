import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreService } from '../../core/core.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Txact } from '../../class/txact';


@Injectable({
  providedIn: 'root'
})
export class TxactService {
private appUrl = this.coreService.getURL()+'/txact';
  //private head = new HttpHeaders({'Content-Type': 'application/json' });
  private head = this.coreService.getHeader();
  constructor(
    private http: HttpClient,
    private coreService: CoreService
  ) { }

  updateTransaction(tx: Txact): Observable<Txact> {
    const url = this.appUrl + '/' + tx.id;
    const body = JSON.stringify(tx);
    return this.http.put(url, body, { headers: this.head, withCredentials: true }).pipe(
      map(
      resp => resp as Txact
    ));
  }
  getTransaction(id: number): Observable<Txact> {
    const url = this.appUrl + '/' + id;
    return this.http
    .get(url,{withCredentials: true, headers: this.head})
    .pipe(map(resp => resp as Txact));
  }
  
  createTransaction(): Observable<number> {
    return this.http.post(this.appUrl,{headers: this.head}).pipe(
      map
      (resp => {
        if (resp !== null) {
          return resp as number;
      }
    }
    ));
  }
}
