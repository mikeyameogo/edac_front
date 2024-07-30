import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticle } from '../model/article.model';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<IArticle>;
type EntityArrayResponseType = HttpResponse<IArticle[]>;

const articleUrl = environment.detachementUrl+'/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }
  create(article: IArticle): Observable<EntityResponseType> {
    return this.http.post<IArticle>(articleUrl+'/new', article, { observe: 'response' });
  }

  update(article: IArticle): Observable<EntityResponseType> {
    return this.http.put<IArticle>(articleUrl+'/update', article, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IArticle>(`${articleUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
   // return this.http.get<IArticle[]>("assets/data/articles.json", { params: options, observe: 'response' });
     return this.http.get<IArticle[]>(articleUrl+'/list-page', { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IArticle[]>(articleUrl+'/list', { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${articleUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IArticle[]>(articleUrl+'/list', { observe: 'response' });
  }
}
