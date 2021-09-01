import React from 'react';
import ReactDOM from 'react-dom';

class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "pamuk",
            color: "beyaz",
            age: 2
        };
    }

    changeAge = () => {
        this.setState({ age: 3 })
    }


    render() {
        return (
            <div>
                <h1>kedinin ismi {this.state.name}</h1>
                <p>kedinin rengi {this.state.color}</p>
                <button type="button" onClick={this.changeAge}>
                    Yaşı değiştir
                </button>
            </div>
        );
    }
}