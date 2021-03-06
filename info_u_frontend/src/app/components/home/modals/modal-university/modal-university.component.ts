import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OpportunityI } from 'src/app/shared/models/opportunity';
import { UniversityI } from 'src/app/shared/models/university.interface';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngbd-modal-university',
  templateUrl: './modal-university.component.html',
  styleUrls: ['./modal-university.component.css']
})
export class ModalUniversityComponent {

  closeResult: string;

  public close = 'Cerrar';
  public inscription = 'Inscripción';
  public careers = 'Carreras';
  public locations = 'Ubicaciones';

  @Input()
  public university: UniversityI;

  opportunities$: Array<OpportunityI>;

  constructor(private modalService: NgbModal, private router: Router, private dataSvc: GetDataService) {
  }

  open(content: any, options?: NgbModalOptions) {
    this.opportunities$ = new Array();
    this.university.description = this.university.description.replace("&#34;", "\"");
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title', windowClass : "myCustomModalClass"}).result.then((result) => {
    }, (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  goto(): void {
    if (this.university.img != '') {
      //this.router.navigate([this.university.web]);
    }
  }

}
