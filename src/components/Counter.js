import React, { Component } from 'react';
import './Counter.css';
import Button from './Button';

export default class Counter extends Component {
    state = { count: 0 };

    increase = () => {
        const newValue = this.state.count + 1;
        this.setState({ count: newValue });
    }

    decrease = () => {
        const newValue = this.state.count - 1;
        this.setState({ count: newValue });
    }

    reset = () => {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <>
                <h1 className='counter'>{this.state.count}</h1>
                <div className='buttons'>
                    <Button text="Decrease" click={this.decrease} />
                    <Button text="Reset" click={this.reset} />
                    <Button text="Increase" click={this.increase} />
                </div>
            </>
        );
    }
}