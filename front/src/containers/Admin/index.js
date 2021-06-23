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
  editElementType,
  changeFieldAuthor,
  editElementAuthor,
} from 'src/actions/admin';
import { addElementAuthor } from '../../actions/admin';

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
    dispatch(fetchUsers());
  },
  loadEditors: () => {
    dispatch(fetchEditors());
  },
  loadAuthors: () => {
    dispatch(fetchAuthors());
  },
  deleteElement: (value, key) => {
    dispatch(deleteElement(value, key));
  },
  addElementType: (value, key) => {
    console.log(value);
    dispatch(addElementType(value, key));
  },
  editElementType: (value, key, id) => {
    console.log(value, key, id);
    dispatch(editElementType(value, key, id));
  },
  onChangefieldType: (value, key) => {
    console.log(value);
    dispatch(changeFieldType(value, key));
  },
  onChangefieldAuthor: (value, key) => {
    console.log(value, key);
    dispatch(changeFieldAuthor(value, key));
  },
  addElementAuthor: (value, key) => {
    dispatch(addElementAuthor(value, key));
  },
  editElementAuthor: (id) => {
    dispatch(editElementAuthor(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
