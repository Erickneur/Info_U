import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ItemI } from '../models/item.interface';
import { finalize, map } from 'rxjs/operators';
import { UniversityI } from '../models/university.interface';
import { OpportunityI } from '../models/opportunity';
import { HistoryI } from '../models/history.interface';
import { FacultyI } from '../models/faculty.interface';
import { ResearchI } from '../models/research.interface';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private afs: AngularFirestore, private spinner: NgxSpinnerService) { }

  public getCarousel(): Observable<ItemI[]>{
    return this.afs.collection('carousel')
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as ItemI;
          const id = a.payload.doc.id;
          return { id, ... data };
        })
      )
    )
  }

  public getDescription(): Observable<ItemI[]>{
    return this.afs.collection('feature')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ItemI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }

  public getUniversities(): Observable<UniversityI[]>{
    return this.afs.collection('university')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as UniversityI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }

  public getFaculties(): Observable<FacultyI[]>{
    return this.afs.collection('faculty')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as FacultyI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }

  public getFaculties2(): Observable<FacultyI[]>{
    return this.afs.collection('faculty')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as FacultyI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }
    
  /*this.firestoreService.colWithIds$('restaurants').pipe(
    switchMap((restaurants: any[]) => { 
      const res = restaurants.map((r: any) => { 
        return this.firestoreService
          .col$(`restaurants/${r.id}/ratings`)
          .pipe(
            map(ratings => Object.assign(restaurant, {ratings}))
          ); 
        }); 
      return combineLatest(...res); 
    })
    ).subscribe(restaurants => console.log(restaurants);*/

  public getOpportunities(): Observable<OpportunityI[]>{
    return this.afs.collection('opportunity')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as OpportunityI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }

  public getHistories(): Observable<HistoryI[]>{
    return this.afs.collection('history')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as HistoryI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }

  public getResearch(): Observable<ResearchI[]>{
    return this.afs.collection('research')
    .snapshotChanges()
    .pipe(
      map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ResearchI;
            const id = a.payload.doc.id;
            return { id, ... data };
          })
        )
    )
  }

  public getOpportunity(id: string): Observable<OpportunityI>{
    return this.afs.doc<OpportunityI>(`opportunity/${id}`).valueChanges();
  }

}
