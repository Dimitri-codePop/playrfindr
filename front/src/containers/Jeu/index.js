
import { connect } from 'react-redux';
import Jeu from 'src/components/Jeu';
import { withRouter } from 'react-router-dom';
import { fetchGame } from 'src/actions/games';

const mapStateToProps = (state, ownProps) => ({
  id:ownProps.match.params.id,
  game: state.games.oneGame,
  loading: state.games.loadingOneGame,
  message: state.systemMessages.message,
  isOk: state.systemMessages.isOk,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadGame: (id) => {
    dispatch(fetchGame(id));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Jeu);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
