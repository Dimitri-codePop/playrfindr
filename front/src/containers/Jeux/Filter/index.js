import { connect } from 'react-redux';
import Filter from 'src/components/Jeux/Filter';
import { fetchTypes } from 'src/actions/games'

const mapStateToProps = (state) => ({
  loading: state.games.loading,
  categories: state.games.categories,
  themes: state.games.themes,
});

const mapDispatchToProps = (dispatch) => ({
  loadTypes: () => {
    dispatch(fetchTypes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
