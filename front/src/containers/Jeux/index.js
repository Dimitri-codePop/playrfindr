  
import { connect } from 'react-redux';
import Jeux from 'src/components/Jeux';
import { changeTheme, changeCat, fetchTypes } from 'src/actions/games';

const mapStateToProps = (state) => ({
  games : state.games.goodGames,
  loading: state.games.loading,
  categories: state.games.categories,
  themes: state.games.themes,
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
  loadTypes: () => {
    dispatch(fetchTypes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Jeux);
