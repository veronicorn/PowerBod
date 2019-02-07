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
                this.setState({ showAllDeadlifts: results.data.sort((a, b) => new Date(b.date) - new Date(a.date)) 
                })
            });
    };

    handleDelete = (id) => {
        axios.delete(`/api/deadlifts/${id}`)
            .then(() => {
                let updatedDeadlifts = this.state.showAllDeadlifts.filter(deadlift => deadlift._id !== id)
                this.setState({ showAllDeadlifts: updatedDeadlifts})
            });
    }

    render() {
        return (
            <div>
                <Deadlift 
                    handleDelete={this.handleDelete}
                    data={this.state.showAllDeadlifts} />
            </div>
        )
    }
}

export default DeadliftStats;