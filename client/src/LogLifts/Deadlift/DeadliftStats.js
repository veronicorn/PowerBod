import React from 'react';
import Deadlift from './Deadlift';
import axios from 'axios';

class DeadliftStats extends React.Component {
    state = {
        showAllDeadlifts: [],
    };

    componentDidMount() {
        axios.get('/api/deadlifts')
            .then((results) => {
                this.setState({ showAllDeadlifts: results.data })
            });
    };

    render() {
        return (
            <div>
                <Deadlift 
                    data={this.state.showAllDeadlifts} />
            </div>
        )
    }
}

export default DeadliftStats;