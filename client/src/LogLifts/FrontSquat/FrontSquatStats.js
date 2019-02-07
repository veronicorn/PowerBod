import React from 'react';
import FrontSquat from './FrontSquat';
import axios from 'axios';

class FrontSquatStats extends React.Component {
    state = {
        showAllFrontSquats: [],
    };

    componentDidMount() {
        axios.get('/api/frontsquats')
            .then((results) => {
                this.setState({ showAllFrontSquats: results.data.sort((a, b) => new Date(b.date) - new Date(a.date)) 
                });
            });
    };

    handleDelete = (id) => {
        axios.delete(`/api/frontsquats/${id}`)
            .then(() => {
                let updatedFrontSquats = this.state.showAllFrontSquats.filter(frontsquat => frontsquat._id !== id)
                this.setState({ showAllFrontSquats: updatedFrontSquats})
            });
    };

    render() {
        return (
            <div>
                <FrontSquat 
                    handleDelete={this.handleDelete}
                    data={this.state.showAllFrontSquats} />
            </div>
        )
    }
}

export default FrontSquatStats;