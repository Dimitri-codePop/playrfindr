import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleDisconnect: () => {
    const action = logout();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
