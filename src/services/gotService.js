export default class gotService {
    _apiBase = 'https://anapioficeandfire.com/api'
    getResourse = async url => {
        const res = await fetch(this._apiBase + url)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}. Status: ${res.status}`)
        } 
        return await res.json()
    }

    getAllCharacters = async page => {
        const res = await this.getResourse(`/characters?page=${page}&pageSize=10`);
        return res.map(this._transformCharacters)
    }

    getCharacter = async number => {
        const character = await this.getResourse(`/characters/${number}`);
        return this._transformCharacters(character)
    }
    
    getAllBooks = async page => {
        const res = await this.getResourse(`/books?page=${page}&pageSize=10`);
        return res.map(this._transformBooks)
    }

    getBook = async number => {
        const book = await this.getResourse(`/books/${number}`);
        return this._transformBooks(book)
    }
    
    getAllHouses = async page => {
        const res = await this.getResourse(`/houses?page=${page}&pageSize=10`);
        return res.map(this._transformHouses)
    }

    getHouse = async number => {
        const house = await this.getResourse(`/houses/${number}`);
        return this._transformHouses(house)
    }

    _transformCharacters = char => {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture),
            key: this.makeKey(char)
        }
    }

    _transformBooks = book => {
        return {
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released).slice(0, 4),
            key: this.makeKey(book)
        }
    }

    _transformHouses = house => {
        return {
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapon: this.isSet(house.ancestralWeapon),
            key: this.makeKey(house)
        }
    }

    isSet = prop => {
        if(!prop) {
            return 'No info'
        } else {
            return prop
        }
    }

    makeKey = item => item.url.replace(/[^\d]/g, '')
}