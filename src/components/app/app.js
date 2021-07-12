import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../header'
import RandomChar from '../randomChar'
import CharacterPage from '../pages/characterPage'
import HousePage from '../pages/housePage/'
import BookPage from '../pages/bookPage/'
import BookItem from '../pages/bookItem/'
import styled from 'styled-components'
import img from './got.jpeg'

const AppDiv = styled.div`    
    overflow-x: hidden;
    background: url('${img}') center center no-repeat;
    background-size: cover;
    font-size: 16px;
    height: 100%;
    padding: 0;
    margin: 0;
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
            <AppDiv> 
                <Header />
                {randomChar}
                <button
                    onClick={this.onToggleRandomChar}>
                    {toggleNote}
                </button>
                    <Switch>    
                        <Route path="/characters" component={CharacterPage}/>
                        <Route path="/houses" component={HousePage}/>
                        <Route path="/books/" exact component={BookPage}/>
                        <Route path="/books/:id" render={({match}) => {
                            return <BookItem itemId={match.params.id}/>
                        }}/>
                    </Switch>
            </AppDiv>
        )
    }
}