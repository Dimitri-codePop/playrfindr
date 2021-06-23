import { connect } from 'react-redux';
import Authors from 'src/components/Admin/Content/Authors';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  firstname: state.admin.new.author.firstname,
  lastname: state.admin.new.author.lastname,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
