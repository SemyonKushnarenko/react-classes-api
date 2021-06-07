import React, {Component} from 'react'
import Header from '../header'
import RandomChar from '../randomChar'
import ItemList from '../itemList'
import CharDetails from '../charDetails'
import TogglerRandomChar from '../togglerRandomChar'

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
        return (
            <> 
                <Header />
                {randomChar}
                <TogglerRandomChar onToggleRandomChar={this.onToggleRandomChar} show={displayRandomChar}/>
                <ItemList />
                <CharDetails />
            </>
        )
    }
}