import React, {Component} from 'react';
import styled from 'styled-components';

const CharDet = styled.div`
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
        Term = styled.span`
            font-weight: 700;
        `,
                /* eslint-disable-next-line  */
        SelectError = styled.div`
            color: #fff;
            text-align: center;
            font-size: 26px;
        `;


export default class CharDetails extends Component {
    render() {
        return (
            <CharDet>
                <h3>John Snow</h3>
                <ul>
                    <li>
                        <Term>Gender</Term>
                        <span>male</span>
                    </li>
                    <li>
                        <Term>Born</Term>
                        <span>1783</span>
                    </li>
                    <li>
                        <Term>Died</Term>
                        <span>1820</span>
                    </li>
                    <li>
                        <Term>Culture</Term>
                        <span>First</span>
                    </li>
                </ul>
            </CharDet>
        );
    }
}