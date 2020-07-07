import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvents, putEvents } from '../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  async componentDidMount() {
      const { id } = this.props.match.params.id;
      if (id) await this.props.getEvents(id);
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error} } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  async onSubmit(values) {
    await this.props.putEvents(values);
    this.props.history.push('/');
  }

  async onDeleteClick() {
    const id = this.props.match.params.id;
    await this.props.deleteEvents(id);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";
  return errors;
}
const mapStateToProps = (state, ownProps) => {
    const event = state.events[ownProps.match.params.id];
    return { initialValues: event, state}
}
const mapDispatchToProps = ({ deleteEvents, getEvents, putEvents });

export default connect(mapStateToProps, mapDispatchToProps)(
        reduxForm({ validate, form: 'eventNewForm', enableReinitialize: true }
    )(EventsShow));
