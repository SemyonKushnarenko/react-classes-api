import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import Error from '../error';

const List = styled.ul`
    background-color: #fff;
    list-style: none;
    font-size: 18px;
    padding: 0;
    width: 300px;
    display: inline-block;
`,
ListItem = styled.li`
    cursor: pointer;
    text-align: center;
    border: 1px solid black;
    padding: 15px;
`

export default function ItemList({page, onChangeItem, getData}){
    const [itemList, setItemList] = useState(null)


    useEffect(() => {
        getData(page)
            .then(onCharListLoaded)
            .catch(onError)
        }
    )

    function onCharListLoaded(itemList) {
        setItemList(itemList)
    }

    function onError() {
        return <Error errorMessage='Something goes wrong'/>
    }

    if (!itemList) {
        return (
            <Spinner/>
        )
    }

    const items = itemList.map((item, index) => {
        return (
            <ListItem
                key={item.key}
                onClick={() => onChangeItem(+page * 10 - 9 + index)}>
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