
import { connect } from 'react-redux';
import Jeu from 'src/components/Jeu';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Jeu);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
