import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }

    onGreet() {
        alert("Hello!")
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {
        let homeCmp = "";
        if(this.state.homeMounted) {
            homeCmp = (
                <Home 
                    name = {"Max"} 
                    age = {27} 
                    greet={this.onGreet}
                    changeLink = {(newName) => this.onChangeLinkName(newName)}
                    initialLinkName = {this.state.homeLink}
                />
            )
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={() => this.onChangeHomeMounted()} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));