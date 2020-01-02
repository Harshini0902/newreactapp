import React from 'react';
import './App.css';
import ListOfCourses from './ListOfCourses.js';
import Posts from './posts.component';
import{Switch,Route,Link} from 'react-router-dom';
import{FuncComponent} from './functional.component';

class App extends React.Component{
  render(){
  
   return <div className="container"> 

  <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Online Shopping</Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/func">Functional</Link></li>
    </ul>
  </div>
</nav>

  <Switch>
  <Route exact path="/" render={()=> <ListOfCourses {...this.props} />} />
  <Route path="/posts" render={()=> <Posts {...this.props} />} />
   <Route path="/func" render={()=> <FuncComponent msg="hello" />} />
 </Switch>
   </div>

  }
}

export default App;
