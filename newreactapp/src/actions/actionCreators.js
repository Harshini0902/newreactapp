export function incrementCourseLikes(theId){ //ACTION CREATOR 
     return{type:'INCREMENT_LIKES',theId:theId}; //action
    
}

export function deleteCourse(theId){
    return {type:'DELETE_COURSE',theId:theId};
}

export function deletePost(theId){
    return {type:'DELETE_POST',theId};
}

export function fetchCourses(response){
    return {type:'FETCH_COURSES',response:response};
}

export function fetchPosts(response){
    return {type:'FETCH_POSTS',response};
}