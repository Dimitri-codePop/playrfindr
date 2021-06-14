import { connect } from 'react-redux';
import Filter from 'src/components/Jeux/Filter';

const mapStateToProps = (state) => ({
  loading: state.games.loading,
  categories: state.games.categories,
  themes: state.games.themes,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
