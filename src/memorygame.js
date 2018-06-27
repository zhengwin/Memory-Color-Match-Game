import React, { Component } from 'react';
import './memorygame.css';

class MemoryGame extends Component {
    constructor() {
        super();
        this.state = {
            squares: [],
            counter: 0,
            visibleSq: {id: 0, color: '', isVisible: false},
            className: "squares"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        console.log("hello");
        this.setState({
            squares: [
                {id: 0, color: 'MediumSlateBlue', isVisible: false},
                {id: 1, color: 'blue', isVisible: false},
                {id: 2, color: 'green', isVisible: false},
                {id: 3, color: 'purple', isVisible: false},
                {id: 4, color: 'aqua', isVisible: false},
                {id: 5, color: 'orange', isVisible: false},
                {id: 6, color: 'MediumVioletRed', isVisible: false},
                {id: 7, color: 'Fuchsia', isVisible: false},
                {id: 8, color: 'MediumSlateBlue', isVisible: false},
                {id: 9, color: 'blue', isVisible: false},
                {id: 10, color: 'green', isVisible: false},
                {id: 11, color: 'purple', isVisible: false},
                {id: 12, color: 'aqua', isVisible: false},
                {id: 13, color: 'orange', isVisible: false},
                {id: 14, color: 'MediumVioletRed', isVisible: false},
                {id: 15, color: 'Fuchsia', isVisible: false}
            ]
        });
    }

    componentDidMount() {
        //shuffle the squares
        let squares = this.state.squares.slice();
        squares.sort(function(a, b){return 0.5 - Math.random()});
        this.setState({squares});
    }

    handleClick(id) {
        let {visibleSq} = this.state;
        let newVisibleSq = {};
        let prevVisibleSq = JSON.parse(JSON.stringify(visibleSq));
        let matched = false;

        const squares = this.state.squares.slice().map(sq => {
            let square = JSON.parse(JSON.stringify(sq));
            if ( id === square.id ) {
                square.isVisible = true;
                matched = square.color === visibleSq.color;
                newVisibleSq = square;
            }
            return square;
        });

        this.setState((prevState, props) => {
            return {
                squares,
                visibleSq: newVisibleSq,
                counter: prevState.counter + 1
            }
        }, function () {
            if ( !matched && this.state.counter === 2) {
                console.log(this.state.counter);
                const squares = this.state.squares.slice().map(sq => {
                    let square = JSON.parse(JSON.stringify(sq));
                    if( square.id === prevVisibleSq.id || square.id === newVisibleSq.id) {
                        square.isVisible = false;
                    }
                    return square;
                });

                setTimeout( function() {
                    this.setState({squares});
                }.bind(this), 1500);
            }

            if (this.state.counter === 2) {
                this.setState({counter: 0});
            }

        });
    }

    render() {

        const squares = this.state.squares.map((sq, i) => {
            const divStyle = sq.isVisible ? {backgroundColor: sq.color} : {backgroundColor: 'gray'};
            return <div key={i} style={divStyle}
                        className="squares"
                        onClick={()=>this.handleClick(sq.id)}
            />
        });

        return (
            <div className="App">
                <div className="container">
                    {squares}
                </div>
            </div>
        );
    }
}

export default MemoryGame;
