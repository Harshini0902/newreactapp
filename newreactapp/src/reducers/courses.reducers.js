export function courses(defStore=[],action){
    switch(action.type){
        case 'INCREMENT_LIKES':
           let theIndex=defStore.findIndex(c=>c.id == action.theId);
           return [
               ...defStore.slice(0,theIndex),
               {...defStore[theIndex],likes:defStore[theIndex].likes+1},
               ...defStore.slice(theIndex+1)
           ];//return a new store data

        case'DELETE_COURSE':
            return defStore.filter(c=>c.id !== action.theId);
            
        case 'FETCH_COURSES':
            return action.response;
         default:
            return defStore;
    }


}