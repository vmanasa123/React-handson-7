import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: [
    { name: "John", id: 1, age: "22", course: "MERN", batch: "January" },
    { name: "Dolly", id: 2, age: "23", course: "MERN", batch: "February" },
    { name: "Akarsh", id: 3, age: "26", course: "MERN", batch: "March" },
    { name: "pranavi", id: 4, age: "25", course: "MERN", batch: "April" },
    { name: "Raju", id: 5, age: "26", course: "MERN", batch: "June" },
  ],
  reducers: {
    editData: (state, action) => {
      console.log("Edit : ");
      console.log(action.payload);
      state[action.payload.index] = action.payload.newObj;
      return state; 
    },

    addData: (state, action) => {
      state = [...state, action.payload.newObj];
      return state; 
    },
  },
});

export const { editData, addData } = dataSlice.actions;
export default dataSlice.reducer;
