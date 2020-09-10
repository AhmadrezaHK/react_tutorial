import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'antd/lib/button'
import Alert from 'antd/lib/alert'

class SpaceDate extends React.Component{
    
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/iss-now.json')
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <Container>
                <Button type="primary">antd</Button>
                <Alert message="hello"></Alert>
            </Container>
        )
    }
}

export default SpaceDate