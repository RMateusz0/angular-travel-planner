import { Component, OnInit } from '@angular/core';


interface ItemObjectInterface {
  itemInListName:string;
  categoryOfItemInList:string;
}



@Component({
  selector: 'app-to-take-list',
  templateUrl: './to-take-list.component.html',
  styleUrls: ['./to-take-list.component.scss']
})
export class ToTakeListComponent implements OnInit {
  itemNameInputField: string = '';
  selectedCategoryByUser: string = '';
  availableCategories: string[] = [];
  savedItemsToTakeArray: ItemObjectInterface[] = [];
  actuallyShowedCategory: string = 'all';

  ngOnInit() {
    this.availableCategories = ['żywność', 'lekarstwa', 'dla dzieci', 'odzież', 'higiena', 'elektronika', 'akcesoria', 'inne'];


    // inicjalizacja tablicy z posiadanymi zadaniami --- LOCAL STORAGE LUB DOMYŚLNE WARTOŚCI
    const fromLocalStorageArrayItemsToTakeString: string | null = localStorage.getItem('arrayItemsToTake');
    if (fromLocalStorageArrayItemsToTakeString) {
      const fromLocalStorageArrayItemsToTakeObject: ItemObjectInterface[] = JSON.parse((fromLocalStorageArrayItemsToTakeString) as string) 
      this.savedItemsToTakeArray = fromLocalStorageArrayItemsToTakeObject
    } else {
        this.savedItemsToTakeArray = [
          { itemInListName: 'konserwy', categoryOfItemInList: 'żywność' },
          { itemInListName: 'nożyk', categoryOfItemInList: 'akcesoria' },
          { itemInListName: 'szampon', categoryOfItemInList: 'higiena' },
          { itemInListName: 'pampersy', categoryOfItemInList: 'dla dzieci' },
          { itemInListName: 'apteczka', categoryOfItemInList: 'inne' }
        ] 
    }
    //
  
  }


  saveItem():void {
    if (this.itemNameInputField && this.selectedCategoryByUser) {
      let NewItemObject: ItemObjectInterface = { itemInListName: this.itemNameInputField, categoryOfItemInList: this.selectedCategoryByUser }
      this.savedItemsToTakeArray.push(NewItemObject);
      this.itemNameInputField = '';
      this.selectedCategoryByUser = '';

    // local storage update
    localStorage.setItem('arrayItemsToTake', JSON.stringify(this.savedItemsToTakeArray));
    //
    } 
  }


  removeItem(item: string) {
    this.savedItemsToTakeArray = this.savedItemsToTakeArray.filter(itemObjInList => { return itemObjInList.itemInListName != item })
    
    // local storage update
    localStorage.setItem('arrayItemsToTake', JSON.stringify(this.savedItemsToTakeArray));
    //
  }



  showOneOfCategory(category: string) {
    this.actuallyShowedCategory = category;
  }

  showAllOfCategories() {
    this.actuallyShowedCategory = 'all';
  }

}

