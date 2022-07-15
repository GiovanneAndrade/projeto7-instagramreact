import {FiInstagram} from 'react-icons/fi';
import {IoMdPaperPlane} from 'react-icons/io';
import  {AiOutlineCompass, AiOutlineHeart} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
 


 
function Topo  (){
return(
 
 <div class="header">
        <div class="sub-header">

            <div class="nav">
                <FiInstagram/>
                <div class="borda"></div>
                <img src="./image/logo1.png" class="logo" alt=""/>
            </div>
            <div class="nav-pt2">
                <input type="text" class="barrap" placeholder="pesquisar"/>
            </div>

            <div class="nav-pt3">
               
                       <IoMdPaperPlane/>        
                       <AiOutlineCompass/>
                      <AiOutlineHeart/>
                      <BsPerson/>
            </div>
        </div>
    </div>
   
)
  
}

export default Topo




















                        