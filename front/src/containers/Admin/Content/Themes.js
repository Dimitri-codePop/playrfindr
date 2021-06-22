import { connect } from 'react-redux';
import Themes from 'src/components/Admin/Content/Themes';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  changeTheme: state.admin.new.theme,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  ICIAUSSI: (value) => {
    const action = ICI(value);
    console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Themes);
