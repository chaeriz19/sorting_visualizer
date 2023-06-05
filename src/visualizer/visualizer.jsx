import React from "react";
import mergeSort from "./algorithm/mergeSort";
import "./visualizer.css";

export default class Visualizer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
        this.resetArray = this.resetArray.bind(this);
        this.sort = this.sort.bind(this);
    }
    componentDidMount(){
        this.resetArray();
    }
    resetArray() {
        // reset array and push new values
        let a = [];
        for (let i = 0; i < 150; i++ ) {
        a.push(Math.floor(Math.random(5)*500 +5));
        }
        this.setState( {array: a });
    }
    sort() {
        mergeSort(this.state.array);
    }
    render() {
        const { array } = this.state;
        return (
            <div className="container">
                <div className="control">
                    <button onClick={this.resetArray}>Reset</button>
                    <button onClick={this.sort}>Sort</button>
                </div>
                <div className="display">
                
                {array.map((item, index) => (
                    <div className="obj" style={{height: `${item}px`}} key={index}></div>
                ))}
            </div>
            </div>
            
        );
    }
}
