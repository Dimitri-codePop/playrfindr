import { connect } from 'react-redux';
import EditEvent from 'src/components/Events/Item/EditEvent';
import { editEvent, EditValueEvent } from 'src/actions/events';

const mapStateToProps = (state) => ({
  label: state.events.label,
  date: state.events.date,
  address: state.events.address,
  number_address: state.events.number_address,
  town: state.events.town,
  content: state.events.content,
  max_player: state.events.max_player,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditEvent: (id) => {
    const action = editEvent(id);
    dispatch(action);
  },
  changefieldEvent: (value, field) => {
    const action = EditValueEvent(value, field);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
