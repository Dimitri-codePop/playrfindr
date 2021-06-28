import { connect } from 'react-redux';
import Jeux from 'src/components/Admin/Content/Jeux';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  ICIAUSSI: (value) => {
    const action = ICI(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Jeux);
