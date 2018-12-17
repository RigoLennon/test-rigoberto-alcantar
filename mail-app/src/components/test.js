import React ,{ Component } from "react";
import {hot} from "react-hot-loader";

class test extends Component{
    render(){
        return(
            <h1>Hola desde test</h1>
        );
    }
}

export default hot(module)(test);