import { connect } from 'react-redux';
import Form from 'src/components/Home/Modals/Login/Form';
import { changeValueLogin, login } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    const action = changeValueLogin(value, field);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
