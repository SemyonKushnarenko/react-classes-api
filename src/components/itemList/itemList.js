import React, {Component} from 'react';
import styled from 'styled-components';

const List = styled.ul`
    background-color: #fff;
`;

export default class ItemList extends Component {

    render() {
        return (
            <List>
                <li>
                    John Snow
                </li>
                <li>
                    Brandon Stark
                </li>
                <li>
                    Geremy
                </li>
            </List>
        );
    }
}