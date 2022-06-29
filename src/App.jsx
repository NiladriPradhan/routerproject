import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Error from './Error';
import Menu from './Menu'
import User from './User';
import Search from './Search';
const App = () => {
    const Name = () => {
        return <h1>Name is </h1>;
    };
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path='/' component={() => <About name=" ABOUT_PROPS" />} />
                <Route exact path="/contact" render={() => <Contact name="the Contact" />} />
                <Route exact path="/service" component={() => <Service name="SERVICE_PROPS" />} />
                <Route path='/contact/Name' component={Name} />
                <Route path='/search' component={Search} />
                <Route path="/user/:fname/:lname" component={User} />
                {/* <Route component={Error} /> */}
                <Redirect to="/" />
            </Switch>
            {/* <About />
            <Contact /> */}
        </>
    );
}

export default App;