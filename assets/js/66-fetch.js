import {searchShow} from "./66-movies.js";

document.querySelector("#txtSearch").addEventListener("input", (e)=>{
    const val=e.target.value;
    if(val.length<3) return;
    searchShow(val, (shows)=> {
        console.log(shows);
    });
});