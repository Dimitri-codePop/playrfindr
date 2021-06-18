import { connect } from 'react-redux';
import EditPassword from 'src/components/Profil/EditPassword';
import { changeValueLogin, editPassword } from 'src/actions/user';

const mapStateToProps = (state) => ({
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  oldPassword: state.user.oldPassword,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  changeField: (value, field) => {
    const action = changeValueLogin(value, field);
    console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
  handleSubmitEdit: () => {
    dispatch(editPassword());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
