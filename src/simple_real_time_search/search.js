import React, { Component } from 'react';
import './search.css';
import search_data from './data.js'
import {Container, Row} from "react-bootstrap"


class Search extends Component {

  search_func(e) {
    var h = document.getElementsByClassName("search_data_container");
    Array.prototype.slice.call(h[0].children).forEach(element =>{
      if (!element.innerText.toUpperCase().includes(e.target.value.toUpperCase())){
        element.classList.add("not_found");
      }else{
        element.classList.remove("not_found");
      }
    })
  }

  render() {
    const search_data_elements = [];
    var i = 0;
    search_data.forEach(element => {
      search_data_elements.push(<div className="search_element" key={i}>{element.word}</div>);
      i++;
    })
    return (
      <Container fluid={true} className="mt-5">
        <Row style={{justifyContent:"center"}}>
          <div>
            <input className="search_input"
                  placeholder="Search ..."
                  onChange={this.search_func} ></input>
            <div className="search_data_container">{search_data_elements}</div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Search;
