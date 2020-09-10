import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import logo from './logo.svg';
import Search from './simple_real_time_search/search';
import DivGen from './dynamic_div_generation/div_gen';
import MultiSearch from './multi_column_search/multi_search';
import ToDo from './to_do/to_do'
import D3Chart from './d3_chart/d3_chart'
import GIPHY from './GIPHY/giphy'
import IMI from  './interactive_movement_interface/IMI'
import BasicForm from './basic_form/bf'
import Header from './udemy_react#1/header'
import SpaceData from './space_data/space_date'
import * as serviceWorker from './serviceWorker';


class ReactTutorial extends Component{
    render(){
        return(
            <Router>
                <Container fluid={true}>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <header className="react-header">
                                    <img src={logo} className="react-logo" alt="logo" />
                                </header>
                            </Row>
                            <Row>
                                <Route path="/simple_real_time_search" component={Search}/>
                                <Route path="/dynamic_div_generation" component={DivGen}/>
                                <Route path="/multi_column_search" component={MultiSearch}/>
                                <Route path="/to_do" component={ToDo}/>
                                <Route path="/d3_chart" component={D3Chart}/>
                                <Route path="/giphy" component={GIPHY}/>
                                <Route path="/rendering_highCharts"/>
                                <Route path="/interactive_movement_interface" component={IMI}/>
                                <Route path="/basic_form" component={BasicForm}/>
                                <Route path="/international_space_station_data" component={SpaceData}/>
                                <Route path="/udemy_react" component={Header}/>
                            </Row>
                        </Col>
                        <Col sm={2} style={{position:"fixed"}}>
                            <Row>
                                <Link to="/">
                                    Home
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/simple_real_time_search">
                                    1#Simple Real Time Search
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/dynamic_div_generation">
                                    2#Dynamic div Generation
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/multi_column_search">
                                    3#Multi Column Search
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/to_do">
                                    4#To Do
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/d3_chart">
                                    5#D3 Chart
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/giphy">
                                    6#Trending GIPHY Gifs
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/rendering_highCharts">
                                    7#Rendering HighCharts
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/interactive_movement_interface">
                                    8#An Interactive Movement Interface
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/basic_form">
                                    9#A Basic Form
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/international_space_station_data">
                                    #10International Space Station Data
                                </Link>
                            </Row>
                            <Row>
                                <Link to="/udemy_react">
                                    #11udemy_react
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Router>       
        );
    }
}

ReactDOM.render(<ReactTutorial />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
