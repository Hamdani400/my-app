import React, {Component} from 'react';

import propTypes from 'prop-types';

import Button from 'Elements/Button';
import {InputDate, InputNumber} from 'Elements/Form';

export default class BookingForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date (),
          endDate: new Date (),
          key: 'selection',
        },
      },
    };
  }

  updateData = e => {
    this.setState ({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate (prevProps, prevState) {
    const {data} = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date (data.date.startDate);
      const endDate = new Date (data.date.endDate);
      const countDuration = new Date (endDate - startDate).getDate ();
      this.setState ({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }
  }

  render () {
    return <div />;
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
