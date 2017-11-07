import React, {Component} from 'react';
import Moment from 'moment';

export default class Date extends Component {
    render() {
        return (
            <div>
                <h1>{Moment().format('dddd')}</h1>
                <p>{Moment().format('LL')}</p>
            </div>
        );
    }
}
