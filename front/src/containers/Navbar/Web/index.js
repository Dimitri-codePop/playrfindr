import { connect } from 'react-redux';
import Web from 'src/components/Navbar/Web';
// import { } from '../actions';

const mapStateToProps = (state) => ({
  userId: state.user.id,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  handleNavBarSearch: (value) => {
    const action = ICI(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Web);
