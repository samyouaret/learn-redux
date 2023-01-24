
export const AddBug = (description) => {
    return {
    type: 'ADD_BUG',
    payload:{
        description
    }
}};