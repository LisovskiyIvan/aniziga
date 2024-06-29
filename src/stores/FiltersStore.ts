import { makeAutoObservable } from "mobx"

class Filters {

    private genre = ''
    private type = ''
    private status = ''



    constructor() {
        makeAutoObservable(this)
    }


    getGenre() {
        return this.genre
    }

    getType() {
        return this.type
    }

    getStatus() {
        return this.status
    }


    setGenre(genre: string) {
        this.genre = genre
    }

    setType(type: string) {
        this.type = type
    }

    setStatus(status: string) {
        this.status = status
    }


}

export const filtersStore = new Filters()