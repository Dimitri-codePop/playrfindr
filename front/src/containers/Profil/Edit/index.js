import { connect } from 'react-redux';
import Edit from 'src/components/Profil/Edit';
import { editUser, changeValueEditUser, changeSelectFieldEditUser, deleteSelectField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  departements: state.user.departements,
  themes: state.games.themes,
  categories: state.games.categories,
  selectThemes: state.user.profil.theme,
  selectCat: state.user.profil.category,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  changefieldEdit: (value, field) => {
    const action = changeValueEditUser(value, field);
    //console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
  handleEdit: () => {
    dispatch(editUser());
  },
  changeSelectField: (value, field) => {
    const action = changeSelectFieldEditUser(value, field);
    console.log(value, field);
    dispatch(action);
  },
  deleteSelectField: (value, field) => {
    const action = deleteSelectField(value, field);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
