import React from'react'
import {Container, Button} from 'react-bootstrap'


class Form extends React.Component{

    constructor(props){
        super(props)

        this.validator = props.validator

        var temp = {validation: this.validator.valid()}

        for(var i=0; i<props.inputs.length; i++){
            temp = Object.assign(temp, {[props.inputs[i].id] : ''})
        }

        this.state = temp

        this.submitted = false
    }

    handleInputChange = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    
    handleSubmit = () =>{
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        if (validation.isValid) {
            var t = {}  
            this.props.inputs.forEach(element => {
                t = Object.assign(t, {[element.id] : document.getElementById(element.id).value})
            });
            this.props.handleForm(t)
            this.props.handleState()
        }
    }
    
    render(){
        var validation = this.submitted ? this.validator.validate(this.state) : this.state.validation   
        
        return(
            <Container className="w-50">
                {
                    this.props.inputs.map((element, index) => {
                      return(
                        <div className="form-group" key={index}>
                            <label htmlFor={element.id}>{element.label}</label>
                            <input  onChange={this.handleInputChange} 
                                    type={element.type} 
                                    className={"form-control " + (validation[element.id].isInvalid && "is-invalid")}
                                    id={element.id}
                                    placeholder={element.placeholder}/>
                            <span className="invalid-feedback">{validation[element.id].message}</span>
                        </div>
                      )  
                    })
                }
                <Button onClick={this.handleSubmit} type="submit" variant="primary">Submit</Button>
            </Container>
        )
    }
}

export default Form