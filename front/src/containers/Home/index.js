import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  topTendances: state.games.topTendances,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
