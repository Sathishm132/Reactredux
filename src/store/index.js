import { configureStore, createSlice } from "@reduxjs/toolkit"
const initialCounterState={counter:0,showCounter:false};
const initialAuthState={authentication:false}

const counterslice=createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increament(state){
            state.counter++
            
        },
        decreament(state){
            state.counter--
        },
        increase(state,action){
            state.counter=state.counter+action.payload;
        }
    }
})
const AuthSlice=createSlice({
    name:"Auth",
    initialState:initialAuthState,
    reducers:{
        logout(state){
            state.authentication=false
        },
        login(state){
            state.authentication=true;

        }


    }
})
const stored =configureStore({
    reducer:{counter:counterslice.reducer,auth:AuthSlice.reducer}

})
export const AuthAction=AuthSlice.actions;
export const CounterAction=counterslice.actions;
export default stored;

