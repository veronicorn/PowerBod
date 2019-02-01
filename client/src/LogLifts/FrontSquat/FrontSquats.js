import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FrontSquatForm from './FrontSquatForm';
import axios from 'axios';

class FrontSquats extends Component {
    state = {
        frontSquatStats: [],
        newFrontSquat: {
            weight: '',
            reps: '',
            sets: '',
            notes: ''
        },
        date: ''
    };

    handleChange = (event) => {
        const inputField = event.target.name;
        let newFrontSquat2 = this.state.newFrontSquat;
        newFrontSquat2[inputField] = event.target.value;
        this.setState({ newFrontSquat: newFrontSquat2 });
    };

    saveFrontSquat = (event) => {
        event.preventDefault();
        axios.post('/api/frontsquats', this.state.newFrontSquat, this.state.date)
            .then(results => {
                // console.log(results.data);
                this.setState({ frontSquatStats: [this.state.newFrontSquat, this.state.date, results.data] })
            });
        this.props.history.push('/myfrontsquats');
    };

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
      let date = new Date().toDateString();
      this.setState({ date });
    };

    render() {
        return (
            <div>
                <FrontSquatForm
                    date={this.state.date}
                    weightVal={this.state.newFrontSquat.weight}
                    repsVal={this.state.newFrontSquat.reps}
                    setsVal={this.state.newFrontSquat.sets}
                    notesVal={this.state.newFrontSquat.notes}
                    saveFrontSquat={this.saveFrontSquat}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default withRouter(FrontSquats);