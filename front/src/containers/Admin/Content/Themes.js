import { connect } from 'react-redux';
import Themes from 'src/components/Admin/Content/Themes';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  changeTheme: state.admin.new.theme,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Themes);
