import { connect } from 'react-redux';
import Jeux from 'src/components/Admin/Content/Jeux';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  ICIAUSSI: (value) => {
    const action = ICI(value);
    console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Jeux);
