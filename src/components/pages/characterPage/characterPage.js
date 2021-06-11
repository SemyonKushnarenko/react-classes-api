import React, {Component} from 'react'
import ItemList from '../../itemList'
import ItemDetails from '../../itemDetails'
import Field from '../field'
import gotService from '../../../services/gotService'

export default class CharacterPage extends Component {
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
                <ItemList getData={this.gotService.getAllCharacters}
                    onChangeItem={this.onChangeItem}
                    page='5'/>
                <ItemDetails getItem={this.gotService.getCharacter}
                    itemId={itemId} 
                    label='character'>
                    <Field label='Gender' field='gender'/>
                    <Field label='Born' field='born'/>
                    <Field label='Died' field='died'/>
                    <Field label='Culture' field='culture'/>
                </ItemDetails>
            </div>
        )
    }
}