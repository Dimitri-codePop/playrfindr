import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchTopTendances } from '../../actions/games';

const mapStateToProps = (state) => ({
  loading: state.games.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  topConnect: () => {
    dispatch(fetchTopTendances());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
