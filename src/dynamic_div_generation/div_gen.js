import React, {Component} from "react"
import './div_gen.css'
import {Container, Col, Row} from "react-bootstrap"

class DivGen extends Component{
    constructor(props){
        super(props);
        this.state = {
            divs : [],
            intervalID : null,
            increasing : true
        }
    }

    componentDidMount(){
        var intID = setInterval(this.generateDiv.bind(this), 50);
        this.setState({intervalID : intID});
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalID);
    }

    generateDiv(){
        var temp = this.state.divs;
        if(this.state.increasing){
            /*var height = Math.floor((Math.random() * 200) + 100) + "px";*/
            temp.push(<Col sm={1} className="square" key={temp.length} /*style={{height:height}}*/></Col>); 
            if(temp.length > 50){
                this.setState({increasing : false})
            }
        }
        else{
            temp.pop();
            if(temp.length < 1){
                this.setState({increasing : true})
            }
        }
        this.setState({divs : temp});
    }

    render(){
        return(
            <Container fluid={true} className="mt-5">
                <Row style={{justifyContent:"center"}}>
                    {this.state.divs}
                </Row>
            </Container>
        );
    }
}

export default DivGen;