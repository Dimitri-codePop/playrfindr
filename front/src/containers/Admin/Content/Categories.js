import { connect } from 'react-redux';
import Categories from 'src/components/Admin/Content/Categories';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  changeCat: state.admin.new.category,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
