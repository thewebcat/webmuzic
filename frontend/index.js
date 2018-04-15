import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './scss/base.scss'
import PseudoSelect from "./components/PseudoSelect/PseudoSelect";
//import App from "./containers/App/App";


var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];


const Home = () => {
    return (
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <h3>{'Новости'}</h3>
        </ReactCSSTransitionGroup>
    )
}

class App extends Component {
    render () {
        return (
            <div className="app">
                <Home/>
                <News data={my_news}/>
                <TestInput/>
                <PseudoSelect/>
            </div>
        )
    }
}

App.propTypes = {
    my_news: PropTypes.array.isRequired
};

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            counter: 0
        };
    }

    readmoreClick = (e) => {
        e.preventDefault();
        this.setState({visible: !this.state.visible});
    };

    componentClick = (e) => this.setState({counter: ++this.state.counter});

    render () {
        const data = this.props.data;
        let visible = this.state.visible;

        return (
            <div className="article" onClick={this.componentClick}>
                <p className="news__author">{data.author}</p>
                <p className="news__text">{data.text}</p>
                <a href="#" onClick={this.readmoreClick} className={'news__readmore '}>{visible?'Скрыть':'Подробнее'}</a>
                <p className={'news__big-text ' + (visible?'':'none')}>{data.bigText}</p>
            </div>
        )
    }
}

class News extends  Component {
    render () {
        const data = this.props.data;
        let newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }


        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length > 0 ? '' : 'none'}>Всего новостей: {data.length}</strong>
            </div>
        )
    }
}

class TestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            my_val: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({my_val: e.target.value})
    };

    onClickHandler = (e) => {
        alert(this.state.my_val)
    };

    render () {
        return (
            <div>
                <input
                    className='test-input'
                    value={this.state.myValue}
                    onChange={this.onChangeHandler}
                    placeholder='введите значение'
                />
                <button onClick={this.onClickHandler}>Отправить</button>
            </div>
        )
    }
}



const mountNode = document.getElementById("app")
ReactDOM.render(
  <App/>,
  mountNode
);