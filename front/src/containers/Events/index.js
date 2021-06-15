import { connect } from 'react-redux';
import Events from 'src/components/Events';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Events);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

