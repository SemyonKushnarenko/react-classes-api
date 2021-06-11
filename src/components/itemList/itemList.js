import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const List = styled.ul`
    background-color: #fff;
`,
ListItem = styled.li`
    cursor: pointer;
`

export default class ItemList extends Component {
    state = {
        itemList: null
    }


    componentDidMount() {
        this.props.getData(this.props.page)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (itemList) => {
        this.setState({itemList})
    }

    render() {
        const {itemList} = this.state
        if (!itemList) {
            return (
                <Spinner/>
            )
        }

        const items = itemList.map((item, index) => {
            console.log(item.key)
            return (
                <ListItem
                    key={item.key}
                    onClick={() => this.props.onChangeItem(+this.props.page * 10 - 9 + index)}>
                    {item.name}
                </ListItem>
            )
        })

        return (
            <List>
                {items}
            </List>
        );
    }
}