import React from 'react'
import { Container } from 'react-bootstrap'
import PrintInfo from './print_info'
import Form from './form'
import FormValidator from './FormValidator'

class BasicForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            form_state : 0,
            fName : "",
            lName : "",
            birthday : "",
            country : ""
        }
    }

    handleForm = (formValue) =>{
        this.setState(formValue, () => {console.log(this.state)})
    }

    handleState = () =>{
        this.setState(prevState => {
            return{
                form_state : (prevState.form_state + 1) % 3
            }
        })
    }
    
    render(){
        var form

        if(this.state.form_state === 0){
            form = <Form    handleForm={this.handleForm} 
                            handleState={this.handleState} 
                            key={0}
                            inputs = {[
                                {
                                    id : 'fName',
                                    placeholder : 'First Name',
                                    label : 'First Name',
                                    type : 'text'
                                },
                                {
                                    id : 'lName',
                                    placeholder : 'Last Name',
                                    label : 'Last Name',
                                    type : 'text'
                                }
                                ]}
                            validator={ new FormValidator([
                                                            {
                                                                field : 'fName',
                                                                method : 'isEmpty',
                                                                validWhen : false,
                                                                message : 'First Name Is Required.'
                                                            },
                                                            {
                                                                field : 'lName',
                                                                method : 'isEmpty',
                                                                validWhen : false,
                                                                message : 'Last Name Is Required.'
                                                            }
                                                            ])
                                                            }/>
        }
        else if (this.state.form_state === 1){
            form = <Form    handleForm={this.handleForm} 
                            handleState={this.handleState} 
                            key={1}
                            inputs = {[
                                {
                                    id : 'birthday',
                                    placeholder : 'Birthday',
                                    label : 'Birthday(year)',
                                    type : 'text'
                                },
                                {
                                    id : 'country',
                                    placeholder : 'Country',
                                    label : 'Country',
                                    type : 'text'
                                }
                                ]}
                            validator={ new FormValidator   ([
                                                                {
                                                                    field : 'birthday',
                                                                    method : 'isEmpty',
                                                                    validWhen : false,
                                                                    message : 'Birthday Is Required.'
                                                                },
                                                                {
                                                                    field : 'birthday',
                                                                    method : 'isNumeric',
                                                                    validWhen : true,
                                                                    message : 'Please Enter a Numeric Value'
                                                                },
                                                                {
                                                                    field : 'country',
                                                                    method : 'isEmpty',
                                                                    validWhen : false,
                                                                    message : 'Country Is Required.'
                                                                }
                                                            ])
                                                            }/>
        }
        else{
            form = <PrintInfo info={this.state} handleState={this.handleState} handleForm={this.handleForm}/>
        }

        return(
            <Container className="mt-5">
                {form}
            </Container>
        )
    }
}

export default BasicForm

