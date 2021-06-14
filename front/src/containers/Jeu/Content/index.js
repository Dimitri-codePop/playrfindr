import { connect } from 'react-redux';
import Content from 'src/components/Jeu/Content';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Content);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
