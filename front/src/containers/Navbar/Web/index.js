import { connect } from 'react-redux';
import Web from 'src/components/Navbar/Web';
// import { } from '../actions';

const mapStateToProps = (state) => ({
  props: state.props,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  ICIAUSSI: (value) => {
    const action = ICI(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Web);
