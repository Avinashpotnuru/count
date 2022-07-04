import { Component } from "react"

import "./App.css"

class Counter extends Component {
    state={count:0}

    increment=()=>{
        this.setState((prevstate)=>({count:prevstate.count+1}))
        
    }
    decrement=()=>{
        this.setState((prevstate)=>({count:prevstate.count-1}))
        
    }

    render(){
        const {count}=this.state
        
        
        return(
            <div className="bg">
                <h1 className="">Counter</h1>
                <h1>{count}</h1>
                <div className="mb-5">
                    <button onClick={this.increment} className="btn btn-primary mr-2">increase</button>
                    <button onClick={this.decrement} className="btn btn-danger">decrease</button>
                </div>

            </div>
        )
    }
  
}

export default Counter