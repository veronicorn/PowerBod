import React from 'react';
import { Header, Segment, Button, Form, Input } from 'semantic-ui-react';

const FrontSquatForm = (props) => (
    <div className='lift-form'>
        <Header as='h2' attached='top'>Log Front Squat</Header>
        <Segment attached>
        <Header as='h4'>{props.date}</Header>

        <Form>
            <Form.Group widths='equal'> 
                <Form.Field>
                    <Input fluid
                    label='Weight'
                    placeholder='Weight in lbs.'
                    value={props.weightVal} 
                    onChange={props.handleChange} 
                    name='weight' 
                    type='number' /> 
                </Form.Field>
                <Form.Field>
                    <Input fluid
                    label='Reps'
                    placeholder='Number of reps'
                    value={props.repsVal} 
                    onChange={props.handleChange} 
                    name='reps' 
                    type='number' />
                </Form.Field>
                <Form.Field>
                    <Input fluid
                    label='Sets'
                    placeholder='Number of sets'
                    value={props.setsVal} 
                    onChange={props.handleChange} 
                    name='sets' 
                    type='number' />
                </Form.Field>
                </Form.Group>

                <Form.Field>
                    <Input fluid
                    label='Notes'
                    placeholder='How was your workout?'
                    value={props.notesVal} 
                    onChange={props.handleChange} 
                    name='notes' 
                    type='text' />
                </Form.Field>

            <Button compact 
            color='yellow'
            onClick={props.saveFrontSquat}
            content='Save Workout' />

        </Form>
        </Segment>
    </div>
)

export default FrontSquatForm;