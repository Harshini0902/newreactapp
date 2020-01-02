import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AllActions from './actions/actionCreators';
import App from './App';

//map store as props available to Component
function mapStateToProps(storeDataFromProvider){
    return{
    allcourses:storeDataFromProvider.courses,
    allposts:storeDataFromProvider.posts
    }
}

//make actionCreators as props available to Component
function mapDispatchToProps(dispatcher){
    return bindActionCreators(AllActions,dispatcher);

}

export var EnhancedApp=connect(mapStateToProps,mapDispatchToProps)(App);