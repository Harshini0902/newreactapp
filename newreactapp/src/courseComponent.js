import React from 'react';
export default class CourseComponent extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
      //  this.state={count:this.props.courseDetails.likes};
    }
    incrementLikes(){
        //this.props.courseDetails.likes+=1;//props are readonly!
        //this.state.count=this.state.count + 1;//immutable hence must use setState
        //this.setState({count:this.state.count + 1})

        this.props.incrementCourseLikes(this.props.courseDetails.id);//dispatch an action
    }

    deleteCourse(){
        this.props.deleteCourse(this.props.courseDetails.id);//dispatch an action
    }
    render(){
       return <div className="col-md-4">
       <h1>{this.props.courseDetails.name}</h1>
     <img src={this.props.courseDetails.image} height="200 px" width="300 px"/>
       <h4>Price:{this.props.courseDetails.price}</h4>
        <h4>Trainer Name:{this.props.courseDetails.trainer}</h4>
        <h4>Location:{this.props.courseDetails.location}</h4>
        <button className="btn btn-primary mr-5" onClick={this.incrementLikes.bind(this)}>{this.props.courseDetails.likes}
            <span className="glyphicon glyphicon-thumbs-up"></span>
        </button>
         <button className="btn btn-danger" onClick={this.deleteCourse.bind(this)}>Delete
        </button>
       </div>
    }
}