import React,{createContext,useContext,useReducer} from "react";

//context provides us a way to pass data through the component through the component 
//tree without having to pass props at every level.

export const StateContext = createContext(); //creates data layer

//wrap the app and provide the data layer with the data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
  
  // Pull information from the data layer
  export const useStateValue = () => useContext(StateContext);