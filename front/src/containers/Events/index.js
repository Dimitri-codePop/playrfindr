import { connect } from 'react-redux';
import Events from 'src/components/Events';
import { withRouter } from 'react-router-dom';
import { fetchEvents} from 'src/actions/events';

const mapStateToProps = (state) => ({
  events: state.events.events,
  loading: state.events.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadEvents: () => {
    dispatch(fetchEvents());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Events);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

