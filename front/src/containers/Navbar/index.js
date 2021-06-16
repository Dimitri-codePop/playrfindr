import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';
// import { } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
