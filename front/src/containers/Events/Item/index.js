import { connect } from 'react-redux';
import Item from 'src/components/Events/Item';
import { addToEvent, deleteEvent } from 'src/actions/events';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddToEvent: (value) => {
    const action = addToEvent(value);
    dispatch(action);
  },
  handleDeleteEvent: (value) => {
    const action = deleteEvent(value);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Item);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

