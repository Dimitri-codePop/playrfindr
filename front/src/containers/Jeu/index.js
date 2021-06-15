
import { connect } from 'react-redux';
import Jeu from 'src/components/Jeu';
import { withRouter } from 'react-router-dom';
import { fetchGame } from 'src/actions/games';

const mapStateToProps = (state) => ({
  game: state.games.oneGame,
  loading: state.games.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadGame: () => {
    dispatch(fetchGame(ownProps.match.params.id));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Jeu);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
