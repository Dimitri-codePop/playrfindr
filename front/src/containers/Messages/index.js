import { connect } from 'react-redux';
import Messages from 'src/components/Messages';
import { fetchMessages, sendMessage, changeValueMessage, deleteMessage } from 'src/actions/messages';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  proc: state.messages.proc,
  messages: state.messages.messages,
  contentMessage: state.messages.contentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => {
    dispatch(fetchMessages());
  },
  changefieldMessage: (value, field) => {
    const action = changeValueMessage(value, field);
    dispatch(action);
  },
  sendMessageContent: (message, id) => {
    const action = sendMessage(message, id);
    dispatch(action);
  },
  deleteMessageContent: (id) => {
    const action = deleteMessage(id);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Messages);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
