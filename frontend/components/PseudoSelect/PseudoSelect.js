import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const dictionary = [
    {value: '1', label: 'Grapefruit'},
    {value: '2', label: 'Lime'},
    {value: '3', label: 'Coconut'},
    {value: '4', label: 'Mango'}
];



class PseudoSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            value: ''
        }
    }

    onClickHandler = (e) => {
        this.setState({showList: !this.state.showList});
    };

    onSelectElementHandler (e) {
        this.setState({value: e});
    };

    renderList() {
        const items = [];
        dictionary.forEach(entry => items.push(
            <li className={"pseudo-select__option " + (this.state.value == entry.value ? 'current' : '')} onClick={this.onSelectElementHandler.bind(this, entry.value)}>{entry.label}</li>
        ));
        return (
            <ul className="pseudo-select__list" >
                {items}
            </ul>
        )
    };


    renderSelect() {
        const items = [];
        dictionary.forEach(entry => items.push(
            <option value={entry.value} selected={this.state.value == entry.value}>{entry.label}</option>
        ));
        return (
            <select name="status" value={this.state.value} className="pseudo-select__real">
                {items}
            </select>
        )
    }

    render () {
        return (
            <div className="pseudo-select">
                <div className="pseudo-select__control" onClick={this.onClickHandler}>
                    <div className="pseudo-select__arrow"><span className="fa fa-caret-down">&nbsp;</span></div>
                    <div className="pseudo-select__text">Все новости</div>
                </div>
                <ReactCSSTransitionGroup transitionName="pseudo"
                                         transitionEnterTimeout={250}
                                         transitionLeaveTimeout={250}>
                    { this.state.showList && this.renderList() }
                </ReactCSSTransitionGroup>
                {this.renderSelect()}
            </div>
        )
    }
}

export default PseudoSelect