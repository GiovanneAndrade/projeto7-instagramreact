import {CgChevronRightO} from 'react-icons/cg';

function MenuStores(props) {
    return (

        <div class="stores-legenda">
            <div class="foto1">
                <img src={props.img}/>
                </div>                   
            <p>{props.legenda}</p>
        </div>
    )
}

export default function Stores(){
   
    return (         
        <div class="stores">

<  CgChevronRightO className="iconStores"/>

           <MenuStores legenda= "9gag" img="./image/9gag1.png"/>
           <MenuStores legenda= "meowed" img="./image/meowed4.png"/>
           <MenuStores legenda= "barked" img="./image/barked1.png"/>
           <MenuStores legenda= "nathanwpyle" img="./image/fotoooa.jpg"/>
           <MenuStores legenda= "wawawiwac" img="./image/wawawiwacomicsa1.png"/>
           <MenuStores legenda= "respondeai" img="./image/respondeai1.png"/>
           <MenuStores legenda= "filomoderna" img="./image/filomoderna.png"/>
           <MenuStores legenda= "memeriago" img="./image/memeriagourmet1.png"/>
           
        </div>
                
    )
}

