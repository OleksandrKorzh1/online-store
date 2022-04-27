import {makeAutoObservable} from "mobx";

export default class TypeStore {

    constructor() {
        this._types = [];
        this._selectedCategory = {};
        this._categories = [];
        this._page = 1
        this._totalCount = 0
        this._limit = 9
        makeAutoObservable(this)
    }

    setCategories(value) {
        this._categories = value;
    }
    setSelectedCategory(category){
        this.setPage(1)
        this._selectedCategory=category
    }
    setTypes(types) {
        this._types = types
    }

    // setSelectedType(type) {
    //
    //     this._selectedType = type
    // }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get selectedType() {
        return this._selectedType
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
    get categories() {
        return this._categories;
    }
    get selectedCategory(){
        return this._selectedCategory
    }
}





