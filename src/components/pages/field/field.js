import React from 'react'
import styled from 'styled-components'

const Term = styled.span`font-weight: bold;`

const Field = ({label, field, item}) => {
        return (
            <li>
                <Term>{label}</Term><br/>
                <span>{item[field]}</span>
            </li>
        )
}

export default Field