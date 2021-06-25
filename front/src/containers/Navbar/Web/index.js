import { connect } from 'react-redux';
import Web from 'src/components/Navbar/Web';
import { withRouter } from 'react-router-dom';
// import { } from '../actions';

const mapStateToProps = (state, ownprops) => ({
  userId: state.user.id,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

const container = connect(mapStateToProps, mapDispatchToProps)(Web);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
