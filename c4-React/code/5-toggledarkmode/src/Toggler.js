function Toggler() {
    let modeDarkOn= true;
    const colorw=<p>white</p>;
    const colorb=<p>black</p>;
    const toggle= ()=> {modeDarkOn= !modeDarkOn;alert('Argg '+ modeDarkOn)}  ;
    function handler()
    {
        
        modeDarkOn= !modeDarkOn;
        console.log(modeDarkOn);
        
        
    }
    

    return(
    
       <div  >{modeDarkOn ? colorb :colorw}
               
        
            <button onClick={handler}>Click me!</button>
            <button onClick={toggle} >Click me!</button>
        </div>
        



    );
}
export default Toggler;