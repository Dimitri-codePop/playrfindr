import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profil from 'src/components/Profil';
import { fetchProfil } from 'src/actions/user';

const mapStateToProps = (state, ownprops) => ({
  user: state.user.profil,
  userId: ownprops.match.params.id,
  game: state.user.profil.game,
  loading: state.user.loading,
  isLogged: state.user.isLogged,
  message: state.systemMessages.message,
  isOk: state.systemMessages.isOk,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  loadProfil: () => {
    const action = fetchProfil(ownprops.match.params.id);
    dispatch(action);
  },
});

const containerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profil));

export default containerWithRouter;
