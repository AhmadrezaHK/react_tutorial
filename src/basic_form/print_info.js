import React from 'react'
import { Container, Button } from 'react-bootstrap'

class PrintInfo extends React.Component{
    render(){
        var d = new Date()
        return(
            <Container>
                <div className="w-50 text-center mb-2 mx-auto">Hello {this.props.info.fName + " " + this.props.info.lName} !</div>
                <div className="w-50 text-center mb-2 mx-auto">You are from {this.props.info.country}</div>
                <div className="w-50 text-center mb-2 mx-auto">You are {d.getFullYear() - this.props.info.birthday}</div>
                <Button className="mx-auto d-block mt-5" 
                        onClick={() => {
                                this.props.handleState()
                                this.props.handleForm({
                                    fName : "",
                                    lName : "",
                                    birthday : "",
                                    country : ""
                                })
                            }
                        } 
                        size="sm" 
                        variant="danger">Reset</Button>
            </Container>   
        )
    }
}

export default PrintInfo