import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAmpliation } from '../model/ampliation.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';


type EntityResponseType = HttpResponse<IAmpliation>;
type EntityArrayResponseType = HttpResponse<IAmpliation[]>;


const ampliationUrl = environment.detachementUrl+'/ampliations';
@Injectable({
  providedIn: 'root'
})
export class AmpliationService {

  constructor(private http:HttpClient) { }

  create(ampliation: IAmpliation): Observable<EntityResponseType> {
    return this.http.post<IAmpliation>(ampliationUrl +'/new', ampliation, { observe: 'response' });
  }

  update(groupe: IAmpliation): Observable<EntityResponseType> {
    return this.http.put<IAmpliation>(ampliationUrl +'/update', groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAmpliation>(`${ampliationUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAmpliation[]>(ampliationUrl+'/list-page', { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IAmpliation[]>(ampliationUrl+'/list', { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${ampliationUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IAmpliation[]>(ampliationUrl+'/list', { observe: 'response' });
  }

}
