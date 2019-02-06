import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Dropdown, Menu, Container, Image } from 'semantic-ui-react';
import logo from './assets/weightlifticon.png';
import Main from './Main';
import Deadlifts from './LogLifts/Deadlift/Deadlifts';
import FrontSquats from './LogLifts/FrontSquat/FrontSquats';
import DeadliftStats from './LogLifts/Deadlift/DeadliftStats';
import FrontSquatStats from './LogLifts/FrontSquat/FrontSquatStats';
import DeadliftGuide from './Guides/DeadliftGuide';
import FrontSquatGuide from './Guides/FrontSquatGuide';

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

                <Dropdown.Divider />
                <Dropdown item simple text='Lift Guides'>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to={`/deadliftguide`}>How to Deadlift</Link></Dropdown.Item>
                        <Dropdown.Item><Link to={`/frontsquatguide`}>How to Front Squat</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item position='right'>
                    user login
                </Menu.Item>
            </Container>
        </Menu>

        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/logmydeadlift' component={Deadlifts} />
            <Route exact path='/logmyfrontsquat' component={FrontSquats} />

            <Route exact path='/mydeadlifts' component={DeadliftStats} />
            <Route exact path='/myfrontsquats' component={FrontSquatStats} />

            <Route exact path='/deadliftguide' component={DeadliftGuide} />
            <Route exact path='/frontsquatguide' component={FrontSquatGuide} />
            
            <Route component={Main} />
        </Switch>
    </div>
)

export default Navigation;