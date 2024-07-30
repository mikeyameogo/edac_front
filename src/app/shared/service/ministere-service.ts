import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMinistere } from '../model/ministere.model';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';


type EntityResponseType = HttpResponse<IMinistere>;
type EntityArrayResponseType = HttpResponse<IMinistere[]>;


const ministereUrl = environment.detachementUrl+'/ministeres/list';
const ministereBaseUrl = environment.detachementUrl+'/ministeres';

@Injectable({
  providedIn: 'root'
})
export class MinistereService {

  constructor(private http:HttpClient) { }

  create(ministere: IMinistere): Observable<EntityResponseType> {
    return this.http.post<IMinistere>(ministereBaseUrl, ministere, { observe: 'response' });
  }

  update(groupe: IMinistere): Observable<EntityResponseType> {
    return this.http.put<IMinistere>(ministereBaseUrl, groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IMinistere>(`${ministereBaseUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMinistere[]>(`${ministereBaseUrl}/list-page`, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IMinistere[]>(`${ministereBaseUrl}/list-page`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${ministereBaseUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IMinistere[]>(`${ministereBaseUrl}/list`, { observe: 'response' });
  }

}
