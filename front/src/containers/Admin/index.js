import { connect } from 'react-redux';
import Admin from 'src/components/Admin';
import { fetchTypes } from 'src/actions/games';
import { fetchDepartements } from 'src/actions/user';
import { fetchUsers } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  games: state.games.goodGames,
  categories: state.games.categories,
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
    dispatch(fetchUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
