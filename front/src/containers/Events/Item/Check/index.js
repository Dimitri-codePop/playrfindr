import { connect } from 'react-redux';
import Check from 'src/components/Events/Item/Check';
import { removeFromEvent } from 'src/actions/events';

const mapStateToProps = (state) => ({
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveFromEvent: (value) => {
    const action = removeFromEvent(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Check);
