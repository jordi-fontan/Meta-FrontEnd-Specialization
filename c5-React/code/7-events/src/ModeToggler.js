function ModeToggler(){
    
    const lightStyle={background:"white",color:"green"};       
    const darkStyle={background:"black",color:"orange"};       
    const darkText=<h1>DarkMode is on</h1>;
    const lightText=<h1>DarkMode is off</h1>;
    let darkmodeOn=false;
   
    return(
    <div style={darkmodeOn? darkStyle  :lightStyle}>
      <button onClick={()=>{ console.log('Changing state');darkmodeOn=!darkmodeOn}}> Change mode witout state (won't work)</button>
        {darkmodeOn?darkText:lightText}
        </div>

    );
}
export default ModeToggler;