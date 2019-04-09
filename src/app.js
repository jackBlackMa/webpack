import './main.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './component/Root';
import Event from './component/绑定原生事件';
import Event2 from './component/阻止事件冒泡';
import Select from './component/Select';



import { BrowserRouter, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router'
//import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const BaseLayout = () => (
    <div className="base">
        <header>
            <p>React Router v4 Browser Example</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/me">Profile</Link></li>
                    <li><Link to="/login/123">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        <div className="container">
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/login/:name" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/me" component={ProfilePage} />
        </div>
        <footer>
            React Router v4 Browser Example (c) 2017
      </footer>
    </div>
);

const HomePage = () => <div>This is a Home Page</div>
const RegisterPage = () => <div>This is a Register Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
const AboutPage = () => <div>This is an About Page</div>
const ContactPage = () => <div>This is a Contact Page</div>

class LoginPage extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props)
        return (
            <div onClick={()=>this.props.history.push('/')}>{this.props.match.params.name}</div>
        )
    }
}

const App = () => (
    <BrowserRouter>
        <BaseLayout />
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));
// registerServiceWorker();
