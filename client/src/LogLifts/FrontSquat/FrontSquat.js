import React from 'react';
import { Table, Header, Segment } from 'semantic-ui-react';

const FrontSquat = (props) => (
    <div className='lift-stats'>
        <Header as='h2' attached='top'>My Front Squat Stats</Header>
        <Segment attached>
        <Table compact celled size='medium'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={2}>Date</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Weight</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Reps</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Sets</Table.HeaderCell>
                    <Table.HeaderCell width={5}>Notes</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.data ? props.data.reverse().map(props =>
                    <Table.Row key={props._id}>
                        <React.Fragment>
                            <Table.Cell>{new Date(props.date).toDateString()}</Table.Cell>
                            <Table.Cell >{props.weight}</Table.Cell>
                            <Table.Cell>{props.reps}</Table.Cell>
                            <Table.Cell>{props.sets}</Table.Cell>
                            <Table.Cell>{props.notes}</Table.Cell>
                        </React.Fragment>
                    </Table.Row>
                ) : null}
            </Table.Body>
        </Table>
        </Segment>
    </div>
);

export default FrontSquat;