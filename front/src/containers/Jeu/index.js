
import { connect } from 'react-redux';
import Jeu from 'src/components/Jeu';
import { withRouter } from 'react-router-dom';
import { FindGoodGame } from 'src/selectors/find'

const mapStateToProps = (state, ownProps) => ({
  game: FindGoodGame(state.games.gamesInit, ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Jeu);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
