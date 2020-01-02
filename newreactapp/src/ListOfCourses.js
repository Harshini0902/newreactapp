import React from 'react';
import Course from './courseComponent.js';
import axios from 'axios';
export default class ListOfCourses extends React.Component{
    constructor(props){
        super(props);
         
    }
    componentDidMount(){
        axios.get('https://api.myjson.com/bins/1dbua4').then(response=>this.props.fetchCourses(response.data));
    }
    render(){
        let coursesToBeCreated=this.props.allcourses.map(c=><Course courseDetails={c} {...this.props} />);
        console.log(this.props.allcourses);
        
        return <div> 
        <div className="jumbotron">
            <h1>Online Courses</h1>
        </div>
        <div className="row">
         {coursesToBeCreated}
        </div>
        </div>
         
          {
            /* <div><Course courseDetails={this.course1}/>
            <Course courseDetails={this.course2}/>
            <Course courseDetails={this.course3}/>
            <Course courseDetails={this.course4}/>
            <Course courseDetails={this.course5}/>
        </div> */}
    }
}