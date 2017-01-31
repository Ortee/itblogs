import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Layout from './Layout.jsx';

function mapStateToProps(state) {
  return {
    cards: state.cards,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const AppLoader = connect(mapStateToProps, mapDispachToProps)(Layout);

export default AppLoader;
