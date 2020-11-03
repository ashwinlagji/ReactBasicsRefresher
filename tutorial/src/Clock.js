import React from 'react';

class Clock extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {

        this.timer = setInterval(() => {

            this.tick()

        }, 1000);
    }
  
    componentWillUnmount() {

        clearInterval( this.timer );
    }

    render(){

        let count = 0;

        return (<div>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            { count && <h1>Messages: {count}</h1>}
          </div>)
    }
}

export default Clock;