import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component'
import { User } from '../shared/api.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CommonModule, UserFormComponent],
  standalone: true
})
export class UserComponent implements OnInit {
  constructor(public service: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }


  //// Affiche les données selectionné dans le tableau sur le formulaire
  populateForm(selectedRecord: User) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer?'))
      this.service.deleteUser(id)
        .subscribe({
          next: us => {
            //this.service.list = us as User[]
            //this.toastr.error('Suprimé avec succès', 'Utilisateur')
            this.service.refreshList();
          },
          error: err => { console.log(err) }
        })
  }
}
