import { connect } from 'react-redux';
import Ludo from 'src/components/Ludo';
import { withRouter } from 'react-router-dom';
import { deleteGameFromLib } from 'src/actions/games';
const mapStateToProps = (state) => ({
  user: state.user.profil,
  games: state.games.gamesInit,
  game: state.user.profil.game,
  message: state.systemMessages.message,
  isOk: state.systemMessages.isOk,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  deleteGameFromLib: (value, name) => {
    dispatch(deleteGameFromLib(value, name))
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(Ludo);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
