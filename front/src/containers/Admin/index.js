import { connect } from 'react-redux';
import Admin from 'src/components/Admin';
import { fetchTypes } from 'src/actions/games';
import { fetchDepartements } from 'src/actions/user';
import { fetchUsers, fetchAuthors, fetchEditors } from 'src/actions/admin';
import { fetchEvents} from 'src/actions/events';

const mapStateToProps = (state) => ({
  games: state.games.goodGames,
  categories: state.games.categories,
  departments: state.user.departements,
  events: state.events.events,
  editors: state.admin.editors,
  users: state.admin.users,
  themes: state.games.themes,
  loading: state.games.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  loadTypes: () => {
    dispatch(fetchTypes());
  },
  loadDepartements: () => {
    dispatch(fetchDepartements());
  },
  loadUsers: () => {
    console.log("admin users")
    dispatch(fetchUsers());
  },
  loadEvents: () => {
    console.log("admin events");
    dispatch(fetchEvents());
  },
  loadEditors: () => {
    console.log("admin Editors");
    dispatch(fetchEditors());
  },
  loadAuthors: () => {
    console.log("admin Editors");
    dispatch(fetchAuthors());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
