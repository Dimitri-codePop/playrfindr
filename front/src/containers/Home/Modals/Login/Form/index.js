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
    console.log('ici je lance ma fonction login', action);
    dispatch(action);
  },
  handleLogin: () => {
    console.log('on submit');
    dispatch(login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
