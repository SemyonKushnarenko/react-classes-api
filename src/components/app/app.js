import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../header'
import RandomChar from '../randomChar'
import CharacterPage from '../pages/characterPage'
import HousePage from '../pages/housePage/'
import BookPage from '../pages/bookPage/'
import BookItem from '../pages/bookItem/'
import styled from 'styled-components'

const AppDiv = styled.div`    
    overflow-x: hidden;
    background: url('got.jpeg') center center no-repeat;
    background-size: cover;
    font-size: 16px;
    height: 100%;	
`

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
            <Router>
                <AppDiv> 
                    <Header />
                    {randomChar}
                    <button
                        onClick={this.onToggleRandomChar}>
                        {toggleNote}
                    </button>
                
                    <Route path="/characters" component={CharacterPage}/>
                    <Route path="/houses" component={HousePage}/>
                    <Route path="/books" exact component={BookPage}/>
                    <Route path="/books/:id" component={({match}) => {
                        return <BookItem itemId={match.params.id}/>
                    }}/>
                </AppDiv>
            </Router>
        )
    }
}