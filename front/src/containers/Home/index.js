import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  topTendances: state.games.topTendances,
  message: state.systemMessages.message,
  isOk: state.systemMessages.isOk,
  isLogged: state.user.isLogged,
  firstname: state.user.firstname,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
