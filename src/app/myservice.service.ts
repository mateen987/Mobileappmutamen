import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  
  // url = 'http://dreamblock.co.za/apiv1.php?c=spvmarketing';
url="https://mutamen.herokuapp.com/getdata";
posturl= "https://mutamen.herokuapp.com/data";
  constructor(private http: HttpClient) { }


  
  getData(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(results => results)
    );
  }

  postdata(data){
     return this.http.post(this.posturl,data ,httpOptions).pipe(
      map(results => results)
    );
  }
}