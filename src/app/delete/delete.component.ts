import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  
  constructor() {
  }
  
  handleAction(action: any) {
    if (action.modalId === '#deleteModal') { 
      this.openLogoutModal(); 
    }
  }

  openLogoutModal() {
    ($('#deleteModal') as any).modal('show');
  }
  delete(){
    ($('#deleteModal') as any).modal('hide');
  }

  
}


