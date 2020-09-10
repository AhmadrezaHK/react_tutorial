import React, {Component} from 'react'
import multi_search_data from './data.js'
import './multi_search.css'
import {Container, Row, Col, Form} from "react-bootstrap"

class MultiSearch extends Component{

    constructor(props){
        super(props);
        this.search_keyword = {
            country : "",
            government : "",
            capital_city : "",
            continent : ""
        }
    }

    handleSearch = () => {
        var s = document.getElementsByClassName("multi_search_row");
        var t = [];
        s = Array.prototype.slice.call(s);
        for(var i=0; i<s.length; i++){
            t = Array.prototype.slice.call(s[i].children);
            if(!(t[0].innerText.toUpperCase().includes(this.search_keyword.country.toUpperCase())
                && t[1].innerText.toUpperCase().includes(this.search_keyword.government.toUpperCase())
                && t[2].innerText.toUpperCase().includes(this.search_keyword.capital_city.toUpperCase())
                && t[3].innerText.toUpperCase().includes(this.search_keyword.continent.toUpperCase())
                )){

                s[i].classList.add("not_found");
            }
            else{
                s[i].classList.remove("not_found");
            }
        }
    }

    searchByCountry = (e) => {
        this.search_keyword.country = e.target.value;
        this.handleSearch();
    }

    searchByGovernment = (e) => {
        this.search_keyword.government = e.target.value;
        this.handleSearch();
    }

    searchByCapital = (e) => {
        this.search_keyword.capital_city = e.target.value;
        this.handleSearch();
    }

    searchByContinent = (e) => {
        this.search_keyword.continent = e.target.value;
        this.handleSearch();
    }

    render(){
        var data_row = [];
        var i=0;
        multi_search_data.forEach((element) => {
            data_row.push(
            <Row key={i} className="multi_search_row mb-2 mt-2">
                <Col>{element.country}</Col>
                <Col>{element.government}</Col>
                <Col>{element.city}</Col>
                <Col>{element.continent}</Col>
            </Row>);
            i++;
        })
        return(
        <Container fluid={true} className="mt-5">
            <Row>
                <Col>
                    <Form.Control onChange={this.searchByCountry} type="text" placeholder="Search By Country ..." />
                </Col> 
                <Col> 
                    <Form.Control onChange={this.searchByGovernment} type="text" placeholder="Search By Government Type ..." />
                </Col> 
                <Col> 
                    <Form.Control onChange={this.searchByCapital} type="text" placeholder="Search By Capital City ..." />
                </Col> 
                <Col> 
                    <Form.Control onChange={this.searchByContinent} type="text" placeholder="Search By Continent ..." />
                </Col>
            </Row>
            <Row className="mb-3 mt-3">
                <Col>Country</Col>
                <Col>Government</Col>
                <Col>Capital City</Col>
                <Col>Continent</Col>
            </Row>
            <hr style={{backgroundColor:"#61dafb"}}/>
            {data_row}
        </Container>
        );
    }
}

export default MultiSearch;