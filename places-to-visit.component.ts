import { Component, OnInit } from '@angular/core';


interface attractionObject {
  attractionName:string;
  attractionPrice?:number;
  attractionDate?:string;
  attractionTime?:string;
  attractionNotes?:string;
}



@Component({
  selector: 'app-places-to-visit',
  templateUrl: './places-to-visit.component.html',
  styleUrls: ['./places-to-visit.component.scss']
})
export class PlacesToVisitComponent implements OnInit {
  attractionNameInInputField: string = '';
  attractionPriceInInputField: number = 0;
  attractionDateInInputField: string = '';
  attractionTimeInInputField: string = '';
  attractionNotesInInputField: string = '';
  attractionSavedList: attractionObject[] = []

ngOnInit() {

  // inicjalizacja tablicy z posiadanymi zadaniami --- LOCAL STORAGE LUB DOMYŚLNE WARTOŚCI
      const fromLocalStorageArrayPlacestoVisitString: string | null = localStorage.getItem('arrayPlaceToVisit');
      if (fromLocalStorageArrayPlacestoVisitString) {
        const fromLocalStorageArrayPlacestoVisitObject: attractionObject[] = JSON.parse((fromLocalStorageArrayPlacestoVisitString) as string) 
        this.attractionSavedList = fromLocalStorageArrayPlacestoVisitObject
      } else {
        this.attractionSavedList = [
          { 
            attractionName: 'ZOO',
            attractionPrice: 35,
            attractionDate: '2023-03-09',
            attractionTime: '10:00',
            attractionNotes: ''
           },
           { 
            attractionName: 'Wystawa Muzeum Narodowego',
            attractionPrice: 25,
            attractionDate: '2023-03-10',
            attractionTime: '14:00',
            attractionNotes: 'Ewentualnie Teatr Narodowy'
           }
        ]
      }
  //


}

addAtractionToList() {
  if (this.attractionNameInInputField) {
    this.attractionSavedList.push(
      {
        attractionName: this.attractionNameInInputField,
        attractionPrice: this.attractionPriceInInputField,
        attractionDate: this.attractionDateInInputField,
        attractionTime: this.attractionTimeInInputField,
        attractionNotes: this.attractionNotesInInputField
      }
    )
  }
  
  this.attractionNameInInputField = '';
  this.attractionPriceInInputField = 0;
  this.attractionDateInInputField = '';
  this.attractionTimeInInputField = '';
  this.attractionNotesInInputField = '';

    // local storage update
    localStorage.setItem('arrayPlaceToVisit', JSON.stringify(this.attractionSavedList));
    //
    
}

removeAttraction(removingAttractionWithName:string) {
  this.attractionSavedList = this.attractionSavedList.filter(itemObjInList => { return itemObjInList.attractionName != removingAttractionWithName })
    
  // local storage update
  localStorage.setItem('arrayPlaceToVisit', JSON.stringify(this.attractionSavedList));
  //

}

}
