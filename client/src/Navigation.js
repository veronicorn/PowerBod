import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Dropdown, Menu, Container, Image } from 'semantic-ui-react';
import logo from './assets/weightlifticon.png';
import Main from './Main';
import Deadlifts from './LogLifts/Deadlift/Deadlifts';
import DeadliftStats from './LogLifts/Deadlift/DeadliftStats';
import FrontSquats from './LogLifts/FrontSquat/FrontSquats';
import FrontSquatStats from './LogLifts/FrontSquat/FrontSquatStats';

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
                        <Dropdown.Item><Link to={`/logmyfrontsquat`}>Front Squat</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown.Divider />
                <Dropdown item simple text='My Lift Stats'>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to={`/mydeadlifts`}>My Deadlifts</Link></Dropdown.Item>
                        <Dropdown.Item><Link to={`/myfrontsquats`}>My Front Squats</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>

        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/logmydeadlift' component={Deadlifts} />
        <Route exact path='/mydeadlifts' component={DeadliftStats} />
        <Route exact path='/logmyfrontsquat' component={FrontSquats} />
        <Route exact path='/myfrontsquats' component={FrontSquatStats} />
        <Route component={Main} />
        </Switch>
    </div>
)

export default Navigation;