import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';
import {GetAllTypeStructureResponse, ITypeStructure} from "../model/typeStructure.model";

type EntityResponseType = HttpResponse<ITypeStructure>;
type EntityArrayResponseType = HttpResponse<ITypeStructure[]>;


const typeStructureUrl = environment.detachementUrl+'/type-structures';

@Injectable({
  providedIn: 'root'
})
export class TypeStructureService {

  constructor(private http:HttpClient) { }

  create(typeStructure: ITypeStructure): Observable<EntityResponseType> {
    return this.http.post<ITypeStructure>(typeStructureUrl, typeStructure, { observe: 'response' });
  }

  update(typeStructure: ITypeStructure): Observable<EntityResponseType> {
    return this.http.put<ITypeStructure>(typeStructureUrl, typeStructure, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypeStructure>(`${typeStructureUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypeStructure[]>(`${typeStructureUrl}/list-page`, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<ITypeStructure[]>(`${typeStructureUrl}/list-page`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${typeStructureUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ITypeStructure[]>(`${typeStructureUrl}/list`, { observe: 'response' });
  }

  getAll(event?: LazyLoadEvent): Observable<any> {
    return this.http.get(typeStructureUrl, { observe: 'response' })
    .pipe(map(response => {
        let typeStructureResponse: GetAllTypeStructureResponse = {
          typeStructures: response.body as ITypeStructure[]
        };
        return typeStructureResponse;
      }));
  }
}
