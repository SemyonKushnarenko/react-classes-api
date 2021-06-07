import React, {Component} from 'react'

export default class TogglerRandomChar extends Component {
    render() {
        const {show, onToggleRandomChar} = this.props
        const toggleNote = show?'Close':'Show another' 
        return (
            <button
            onClick={onToggleRandomChar}>{toggleNote}</button>
        )
    }
}