export const imageAnalysisReducer = (state, action) => {
    switch(action.type){
        case "ADD_IMG_DATA":
            return(action.imageData)
        default:
            return state
    }
}