import { connect } from 'react-redux';
import Content from 'src/components/Content';
import { changeValueMessage, sendMessage } from 'src/actions/messages';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  paramsId: Number(ownProps.match.params.id),
  user: state.user.profil,
  idCurrent: state.user.id,
  contentMessage: state.messages.contentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changefieldMessage: (value, field) => {
    const action = changeValueMessage(value, field);
    dispatch(action);
  },
  sendMessageContent: (message, id) => {
    const action = sendMessage(message, id);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Content);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
