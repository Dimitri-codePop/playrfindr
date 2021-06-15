import { connect } from 'react-redux';
import Item from 'src/components/Events/Item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Item);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

