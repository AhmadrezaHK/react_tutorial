import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap'
import logo from './react.png'
import './IMI.css'

class IMI extends Component {

    constructor(props){
        super(props)
        this.react_icon = 0
        this.speed = 10
    }

    componentDidMount(){
        this.react_icon = Array.prototype.slice.call(document.getElementsByClassName("react-icon"))[0]
        document.addEventListener("keydown", this.handleOnKeyDown)
    }

    handleOnKeyDown = (event) => {
        var t;
        switch(event.keyCode){
            case 37 :
                t = this.react_icon.style.left.substring(0, this.react_icon.style.left.length-2)
                this.react_icon.style.left = (parseInt(t) - this.speed) < 0 ? t + "px" : (parseInt(t) - this.speed) + "px" 
                break
            case 38 :
                t = this.react_icon.style.top.substring(0, this.react_icon.style.top.length-2)
                this.react_icon.style.top = (parseInt(t) - this.speed) < 0 ? t + "px" : (parseInt(t) - this.speed) + "px" 
                break
            case 39 :
                t = this.react_icon.style.left.substring(0, this.react_icon.style.left.length-2)
                this.react_icon.style.left = (this.speed + parseInt(t)) > 450 ? t + "px" : (this.speed + parseInt(t)) + "px" 
                break
            case 40 :
                t = this.react_icon.style.top.substring(0, this.react_icon.style.top.length-2)
                this.react_icon.style.top = (this.speed + parseInt(t)) > 450 ? t + "px" : (this.speed + parseInt(t)) + "px" 
                break
            default :     
        }
    }

    control_speed = (e) => {
        this.speed = Math.floor(e.target.value / (e.target.max - e.target.min) * 100)
    }

    render(){
        var logo_addr = "url(\"" + logo + "\")"
        return(
            <Container className="mt-3">
                <Row className="justify-content-center">
                    <div    style={{"height" : "500px",
                                    "width" : "500px"}} 
                            className="border border-warning rounded position-relative">

                            <div style={{"background" : logo_addr,
                                        "left" : "0px",
                                        "top" : "0px"}} 
                                 className="react-icon"></div>
                    </div>
                </Row>
                <Row className="justify-content-center my-5">
                    <div className="form-group">
                        <label htmlFor="controlSpeed">Control Movement Speed</label>
                        <input  onChange={this.control_speed} 
                                type="range" 
                                className="form-control-range" 
                                id="controlSpeed"
                                max="100"
                                min="1"
                                defaultValue="10"/>
                    </div>
                </Row>
            </Container>
        )
    }
}


export default IMI