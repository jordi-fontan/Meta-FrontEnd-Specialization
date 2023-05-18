function Button(){
    // const jsBtn =document.getElementById('js-btn');
    // jsBtn.addEventListener('click',function(){console.log('Javascript click');})
    const handleClick=()=>console.log('Buttton clicked');
    const handleMO=()=>console.log('Mouse over Buttton');
   
    return (
       <>
            <button onClick={handleClick} on onMouseOver={handleMO}>Click me JSX</button>
            {/* <button id='js-btn' >Click me JS</button> */}
        </>
    );
}
export default Button;