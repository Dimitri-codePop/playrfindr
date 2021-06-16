import { connect } from 'react-redux';
import Card from 'src/components/Home/Card';
import { } from '../actions';

const mapStateToProps = (state) => ({
  props: state.props,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  ICIAUSSI: (value) => {
    const action = ICI(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
