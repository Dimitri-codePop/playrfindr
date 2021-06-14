import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchTopTendances, fetchTypes } from '../../actions/games';

const mapStateToProps = (state) => ({
  loading: state.games.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  topConnect: () => {
    dispatch(fetchTopTendances());
  },
  loadTypes: () => {
    dispatch(fetchTypes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
