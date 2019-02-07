import React from 'react';
import { Table, Header, Segment } from 'semantic-ui-react';

const FrontSquat = (props) => (
    <div className='lift-stats'>
        <Header as='h2' attached='top'>My Front Squat Stats</Header>
        <Segment attached>
        <Table compact celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={2}>Date</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Weight</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Reps</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Sets</Table.HeaderCell>
                    <Table.HeaderCell width={5}>Notes</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign='center'>Delete Entry</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
            {props.data ? props.data.map(param =>
                    <Table.Row key={param._id}>
                        <React.Fragment>
                            <Table.Cell>{new Date(param.date).toDateString()}</Table.Cell>
                            <Table.Cell >{param.weight}</Table.Cell>
                            <Table.Cell>{param.reps}</Table.Cell>
                            <Table.Cell>{param.sets}</Table.Cell>
                            <Table.Cell>{param.notes}</Table.Cell>
                            <Table.Cell textAlign='center'>
                                <i className='fas fa-times' onClick={() => props.handleDelete(param._id)}
                                ></i></Table.Cell>
                        </React.Fragment>
                    </Table.Row>
                ) : null}
            </Table.Body>
        </Table>
        </Segment>
    </div>
);

export default FrontSquat;