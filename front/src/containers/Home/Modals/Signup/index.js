import { connect } from 'react-redux';
import Signup from 'src/components/Home/Modals/Signup';
import { } from '../actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
