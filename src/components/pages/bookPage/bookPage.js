import React, {Component} from 'react'
import ItemList from '../../itemList'
import {withRouter} from 'react-router-dom'
import gotService from '../../../services/gotService'

class BookPage extends Component {
    state = {
        error: false
    }
    gotService = new gotService()

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        const {error} = this.state

        if(error) return (
            <>
                <h2>Something goes wrong</h2>
            </>
        )

        return (
            <div>
                <ItemList getData={this.gotService.getAllBooks}
                    onChangeItem={(id) => {
                        this.props.history.push(`${id}`)
                        console.log(id)
                    }}
                    page='1'/>
            </div>
        )
    }
}

export default withRouter(BookPage)