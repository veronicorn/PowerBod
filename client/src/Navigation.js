import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Dropdown, Menu, Container, Image } from 'semantic-ui-react';
import logo from './assets/weightlifticon.png';
import Deadlifts from './LogLifts/Deadlift/Deadlifts';
import DeadliftStats from './LogLifts/Deadlift/DeadliftStats';

const Navigation = () => (
    <div>
        <Menu fixed='top'>
            <Container fluid className='nav-bar'>
                <Menu.Item>
                <Image src={logo} id='logo' alt='logo' />
                <Link to={`/`}>POWER BOD</Link>
                </Menu.Item>

                <Dropdown item simple text='Log My Lifts'>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to={`/logmydeadlift`}>Deadlift</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown.Divider />
                <Dropdown item simple text='My Lift Stats'>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to={`/mydeadlifts`}>My Deadlifts</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>

        <Route exact path='/logmydeadlift' component={Deadlifts} />
        <Route exact path='/mydeadlifts' component={DeadliftStats} />
    </div>
)

export default Navigation;