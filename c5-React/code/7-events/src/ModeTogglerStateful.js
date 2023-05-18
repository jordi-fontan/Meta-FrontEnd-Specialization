import { useState } from "react";

export default function ModeTogglerStateful(){

   
    const [darkmodeOn,setDarkMode]=useState(false) ;
    const [text,setText]=useState(<h1>DarkMode is off</h1>)  

    const lightStyle={background:"white",color:"green"};       
    const darkStyle={background:"black",color:"orange"};       
    
    const darkText=<h1>DarkMode is on</h1>;
    const lightText=<h1>DarkMode is off</h1>;
   
    
        //let darkmodeOn=false;
        function handleClick() {
            console.log('Changing state');
            setDarkMode(!darkmodeOn);
            darkmodeOn ? setText(darkText) : setText(lightText);
        }

        return (
            <div style={darkmodeOn ? darkStyle : lightStyle}>
                <button onClick={handleClick}> Change mode</button>
                {text}
            </div>

        );
    }
