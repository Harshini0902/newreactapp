export function posts(defStore=[],action){
        switch(action.type){
            case 'DELETE_POST':
               return defStore.filter(c=>c.id !== action.theId);
            case 'FETCH_POSTS':
                return action.response;
            default:
                return defStore;
        }

}