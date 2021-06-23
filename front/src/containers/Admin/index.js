import { connect } from 'react-redux';
import Admin from 'src/components/Admin';
import {
  fetchUsers,
  fetchAuthors,
  fetchAllType,
  fetchEditors,
  deleteElement,
  addElementType,
  changeFieldType,
} from 'src/actions/admin';

const mapStateToProps = (state) => ({
  games: state.admin.jeux,
  categories: state.admin.category,
  departments: state.user.department,
  events: state.admin.event,
  editors: state.admin.editor,
  authors: state.admin.author,
  users: state.admin.users,
  themes: state.admin.theme,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  loadTypes: () => {
    dispatch(fetchAllType());
  },
  loadUsers: () => {
    console.log("admin users");
    dispatch(fetchUsers());
  },
  loadEditors: () => {
    console.log("admin Editors");
    dispatch(fetchEditors());
  },
  loadAuthors: () => {
    console.log("admin Authors");
    dispatch(fetchAuthors());
  },
  deleteElement: (value, key) => {
    dispatch(deleteElement(value, key));
  },
  addElementType: (value, key) => {
    dispatch(addElementType(value, key));
  },
  onChangefieldType: (value, key) => {
    dispatch(changeFieldType(value, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
