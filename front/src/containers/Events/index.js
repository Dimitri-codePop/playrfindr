import { connect } from 'react-redux';
import Events from 'src/components/Events';
import { withRouter } from 'react-router-dom';
import { fetchEvents, reiniEvent} from 'src/actions/events';

const mapStateToProps = (state) => ({
  events: state.events.events,
  loading: state.events.loading,
  trigger: state.events.trigger,
});

const mapDispatchToProps = (dispatch) => ({
  loadEvents: () => {
    dispatch(fetchEvents());
  },
  reiniFormEvent: () => {
    dispatch(reiniEvent())
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(Events);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

