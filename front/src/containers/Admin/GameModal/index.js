import { connect } from 'react-redux';
import GameModal from 'src/components/Admin/GameModal';
import { } from 'src/actions/admin';

const mapStateToProps = (state) => ({
  label: state.admin.new.jeu.label,
  duration: state.admin.new.jeu.duration,
  player_min: state.admin.new.jeu.player_min,
  player_max: state.admin.new.jeu.player_max,
  age_min: state.admin.new.jeu.age_min,
  year: state.admin.new.jeu.year,
  describe: state.admin.new.jeu.describe,
  author: state.admin.new.jeu.author,
  editor: state.admin.new.jeu.editor,
  theme: state.admin.new.jeu.theme,
  category: state.admin.new.jeu.category,
});

const mapDispatchToProps = (dispatch) => ({
  // exemple de fonction pour dispatch
  ICIAUSSI: (value) => {
    const action = ICI(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameModal);
