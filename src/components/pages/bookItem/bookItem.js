import React, {Component} from 'react'
import ItemDetails from '../../itemDetails'
import Field from '../field'
import gotService from '../../../services/gotService'

class BookItem extends Component {
    gotService = new gotService()
    
    render() {
        return (
            <ItemDetails getItem={this.gotService.getBook}
                    itemId={this.props.itemId} 
                    label='book'>
                    <Field label='Number of pages' field='numberOfPages'/>
                    <Field label='Publisher' field='publisher'/>
                    <Field label='Released' field='released'/>
            </ItemDetails>
        )
    }
}

export default BookItem