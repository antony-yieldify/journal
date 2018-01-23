import React from 'react';
import {render} from 'react-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Application from './components/application'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
    <Router history={hashHistory} >
        <Route path="/" component={App}/>
        <Route path="/" component={Application}/>
        <Route path="*" component={Whoops404}/>
    </Router>,
    document.getElementById('root')
)

render(
    <Router history={hashHistory} >
        <Route path="/" component={Application}/>
        <Route path="*" component={Whoops404}/>
    </Router>,
    document.getElementById('entries')
)

//ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<Application />, document.getElementById('entries'));


registerServiceWorker();
