import Stores from "./Stores"
import SectionRight from "./styles/SectionRight"
import  { AiOutlineHeart, AiOutlineEllipsis} from 'react-icons/ai';
import {IoMdPaperPlane  } from 'react-icons/io';
import {MdOutlineChatBubbleOutline} from 'react-icons/md';
import {HiOutlineBookmark} from 'react-icons/hi';
  

function Section  (props) { return (
    

    <div class="sub-section-buttom">

    <div class="section-buttom-top">
        <div class="section-buttom-esquerda">
           <img src={props.img}/>
            <p class="gato">{props.legenda}</p>
        </div>
        <div class="section-buttom-direita">
            {props.icon}
        </div>
    </div>
    <div class="section-buttom-base">
        <img class="foto-gato" src={props.gato}/>
    </div>

    <div class="base-foto-1">

        <div class="base-foto">

            <div class="icon-icon2">
               {props.AiOutlineHeart} 
               {props.MdOutlineChatBubbleOutline}  
               {props.IoMdPaperPlane}  
                 
            </div>

            <div class="comentario">
                <img src={props.comentario}  />
                <p>{props.coment} <strong>{props.coment1}</strong> {props.coment2} <strong> {props.coment3}</strong>
                </p>

            </div>

        </div>

        <div class="icon-salvar">
            <HiOutlineBookmark/>

        </div>
    </div>
</div>
)}

function SectionContainer (){
  return (
        <div class="section-container">
        
            <div class="section-left">
                
                <div class="section-top">     
                  <Stores/>
                </div>

                <div class="section-buttom">
                
                   <Section legenda="meowed" img="./image/meowed4.png"  
                   icon = {<AiOutlineEllipsis/>} gato="./image/cat.png" 
                   AiOutlineHeart= {<AiOutlineHeart/>} MdOutlineChatBubbleOutline= {<MdOutlineChatBubbleOutline/>}
                   IoMdPaperPlane={<IoMdPaperPlane/>} comentario="./image/respondeai.png" coment="Curtido por"
                   coment1="respondeai" coment2="e" coment3="outras 101.523 pessoas"/>

                   <Section legenda="meowed" img="./image/meowed4.png"  
                   icon = {<AiOutlineEllipsis/>} gato="./image/cat.png" 
                   AiOutlineHeart= {<AiOutlineHeart/>} MdOutlineChatBubbleOutline= {<MdOutlineChatBubbleOutline/>}
                   IoMdPaperPlane={<IoMdPaperPlane/>} comentario="./image/respondeai.png" coment="Curtido por"
                   coment1="respondeai" coment2="e" coment3="outras 101.523 pessoas"/>

                   <Section legenda="meowed" img="./image/meowed4.png"  
                   icon = {<AiOutlineEllipsis/>} gato="./image/cat.png" 
                   AiOutlineHeart= {<AiOutlineHeart/>} MdOutlineChatBubbleOutline= {<MdOutlineChatBubbleOutline/>}
                   IoMdPaperPlane={<IoMdPaperPlane/>} comentario="./image/respondeai.png" coment="Curtido por"
                   coment1="respondeai" coment2="e" coment3="outras 101.523 pessoas"/>


                </div>

            </div>

            <SectionRight/>
        
        </div>
    )


}
export default SectionContainer