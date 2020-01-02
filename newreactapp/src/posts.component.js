import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component{
    constructor(props){
        super(props);
      
    }

    DeleteHandler(postToBeDeleted){
       this.props.deletePost(postToBeDeleted);
    }

    componentDidMount(){
      
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res=>this.props.fetchPosts(res.data));
        
    
    }
     render(){
        var postsToBeCreated=this.props.allposts.map(p=><li key={p.id}>{p.title} 
        <button className="btn btn-danger btn-sm" onClick={this.DeleteHandler.bind(this,p.id)}>
            <span className="glyphicon glyphicon-trash"></span>
        </button>
        </li>)
        return <div>
        <h1>All Posts</h1>
       <ul> {postsToBeCreated} </ul>
        </div>
    }
}