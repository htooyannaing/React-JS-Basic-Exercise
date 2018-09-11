import React from 'react';
import PropTypes from 'prop-types'

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.age,
            status: 0,
            homeLink: this.props.initialLinkName
        }
    }

    onMakeOrder() {
        this.setState({
            age: this.state.age + 3
        })
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(e) {
        this.setState({
            homeLink: e.target.value
        })
    }

    render() {
        return(
            <div>
                <p>Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>{this.state.status}</p>
                <hr />
                <button onClick={() => this.onMakeOrder()} className="btn btn-primary">Make me order</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input 
                    type="text" 
                    value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}
                />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
}