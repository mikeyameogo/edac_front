import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LazyLoadEvent} from 'primeng/api';
import {Observable} from 'rxjs';
import {createRequestOption} from '../util/request-util';
import {environment} from 'src/environments/environment';
import {IPieceDisponibilite} from "../model/pieceDisponibilite.model";

type EntityResponseType = HttpResponse<IPieceDisponibilite>;
type EntityArrayResponseType = HttpResponse<IPieceDisponibilite[]>;

// const pieceUrl = "assets/data/piece.json";
const pieceUrl = environment.disponibiliteUrl+'/pieces';
const pieceShowUrl = environment.disponibiliteUrl+'/files/recuperer-piece';

@Injectable({
  providedIn: 'root'
})
export class PieceDisponibiliteService {

  constructor(private http:HttpClient) { }
  create(piece: IPieceDisponibilite): Observable<EntityResponseType> {
    return this.http.post<IPieceDisponibilite>(pieceUrl+'/new', piece, { observe: 'response' });
  }

  update(piece: IPieceDisponibilite): Observable<EntityResponseType> {
    return this.http.put<IPieceDisponibilite>(pieceUrl+'/update', piece, { observe: 'response' });
  }


  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPieceDisponibilite>(`${pieceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
   // return this.http.get<IPieceDisponibilite[]>("assets/data/pieces.json", { params: options, observe: 'response' });
     return this.http.get<IPieceDisponibilite[]>(pieceUrl+'/list-page', { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IPieceDisponibilite[]>(pieceUrl+'/list', { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${pieceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IPieceDisponibilite[]>(pieceUrl+'/list', { observe: 'response' });
  }

  async visualiser(fileName: string):Promise<string>{
      const resp = await this.getFile(fileName).toPromise().catch(e=>{
          console.warn("ERROR",e.message());
      });
      if(resp){
          const file = new Blob([resp],{type: 'application/pdf'});
          return URL.createObjectURL(file);
      }else{
          return  '';
      }
  }

  private getFile(fileName: string):Observable<any>{
      const httpOptions = {
          responseType: 'arraybuffer' as 'json'
      };

      const formData: FormData = new FormData();
      formData.append('fileName',fileName);
      return this.http.post(pieceShowUrl,formData,httpOptions);
  }
}
