import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Main = () => (
    <div className="main-page">
        <Container textAlign='center'>
            <Header><h1 className='main-header'>Power Bod</h1></Header>
            <p className='main-byline'>
                No muss. No fuss. Just <label className='highlight'>log your power.</label>
            </p>
        </Container>
    </div>
)

export default Main;