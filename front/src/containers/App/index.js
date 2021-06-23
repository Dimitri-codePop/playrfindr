import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchTopTendances, fetchTypes } from 'src/actions/games';
import { fetchDepartements, fetchUser } from 'src/actions/user';
const mapStateToProps = (state) => ({
  loading: state.games.loading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  topConnect: () => {
    dispatch(fetchTopTendances());
  },
  loadTypes: () => {
    dispatch(fetchTypes());
  },
  loadDepartements: () => {
    dispatch(fetchDepartements());
  },
  loadUser: () => {
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
