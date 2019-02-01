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
                this.setState({ showAllFrontSquats: results.data })
            });
    };

    render() {
        return (
            <div>
                <FrontSquat 
                    data={this.state.showAllFrontSquats} />
            </div>
        )
    }
}

export default FrontSquatStats;