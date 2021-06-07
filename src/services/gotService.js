export default class GotService {
    _apiBase = 'https://anapioficeandfire.com/api'
    async getResourse(url) {
        const res = await fetch(this._apiBase + url)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}. Status: ${res.status}`)
        } 
        return await res.json()
    }

    async getAllCharacters() {
        const res = await this.getResourse('/characters/');
        return res.map(this._transformCharacters)
    }

    async getCharacter(number) {
        const character = await this.getResourse(`/characters/${number}`);
        return this._transformCharacters(character)
    }
    
    async getAllBooks() {
        const res = await this.getResourse('/books/');
        return res.map(this._transformBooks)
    }

    async getBook(number) {
        const book = await this.getResourse(`/books/${number}`);
        return this._transformBooks(book)
    }
    
    async getAllHouses() {
        const res = await this.getResourse('/houses/');
        return res.map(this._transformHouses)
    }

    async getHouse(number) {
        const house = await this.getResourse(`/houses/${number}`);
        return this._transformHouses(house)
    }

    _transformCharacters(char) {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }

    transformBooks(book) {
        return {
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        }
    }

    transformHouses(house) {
        return {
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapon: this.isSet(house.ancestralWeapon)
        }
    }

    isSet(prop) {
        if(!prop) {
            return 'No info'
        } else {
            return prop
        }
    }
}