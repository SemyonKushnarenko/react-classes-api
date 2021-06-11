import React, {Component} from 'react'
import ItemList from '../../itemList'
import ItemDetails from '../../itemDetails'
import Field from '../field'
import gotService from '../../../services/gotService'

export default class HousePage extends Component {
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
                <ItemList getData={this.gotService.getAllHouses}
                    onChangeItem={this.onChangeItem}
                    page='5'/>
                <ItemDetails getItem={this.gotService.getHouse}
                    itemId={itemId} 
                    label='house'>
                    <Field label='Region' field='region'/>
                    <Field label='Words' field='words'/>
                    <Field label='Titles' field='titles'/>
                    <Field label='Overlord' field='overlord'/>
                    <Field label='Ancestral weapon' field='ancestralWeapon'/>
                </ItemDetails>
            </div>
        )
    }
}