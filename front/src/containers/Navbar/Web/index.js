import { connect } from 'react-redux';
import Web from 'src/components/Navbar/Web';
// import { } from '../actions';

const mapStateToProps = (state) => ({
  userId: state.user.id,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  ICIAUSSI: (value) => {
    const action = ICI(value);
    console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Web);
