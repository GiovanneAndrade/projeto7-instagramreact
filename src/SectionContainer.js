import React, {useState} from "react";
import Stores from "./Stores"
import SectionRight from "./styles/SectionRight"
import {HiOutlineBookmark} from 'react-icons/hi';
import {AiFillHeart, } from 'react-icons/ai';
import {BsHeart} from 'react-icons/bs';

function Section  (props) {  
   
    return (
    

    <div class="sub-section-buttom">

    <div class="section-buttom-top">
        <div class="section-buttom-esquerda">
           <img src={props.img} />
            <p class="gato">{props.legenda}</p>
        </div>
        <div class="section-buttom-direita">
            {props.icon}
        </div>
    </div>
    <div class="section-buttom-base" >
        <img class="foto-gato" src={props.gato}/>
    </div>

    <div class="base-foto-1">

        <div class="base-foto" >

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
 let fotoo = "./image/cat.png"  
    const [Valor, setValor] = React.useState("BsHeart")
    
      const ArraySeletionButtom = [
         {legenda: "meowed", img: "./image/meowed4.png", icon:  < ion-icon  name="ellipsis-horizontal" class="pontos"></ion-icon>, gato:  fotoo,
          AiOutlineHeart:<AiFillHeart className={Valor} onClick={() => {
             setValor("vermelho")
              if (Valor === "vermelho"){ setValor("BsHeart")}
            }}  />,  
         MdOutlineChatBubbleOutline:<ion-icon name="chatbubble-outline"></ion-icon>, IoMdPaperPlane:<ion-icon name="paper-plane-outline"></ion-icon>,
          comentario:"./image/respondeai.png", coment:"Curtido por",
         coment1:"respondeai", coment2:"coment2", coment3:"outras 101.523 pessoas",}, 
         {legenda: "meowed", img: "./image/meowed4.png", icon:  < ion-icon  name="ellipsis-horizontal" class="pontos"></ion-icon>, gato:  fotoo,
          AiOutlineHeart:<AiFillHeart className={Valor} onClick={() => {
             setValor("vermelho")
              if (Valor === "vermelho"){ setValor("BsHeart")}
            }}  />, 
         MdOutlineChatBubbleOutline:<ion-icon name="chatbubble-outline"></ion-icon>, IoMdPaperPlane:<ion-icon name="paper-plane-outline"></ion-icon>,
          comentario:"./image/respondeai.png", coment:"Curtido por",
         coment1:"respondeai", coment2:"coment2", coment3:"outras 101.523 pessoas",}, 
         {legenda: "meowed", img: "./image/meowed4.png", icon:  < ion-icon  name="ellipsis-horizontal" class="pontos"></ion-icon>, gato:  fotoo,
          AiOutlineHeart:<AiFillHeart className={Valor} onClick={() => {
             setValor("vermelho")
              if (Valor === "vermelho"){ setValor("BsHeart")}
            }}  />, 
         MdOutlineChatBubbleOutline:<ion-icon name="chatbubble-outline"></ion-icon>, IoMdPaperPlane:<ion-icon name="paper-plane-outline"></ion-icon>,
          comentario:"./image/respondeai.png", coment:"Curtido por",
         coment1:"respondeai", coment2:"coment2", coment3:"outras 101.523 pessoas",}, 
      ]


    return (

        <div class="section-container">
            <div class="section-left">
                <div class="section-top">     
                  <Stores/>
                </div>    
                <div class="section-buttom">
                    {ArraySeletionButtom.map(item => <Section legenda={item.legenda} img={item.img} 
                    icon={item.icon} gato={item.gato} AiOutlineHeart={item.AiOutlineHeart } MdOutlineChatBubbleOutline={item.MdOutlineChatBubbleOutline} IoMdPaperPlane={item.IoMdPaperPlane}
                    comentario={item.comentario} coment={item.coment} coment2={item.coment2} coment3={item.coment3} />)}

                </div>
            </div>
            <SectionRight/>
     </div> 
    )
}
 
 
export default SectionContainer 