import React from "react";
import mergesorttest from "./algorithm/mergeSortFix";
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
        a.push(Math.floor(Math.random() * 500 + 5));
        }
        this.setState( {array: a });
        console.log(this.state.array);
    }
    sort() {
        const animations = [];
        const { array } = this.state;
    
        const sortedArray = mergesorttest([...array], animations);
    
        const animationSpeed = 10; 
        let animationIndex = 0;
        const animateSort = () => {
            if (animationIndex >= animations.length) {
                this.setState({ array: sortedArray });
                return;
            }
    
        const [index1, index2, value] = animations[animationIndex];
        this.setState((prevState) => {
            const updatedArray = [...prevState.array];
            updatedArray[index1] = value;
            return { array: updatedArray };
        });
    
        animationIndex++;
        setTimeout(animateSort, animationSpeed);
        };
    
        animateSort();
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
