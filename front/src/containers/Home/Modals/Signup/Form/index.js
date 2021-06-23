import { connect } from 'react-redux';
import Form from 'src/components/Home/Modals/Signup/Form';
import { signUp, changeValueSignup, changeSelectField, deleteSelectSignupField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  categories: state.games.categories,
  themes: state.games.themes,
  selectThemes: state.user.themes,
  selectCat: state.user.categories,
  departements: state.user.departements,
  departement: state.user.departement,
  birthdate: state.user.birthdate,
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
  changeSelectField: (value, field) => {
    const action = changeSelectField(value, field);
    dispatch(action);
  },
  deleteSelectField: (value, field) => {
    const action = deleteSelectSignupField(value, field);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
