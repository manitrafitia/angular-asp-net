import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './api.model';
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://localhost:7204/api/Users'
  list: User[] = []; //Pour stocker la liste des utilisateurs
  formData: User = new User() //On l'utilise pour la requete post
  formSubmitted: boolean = false; // Pour le submit

  constructor(private httpClient: HttpClient) { }

  //Lister
  refreshList() {
    this.httpClient.get(this.url)
      .subscribe({
        next: res => {
          this.list =res as User[]
        },
        error: err => { console.log(err) }
      })
  }

  //Ajouter
  postUser() {
    return this.httpClient.post(this.url, this.formData)
  }

  //Modifier
  putUser() {
    return this.httpClient.put(this.url + '/' + this.formData.id, this.formData)
  }

  //Supprimer
  deleteUser(id: number) {
    return this.httpClient.delete(this.url + '/' + id)
  }

  //Pour réinitialiser
  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new User()
    this.refreshList()//Actualiser le tableau
    this.formSubmitted = false
  }

}
