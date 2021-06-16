import { connect } from 'react-redux';
import Item from 'src/components/Events/Item';
import { addToEvent } from 'src/actions/events';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleAddToEvent: (value) => {
    const action = addToEvent(value);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Item);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

