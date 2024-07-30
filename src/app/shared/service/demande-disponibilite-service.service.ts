import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDemande } from '../model/demande.model';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';
import { environment } from 'src/environments/environment';
import {IPieceJointe} from "../model/pieceJointe.model";
import { IHistorique } from '../model/historique.model';

type EntityResponseType = HttpResponse<IDemande>;
type EntityArrayResponseType = HttpResponse<IDemande[]>;


// const demandeUrl = "assets/data/demande.json";
const demandeUrl = environment.disponibiliteUrl+'/demandes';
const reportUrl= environment.reportingUrl;
const pieceUrl= environment.detachementUrl+'/piece-jointes';
const historiqueUrl= environment.detachementUrl+'/positions';
const exportUrl= environment.detachementUrl+'/exports';

@Injectable({
  providedIn: 'root'
})
export class DemandeDisponibiliteService {

  constructor(private http:HttpClient) { }

  create(demande: any): Observable<EntityResponseType> {
    return this.http.post<IDemande>(demandeUrl+'/new', demande, { observe: 'response' });
  }

  save(demande: any): Observable<EntityResponseType> {
    return this.http.post<IDemande>(demandeUrl+'/new', demande, { observe: 'response' });
  }

  update(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.put<IDemande>(demandeUrl+'/update', groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDemande>(`${demandeUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDemande[]>(demandeUrl+'/list-page', { params: options, observe: 'response' });
  }

  findDemandesAgents(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDemande[]>(demandeUrl+'/demandesAgents', { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IDemande[]>(demandeUrl+'/list', { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${demandeUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IDemande[]>(demandeUrl+'/list', { observe: 'response' });
  }

  reception(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.post<IDemande>(`${demandeUrl}/receptionner/${groupe.id}`, groupe.historique, { observe: 'response' });
  }




  verifierProjetSTDCMEF(groupe: IDemande): Observable<EntityResponseType>{
    return this.http.post<IDemande>(`${demandeUrl}/verifier-projet/${groupe.id}`, groupe.historique, { observe: 'response' });

  }

 viserProjetDCMEF(demande: IDemande): Observable<EntityResponseType>{
  return this.http.post<IDemande>(`${demandeUrl}/viser-projet/${demande.id}`, demande.historique, { observe: 'response' });
  }




  aviserSH(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.post<IDemande>(`${demandeUrl}/avis-sh/${groupe.id}`, groupe.historique, { observe: 'response' });
  }

  aviserDRH(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.post<IDemande>(`${demandeUrl}/avis-drh/${groupe.id}`, groupe.historique, { observe: 'response' });
  }

  aviserDGFP(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.post<IDemande>(`${demandeUrl}/avis-dgfp/${groupe.id}`, groupe.historique, { observe: 'response' });
  }

  aviserSG(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.post<IDemande>(`${demandeUrl}/valider-demande/${groupe.id}`, groupe.historique, { observe: 'response' });
  }

  rejeterSG(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.post<IDemande>(`${demandeUrl}/rejet-new/${groupe.id}`, groupe.historique, { observe: 'response' });
  }


  statDemande(){
    return this.http.get<IDemande[]>(reportUrl+'/check-total-globale', { observe: 'response' });
  }

  findPiecesByDemande(idDemande: number): Observable<HttpResponse<IPieceJointe[]>> {
      return this.http.get<IPieceJointe[]>(`${pieceUrl}/list/${idDemande}`, { observe: 'response' });
  }

  findHistoriquesByDemande(idDemande: number): Observable<HttpResponse<IHistorique[]>> {
    return this.http.get<IHistorique[]>(`${historiqueUrl}/list/${idDemande}`, { observe: 'response' });
  }

    findMyDmds(req?: any,matricule?: string): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IDemande[]>(`${demandeUrl}/list-page/mes-demandes/${matricule}`, { params: options, observe: 'response' });
    }

    findAgentDmds(req?: any,matricule?: string): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IDemande[]>(`${demandeUrl}/list-page/demandes-agent/${matricule}`, { params: options, observe: 'response' });
    }

    findMinistereDmds(req?: any,matricule?: string): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<IDemande[]>(`${demandeUrl}/list-page/demandes-ministere/${matricule}`, { params: options, observe: 'response' });
  }

    printArrete(dmdId: number,isRegularisation: boolean): Observable<Blob> {
        return this.http.get(`${exportUrl}/arrete-detachement/${dmdId}/${isRegularisation}`, { responseType: 'blob' });
    }

    elaborationSTDRH(demande: IDemande): Observable<EntityResponseType> {
        return this.http.post<IDemande>(`${demandeUrl}/elaborer/${demande.id}`, demande.historique, { observe: 'response' });
    }
    validerElaborationDRH(demande: IDemande): Observable<EntityResponseType> {
        return this.http.post<IDemande>(`${demandeUrl}/valider-projet/${demande.id}`, demande.historique, { observe: 'response' });
    }


    rejeterElaborationSG(demande: IDemande): Observable<EntityResponseType> {
      return this.http.post<IDemande>(`${demandeUrl}/rejeter-projet/${demande.id}`, demande.historique, { observe: 'response' });
  }

    signerElaborationSG(demande: IDemande): Observable<EntityResponseType> {
        return this.http.post<IDemande>(`${demandeUrl}/signer-projet/${demande.id}`, demande.historique, { observe: 'response' });
    }


    
    imputerCSTDisp(id: number, matriculeImputation: string, groupe: IDemande): Observable<EntityResponseType> {
      return this.http.post<IDemande>(
        `${demandeUrl}/imputer/${id}/${matriculeImputation}`,
        groupe.historique,
        { observe: 'response' }
      );
    }
    

    
}
