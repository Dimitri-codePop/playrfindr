import { connect } from 'react-redux';
import Editors from 'src/components/Admin/Content/Editors';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  changeEditor: state.admin.new.editor,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Editors);
