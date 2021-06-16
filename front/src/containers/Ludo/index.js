import { connect } from 'react-redux';
import Ludo from 'src/components/Ludo';

const mapStateToProps = (state) => ({
  games: state.games.gamesInit,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Ludo);
