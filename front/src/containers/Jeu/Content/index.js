import { connect } from 'react-redux';
import Content from 'src/components/Jeu/Content';
import { withRouter } from 'react-router-dom';
import { addGameToLib } from 'src/actions/games';
const mapStateToProps = (state) => ({
  message: state.systemMessages.message,
  isOk: state.systemMessages.isOk,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  addGameToLib: () => {
    dispatch(addGameToLib(ownprops.match.params.id));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Content);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
