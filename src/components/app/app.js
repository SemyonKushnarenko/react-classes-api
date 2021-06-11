import React, {Component} from 'react'
import Header from '../header'
import RandomChar from '../randomChar'
import CharacterPage from '../pages/characterPage'
import HousePage from '../pages/housePage/'
import BookPage from '../pages/bookPage/'

export default class App extends Component{
    state = {
        displayRandomChar: true
    }


    onToggleRandomChar = () => {
        this.setState(
            {displayRandomChar: !this.state.displayRandomChar}
        )
    }

    render() {
        const {displayRandomChar} = this.state
        const randomChar = displayRandomChar?<RandomChar/>:null
        const toggleNote = displayRandomChar?'Close':'Show another' 
        return (
            <> 
                <Header />
                {randomChar}
                <button
                    onClick={this.onToggleRandomChar}>
                    {toggleNote}
                </button>
                <CharacterPage />
                <BookPage />
                <HousePage />
            </>
        )
    }
}