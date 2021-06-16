import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profil from 'src/components/Profil';
import { fetchProfil } from 'src/actions/user';

const mapStateToProps = (state) => ({
  user: state.user.profil,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  loadProfil: () => {
    console.log('je passe ici');
    const action = fetchProfil(ownprops.match.params.id);
    dispatch(action);
  },
});

const containerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profil));

export default containerWithRouter;
