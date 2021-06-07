import React, {Component} from 'react'
import styled from 'styled-components'
import GotService from '../../services/gotService'
import Spinner from '../spinner'
import Error from '../error'

const RandomBlock = styled.div`
    background: linear-gradient(21deg, #2A4480, #263048);
    box-shadow: -4px -4px 10px #D78F00, 4px 4px 10px #D78F00;
    max-width: 200px;
    height: 320px;
    border-radius: 20px;
    padding: 25px 25px 15px 25px;
    margin: 40px auto;
    color: #FFEFD0;
    h3 {
        margin-bottom: 20px;
        text-align: center;
    }
    ul{
        list-style: none;
    }
`,
Term = styled.span`font-weight: bold;`

export default class RandomChar extends Component {
    constructor() {
        super()
        this.updateData()
    }

    gotService = new GotService()
    state = {
        char: {},
        loading: true,
        errorStatus: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    onError = () => {
        this.setState({
            errorStatus: true,
            loading: false
        })
    }

    updateData = () => {
        const id = Math.round(Math.random()*140 + 25)//25-165
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, errorStatus} = this.state
        
        const spinner = loading?<Spinner/>:null
        const content = !loading&&!errorStatus?<View char={char}/>:null
        const error = errorStatus?<Error errorMessage="Sorry, but no info"/>:null

        return (
            <RandomBlock>
                {spinner}
                {error}
                {content}
            </RandomBlock>
        )
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h3>Random Character: <br/>{name}</h3>
            <ul>
                <li>
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </li>
                <li>
                    <Term>Born </Term>
                    <span>{born}</span>
                </li>
                <li>
                    <Term>Died </Term>
                    <span>{died?died:'No info'}</span>
                </li>
                <li>
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
