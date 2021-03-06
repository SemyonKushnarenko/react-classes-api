import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import gotService from '../../services/gotService'
import Spinner from '../spinner'
import Error from '../error'

const RandomBlock = styled.div`
    background: linear-gradient(21deg, #2A4480, #263048);
    box-shadow: 0px 0px 10px #D78F00;
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
`

export default function RandomChar() {
    
    const gotServices = new gotService(),

    [char, setChar] = useState({}),
    [loading, setLoading] = useState(true),
    [errorStatus, setErrorStatus] = useState(false)

    useEffect(() => {
        updateData()
        let timerId = setInterval(updateData, 15000)
        return () => {clearInterval(timerId)}
    }, [])

    function onCharLoaded(char) {
        setChar(char)
        setLoading(false)
    }

    function onError() {
        setLoading(false)
        setErrorStatus(true)
    }

    function updateData() {
        const id = Math.round(Math.random()*140 + 40)//40-180
        gotServices.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError)
        console.log('working...')
    }
    
    const spinner = loading?<Spinner/>:null,
    content = !loading&&!errorStatus?<DisplayingChar char={char} note="Random character:"/>:null,
    error = errorStatus?<Error errorMessage="Sorry, but something goes wrong"/>:null

    return (
        <RandomBlock>
            {spinner}
            {error}
            {content}
        </RandomBlock>
    )
}

const Term = styled.span`font-weight: bold;`

const DisplayingChar = ({char, note}) => {
    const {name, gender, born, died, culture} = char;
    
    return (
        <>
            <h3>{note}<br/>{name}</h3>
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
                    <span>{died}</span>
                </li>
                <li>
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
                
            </ul>
        </>
    )
}