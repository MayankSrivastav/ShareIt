import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './main.js';

function mapStateToProps(state) {
  return {
    props: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// connect component to redux store
const App = connect(mapStateToProps, mapDispatchToProps);

export default App;