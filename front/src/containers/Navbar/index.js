import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';
import { logout } from 'src/actions/user';
import { changeSearchValue, navSearch } from 'src/actions/search';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  search: state.search.search,
});

const mapDispatchToProps = (dispatch) => ({
  handleDisconnect: () => {
    const action = logout();
    dispatch(action);
  },
  handleNavBarSearchValue: (value) => {
    const action = changeSearchValue(value);
    dispatch(action);
  },
  handleNavSearch: (value) => {
    const action = navSearch(value);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
