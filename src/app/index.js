import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        const user = {
            name : "Anna",
            hobbies : ["Sports", "Reading"]
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name = {"Max"} age = {27} user={user}>
                            <p>This is paragraph!</p>
                            {/* <h1>Hello </h1> */}
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));