import { connect } from 'react-redux';
import FormEvent from 'src/components/Events/FormEvent';
import { newEvent, changeValueEvent } from 'src/actions/events';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  label: state.events.label,
  date: state.events.date,
  address: state.events.address,
  number_address: state.events.number_address,
  town: state.events.town,
  content: state.events.content,
  max_player: state.events.max_player,
  lat: state.events.lat,
  long: state.events.long,
});

const mapDispatchToProps = (dispatch) => ({
  changefieldEvent: (value, field) => {
    const action = changeValueEvent(value, field);
    dispatch(action);
  },
  handleNewEvent: () => {
    dispatch(newEvent());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(FormEvent);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
