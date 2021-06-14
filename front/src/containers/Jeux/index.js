  
import { connect } from 'react-redux';
import Jeux from 'src/components/Jeux';
import { changeTheme, changeCat } from 'src/actions/games';

const mapStateToProps = (state) => ({
  games : state.games.goodGames,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeTheme: (event) => {

    const action = changeTheme(event);
    dispatch(action);
  },
  handleChangeCat: (event) => {

    const action = changeCat(event);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Jeux);
