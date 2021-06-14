import { connect } from 'react-redux';
import Content from 'src/components/Content';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Content);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
