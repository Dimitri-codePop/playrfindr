import { connect } from 'react-redux';
import Login from 'src/components/Home/Modals/Login';
import { } from 'src/actions/user';

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
