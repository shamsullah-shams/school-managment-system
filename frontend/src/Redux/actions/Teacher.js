import axios from "axios";

import { LOAD_TEACHERS } from "./Constants";


export const loadTeacher = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http://localhost:8080/api/admin/teachers/getAll");
            // console.log("resutl ", result);
            dispatch({
                type: LOAD_TEACHERS,
                data: result.data,
            });
        } catch (error) {
            console.log(error);
        }
    }

}