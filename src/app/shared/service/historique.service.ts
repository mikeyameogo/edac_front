import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHistorique } from '../model/historique.model';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<IHistorique>;
type EntityArrayResponseType = HttpResponse<IHistorique[]>;


const historiqueUrl = environment.historiqueUrl;

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  constructor(private http:HttpClient) { }

  create(historique: IHistorique): Observable<EntityResponseType> {
    return this.http.post<IHistorique>(historiqueUrl, historique, { observe: 'response' });
  }

  update(groupe: IHistorique): Observable<EntityResponseType> {
    return this.http.put<IHistorique>(historiqueUrl, groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IHistorique>(`${historiqueUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IHistorique[]>(historiqueUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IHistorique[]>(historiqueUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${historiqueUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IHistorique[]>(historiqueUrl, { observe: 'response' });
  }


}