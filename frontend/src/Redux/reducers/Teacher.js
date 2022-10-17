import { LOAD_TEACHERS } from "../actions/Constants";

const initialState = {
    Teachers: [],
    Classes: [],
    Parents: [],
    Sections: [],
};




const loadTeachers = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TEACHERS:
            console.log("d ", action.data)
            console.log("t ", action.data.teachers);
            console.log("p ", action.data.parents);
            console.log("c ", action.data.classes);
            return {
                ...state,
                Teachers: [...action.data.teachers],
                Classes: [...action.data.classes],
                Parents: [...action.data.parents],
                Sections: [...action.data.sections]
            }
        default:
            return state;
    }

}


export default loadTeachers;