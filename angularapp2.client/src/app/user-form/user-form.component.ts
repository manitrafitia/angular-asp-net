import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, NgFor } from '@angular/common';
import { NgForm, FormsModule } from "@angular/forms";
import { User } from '../shared/api.model'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class UserFormComponent {
  constructor(public service: ApiService, private toastr: ToastrService) { }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm) {
    this.service.postUser()//Insèrer User
      .subscribe({//Ce qui se produit après l'insertion
        next: us => {
          this.service.list = us as User[],
            this.service.resetForm(form),
            this.toastr.success('Ajouté avec succès')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putUser()//Insèrer User
      .subscribe({//Ce qui se produit après l'insertion
        next: us => {
          this.service.list = us as User[],
            this.service.resetForm(form),
            this.toastr.success('Ajouté avec succès')
        },
        error: err => { console.log(err) }
      })
  }
}
