import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DeadliftForm from './DeadliftForm';
import axios from 'axios';

class Deadlifts extends Component {
    state = {
        deadliftStats: [],
        newDeadlift: {
            weight: '',
            reps: '',
            sets: '',
            notes: ''
        },
        date: ''
    };

    handleChange = (event) => {
        const inputField = event.target.name;
        let newDeadlift2 = this.state.newDeadlift;
        newDeadlift2[inputField] = event.target.value;
        this.setState({ newDeadlift: newDeadlift2 });
    };

    saveDeadlift = (event) => {
        event.preventDefault();
        axios.post('/api/deadlifts', this.state.newDeadlift, this.state.date)
            .then(results => {
                // console.log(results.data);
                this.setState({ deadliftStats: [this.state.newDeadlift, this.state.date, results.data] })
            });
        this.props.history.push('/mydeadlifts');
    };

    componentDidMount() {
        this.getDate();
    };

    getDate = () => {
      let date = new Date().toDateString();
      this.setState({ date });
    };

    render() {
        return (
            <div>
                <DeadliftForm
                    date={this.state.date}
                    weightVal={this.state.newDeadlift.weight}
                    repsVal={this.state.newDeadlift.reps}
                    setsVal={this.state.newDeadlift.sets}
                    notesVal={this.state.newDeadlift.notes}
                    saveDeadlift={this.saveDeadlift}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default withRouter(Deadlifts);