import { connect } from 'react-redux';
import Content from 'src/components/Content';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  paramsId: Number(ownProps.match.params.id),
  user: state.user.profil,
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Content);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
