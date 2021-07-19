import React, {cloneElement, Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemDet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class ItemDetails extends Component {
    state = {
        item: null,
        error: false
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props) this.updateItem()
    }

    updateItem = () => {
        const {itemId} = this.props
        if (!itemId) return
        this.props.getItem(itemId)
            .then(this.onUpdateItem)
            .catch(this.onError)
    }

    onUpdateItem = (item) => {
        this.setState({item})
    }

    componentDidCatch() {
        this.onError()
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    render() {
        const {item, error} = this.state
        const {label} = this.props

        if (error) return (
            <h2>
                Something wrong with data. Please update page(
            </h2>
        ) 
        
        if (!item) {
            return (
                <SelectError>
                    Please, select a {label}
                </SelectError>
            )
        }
        
        const {name} = this.state.item
        return (
            <ItemDet>
                <h3>{name}</h3>
                <ul>
                    {React.Children.map(this.props.children, child => cloneElement(child, {item}))}
                </ul>
            </ItemDet>
        )
    }
}

ItemDetails.defaultProps = {
    label: 'item'
}

ItemDetails.propTypes = {
    label: PropTypes.number
}