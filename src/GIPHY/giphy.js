import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import './giphy.css'

class GIPHY extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoaded : false, 
            error : null, 
            items : []
        }
    }

    loadedImage = (gif_id, loading_id) => {
        var gif = document.getElementById(gif_id)
        gif.classList.replace("d-none", "d-block")
        var loading = document.getElementById(loading_id)
        loading.classList.add("d-none")
    }

    gif_column = (col) => {
       return( 
            this.state.items.map((element, index, array) => {
                if(index % 4 === col){
                    return(
                        <div className="gif-container" key={index}>
                            <img
                                onLoad={() => this.loadedImage("#gif" + index, "#loading" + index)}
                                key={index + array.length}
                                id={"#gif" + index} 
                                src={element.images.downsized_medium.url} 
                                alt="gif"
                                className="giphy d-none w-100 mt-3 rounded"/>
                            <div
                                className="loading mt-3 rounded"
                                key={index + 2*array.length}
                                id={"#loading" + index}
                                style={{"height" : Math.random()*200 + 150 + "px"}}></div>      
                        </div>
                    )
                }
            })
       )
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=MkS2iER0XpkhbhQ9wTpQ5SJozi57NZpj')
            .then(res => res.json())
            .then(res => {   
                this.setState(prevState => {
                    return {
                        items : res.data
                    }
                })
            })
    }

    randomize_order = () => {
        var gifs = Array.prototype.slice.call(document.getElementsByClassName("gif-container"))
        var t;
        gifs.forEach(element => {
            if(element.className.includes("order-")){
                element.className = element.className.replace(/order-[0-9]?[0-9]/g, "")    
            }
            t = "order-" + Math.floor(Math.random()*12)
            element.classList.add(t)
        });
    }

    select_one_at_random = () => {
        var gifs = Array.prototype.slice.call(document.getElementsByClassName("gif-container"))
        var random_num = Math.floor(Math.random()*gifs.length)
        gifs.forEach((element, index) => {
            element.classList.add("d-none")
            if(index === random_num){
                element.classList.remove("d-none")
            }
        }); 
    }

    deSelect = () => {
        var gifs = Array.prototype.slice.call(document.getElementsByClassName("gif-container"))
        gifs.forEach((element, index) => {
            element.classList.remove("d-none")
        });
    }

    render(){
        return(
            <Container fluid={true} className="mt-5">
                    <Row className="text-center">
                        <Col>
                            <Button onClick={this.randomize_order} 
                                    className="mr-3" 
                                    variant="info">Randomize Order</Button>
                            <Button onClick={this.select_one_at_random}
                                    className="mr-3" 
                                    variant="info">Select one at random</Button>
                            <Button onClick={this.deSelect}
                                    className="mr-3" 
                                    variant="info">deselect</Button>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="d-flex flex-column pl-2 pr-2">{this.gif_column(0)}</Col>
                        <Col className="d-flex flex-column pl-2 pr-2">{this.gif_column(1)}</Col>
                        <Col className="d-flex flex-column pl-2 pr-2">{this.gif_column(2)}</Col>
                        <Col className="d-flex flex-column pl-2 pr-2">{this.gif_column(3)}</Col>
                    </Row>
            </Container>
        )
    }
}

export default GIPHY