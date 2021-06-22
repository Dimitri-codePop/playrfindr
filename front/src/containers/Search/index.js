import { connect } from 'react-redux';
import Search from 'src/components/Search';

const mapStateToProps = (state) => ({
  resultsUsers: state.search.resultsUsers,
  resultsGames: state.search.resultsGames,
  resultsSearch: state.search.resultsSearch,
  loading: state.search.loading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
