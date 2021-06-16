import { connect } from 'react-redux';
import Mobile from 'src/components/Navbar/Mobile';
// import { } from '../actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  handleNavBarSearch: (value) => {
    const action = ICI(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
