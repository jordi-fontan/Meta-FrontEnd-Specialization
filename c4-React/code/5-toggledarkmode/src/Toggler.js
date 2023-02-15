
import {useState} from 'react';

function Toggler() {
    const [modeDarkOn, setModeDarkOn] = useState(true);
    const colorw='white';
    const colorb='black';


    
    function handler(){
        setModeDarkOn( !modeDarkOn);
        console.log(modeDarkOn)
    }
    

    return(
    
       <div background-color={modeDarkOn ? colorb :colorw} >   This is a test  background={modeDarkOn ? colorb :colorw} 
            <button onClick={handler}>Click me!</button>
        </div>
        



    );
}
export default Toggler;