import React, {Component} from 'react'
import Header from '../header'
import RandomChar from '../randomChar'
import ItemList from '../itemList'
import CharDetails from '../charDetails'

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
                    onClick={this.onToggleRandomChar}>{toggleNote}</button>
                <ItemList />
                <CharDetails />
            </>
        )
    }
}