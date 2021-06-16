
import { connect } from 'react-redux';
import Jeu from 'src/components/Jeu';
import { withRouter } from 'react-router-dom';
import { fetchGame } from 'src/actions/games';

const mapStateToProps = (state, ownProps) => ({
  id:ownProps.match.params.id,
  game: state.games.oneGame,
  loading: state.games.loadingOneGame,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadGame: (id) => {
    dispatch(fetchGame(id));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Jeu);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
