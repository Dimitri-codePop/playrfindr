import { connect } from 'react-redux';
import FormEvent from 'src/components/Events/FormEvent';
import { newEvent, changeValueEvent } from 'src/actions/events';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  label: state.events.label,
  date: state.events.date,
  location: state.events.location,
  content: state.events.content,
  max_player: state.events.max_player,
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
