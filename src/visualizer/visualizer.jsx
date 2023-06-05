import React from "react";

export default class Visualizer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
    }
    componentDidMount(){
        this.resetArray();
    }
    resetArray() {
        let a = [];
        for (let i = 0; i < 50; i++ ) {
        a.push(this.randomInt());
        }
        this.setState( {array: a });
    } 
    randomInt() {
        return Math.floor(Math.random(5)*100 +5);
    }
    render() {
        const { array } = this.state;

        return (
            <div>
                {array.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        );
    }
}
