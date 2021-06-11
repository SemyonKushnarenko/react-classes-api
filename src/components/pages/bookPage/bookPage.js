import React, {Component} from 'react'
import ItemList from '../../itemList'
import ItemDetails from '../../itemDetails'
import Field from '../field'
import gotService from '../../../services/gotService'

export default class BookPage extends Component {
    state = {
        error: false,
        itemId: null
    }
    gotService = new gotService()

    onChangeItem = (index) => {
        this.setState({itemId: index})
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        const {error, itemId} = this.state

        if(error) return (
            <>
             <h2>Something goes wrong</h2>
            </>
        )

        return (
            <div>
                <ItemList getData={this.gotService.getAllBooks}
                    onChangeItem={this.onChangeItem}
                    page='1'/>
                <ItemDetails getItem={this.gotService.getBook}
                    itemId={itemId} 
                    label='book'>
                    <Field label='Number of pages' field='numberOfPages'/>
                    <Field label='Publisher' field='publisher'/>
                    <Field label='Released' field='released'/>
                </ItemDetails>
            </div>
        )
    }
}