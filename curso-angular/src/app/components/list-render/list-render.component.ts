import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})

export class ListRenderComponent {
  animals: Animal[] = []

  animalDetails = ""

  constructor(private listService: ListService){
    this.getAnimals()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals)=> this.animals = animals)
  }

  removeAnimal(animal:Animal){
    this.animals = this.animals.filter((a)=> animal.name != a.name)
    this.listService.remove(animal.id).subscribe()
  }

  showAge(animal: Animal): void{
    if( animal.age == 1)
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano!`
    else
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
