import React from 'react';
import PropTypes from 'prop-types'

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.age = props.age;
    }

    onMakeOrder() {
        this.age += 3;
        console.log(this.age);
    }

    render() {
        return(
            <div>
                <p>Component</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <hr />
                <button onClick={() => this.onMakeOrder()} className="btn btn-primary">Make me order</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}