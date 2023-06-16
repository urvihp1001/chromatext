
import { createContext, useContext } from "solid-js";
//createContext= used to create a context object
//useContext= hook to access the context value

import {createStore} from 'solid-js/store' //used to manage State in solidjs

export type ThemeContextState={
    readonly color:string;
    readonly title:string;
};
//this is an object with 2 properties, both being string type called color and title

export type ThemeContextValue=[
    state:ThemeContextState,//type of state is ThemeContextState
    actions:{
        changeColor:(color:string)=>void;//objects that take string type arg and return void
        changeTitle:(title:string)=>void;
    }
];//array storing state and actions related to the theme context==== array of objects

const defaultState={
    color:"#00ff00",
    title:"fallback title",
}//defines default state for ThemeContext  

const ThemeContext=createContext<ThemeContextValue>([
    defaultState,
    {
changeColor:()=> undefined,
changeTitle:()=> undefined,
    },
]);//createContext is used to create theme context object. receives generic type ThemeContextValue and init it with
//default state and actions
export const ThemeProvider:ParentComponent<{color?:string; title?:string}>=(props)=>{const [state,setState]=createStore({
    color:props.color??defaultState.color,
    title:props.title??defaultState.title,
});
const changeColor=(color:string)=>setState("color",color);
const changeTitle=(title:string)=>setState("title",title);

return(
    <ThemeContext.Provider value={[state,{changeColor,changeTitle}]}>{props.children}</ThemeContext.Provider>
);
}
export const useTheme=()=>useContext(ThemeContext)