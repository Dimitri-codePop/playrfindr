import { connect } from 'react-redux';
import Form from 'src/components/Home/Modals/Signup/Form';
import { signUp, changeValueSignup } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  password: state.user.password,
  confirmpassword: state.user.confirmpassword,
});

const mapDispatchToProps = (dispatch) => ({
  changefieldSignup: (value, field) => {
    const action = changeValueSignup(value, field);
    // console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
  handleSignup: () => {
    dispatch(signUp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
