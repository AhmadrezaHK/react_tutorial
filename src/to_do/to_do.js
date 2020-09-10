import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : [
                {
                    task: "1 Hour Deathmatch CS:GO",
                    status: true
                },
                {
                    task: "React To Do App",
                    status: false
                }
            ]
        }
    }

    addTask = () => {
        var input = document.getElementById("new_task_input").value;
        var newtask = {
            task: input,
            status: false
        }
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newtask]
        }))
    }

    updateStatus = (index) => {
        this.setState(prevState => {
            const t = prevState.tasks;
            t[index].status = !prevState.tasks[index].status;
            return{
                tasks: t
            };
        })
    }

    search_task = (e) => {
        var t = Array.prototype.slice.call(document.getElementsByClassName("task_row"));
        t.forEach(element =>{
          if (!Array.prototype.slice.call(element.children)[0].innerText.toUpperCase().includes(e.target.value.toUpperCase())){
            element.classList.add("not_found");
          }else{
            element.classList.remove("not_found");
          }
        })
    }

    deleteTask = (index) => {
        this.setState(prevState => {
            const t = prevState.tasks;
            t.splice(index, 1);
            return{
                tasks: t
            }
        })
    }

    render(){
        return(
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col sm={3}>
                        <Form.Control id="new_task_input" placeholder="Enter Your New Task ..."></Form.Control>
                    </Col>
                    <Col sm={3}>
                        <Button onClick={this.addTask} variant="info">Add Task</Button>
                    </Col>
                    <div className="w-100 mb-4"></div>
                    <Col sm={3}>
                        <Form.Control onChange={this.search_task} placeholder="Filter Tasks ..."></Form.Control>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col sm={6}>
                        <Row className="mb-3">
                            <Col sm={7}>Task</Col>
                            <Col sm={2} className="text-center">Status</Col>
                            <Col sm={3} className="text-center">Delete Task</Col>
                        </Row>
                        <hr style={{backgroundColor:"#61dafb"}}/>
                        {
                            this.state.tasks.map((element, index) => {
                                return(
                                    <Row className="task_row mb-1" key={index}>
                                        <Col sm={7}>
                                            {element.task}
                                        </Col>
                                        <Col sm={2} style={{cursor:"pointer"}} className="text-center" onClick={() => this.updateStatus(index)}>
                                            {element.status ? <FontAwesomeIcon size={"lg"} icon={faCheckCircle}/> : <FontAwesomeIcon size={"lg"} icon={faMinusCircle}/>}
                                        </Col>
                                        <Col sm={3} style={{cursor:"pointer"}} className="text-center">
                                            <Button size="sm" onClick={() => this.deleteTask(index)} variant="danger">Delete</Button>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ToDo