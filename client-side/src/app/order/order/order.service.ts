import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreService } from '../../core/core.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order, Item, Txact, Inventory, Report } from '../../class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private appUrl = this.coreService.getURL() + '/order';
  private headers = this.coreService.getHeader();
  public txid: number;

  constructor(
    private http: HttpClient,
    private coreService: CoreService) { }

  setTxid(txactId) {
    this.txid = txactId;
  }

  getTxid() {
    return this.txid;
  }

  getOrders(): Observable<Order[]> {
    return this.http
      .get(this.appUrl + '/all', { headers: this.headers })
      .pipe(map(
        resp => resp as Order[]
      ));
  }

  getOrdersView(): Observable<Order[]> {
    return this.http
      .get(this.appUrl + '/total/all', { headers: this.headers })
      .pipe(map(
        resp => resp as Order[]
      ));
  }
  getOrdersViewP(): Observable<Order[]> {
    return this.http
      .get(this.appUrl + '/total/pending', { headers: this.headers })
      .pipe(map(
        resp => resp as Order[]
      ));
  }
  getOrdersViewF(): Observable<Order[]> {
    return this.http
      .get(this.appUrl + '/total/complete', { headers: this.headers })
      .pipe(map(
        resp => resp as Order[]
      ));
  }
  getOrdersViewBy(id, s): Observable<Order[]> {
    return this.http
      .get(this.appUrl + '/total/'+ id, { headers: this.headers, params:{'status': s} })
      .pipe(map(
        resp => resp as Order[]
      ));
  }
  getOrdersViewByNoS(id): Observable<Order[]> {
    return this.http
      .get(this.appUrl + '/total/search/' + id, { headers: this.headers })
      .pipe(map(
        resp => resp as Order[]
      ));
  }

  getOrdersByTxactid(txid: number): Observable<Order[]> {
    const url = this.appUrl + '/txact/' + txid;
    return this.http
      .get(url, { withCredentials: true, headers: this.headers })
      .pipe(map(resp => resp as Order[]));
  }

  getOrder(id: number): Observable<Order> {
    const url = this.appUrl + '/' + id;
    return this.http
      .get(url, { withCredentials: true, headers: this.headers })
      .pipe(map(resp => resp as Order));
  }

  createOrder(ord: Order): Observable<number> {
    console.log(ord);
    return this.http.post(this.appUrl,ord,{ headers: this.headers}).pipe(
        map(resp => resp as number));
  }

  deleteOrder(ord: Order): Observable<Order> {
    const url = this.appUrl + '/' + ord.id;
    console.log(url);
    return this.http
      .delete(url, { headers: this.headers, withCredentials: true })
      .pipe(map(resp => resp as Order));
  }

  addItem(ord: Order, ite: Item, amount: Number): Observable<Order> {
    const body = {};
    const url = this.appUrl + '/' + ord.id + '/inventory/' + ite.id;
    console.log(url);
    return this.http
      .put(url, body, { headers: this.headers, withCredentials: true })
      .pipe(map(resp => resp as Order));
  }

  subItem(ord: Order, inv: Inventory): Observable<Order> {
    const url = this.appUrl + '/' + ord.id + '/inventory/' + inv.id;
    console.log(url);
    return this.http
      .delete(url, { headers: this.headers, withCredentials: true })
      .pipe(map(resp => resp as Order));
  }

  // Deletes all Orders attached to this Txact id
  empty(ord: Order): Observable<Object> {
    const url = this.appUrl + '/' + ord.tx.id;
    console.log(url);
    return this.http
      .delete(url, { headers: this.headers, withCredentials: true })
      .pipe(map(resp => resp));
  }

  getReport(): Observable<Report> {
    return this.http
    .get(this.appUrl + '/report', { headers: this.headers })
    .pipe(map(
      resp => resp as Report
    ));
  }
}
