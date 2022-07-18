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
   

    const NovoImgLegenda = [
        {legenda: "9gag", img: "./image/9gag1.png"},
        {legenda: "meowed", img: "./image/meowed4.png"},
        {legenda: "barked", img: "./image/barked1.png"},
        {legenda: "nathanwpyle", img: "./image/fotoooa.jpg"},
        {legenda: "wawawiwac", img: "./image/wawawiwacomicsa1.png"},
        {legenda: "respondeai", img: "./image/respondeai1.png"},
        {legenda: "filomoderna", img: "./image/filomoderna.png"},
        {legenda: "memeriago", img: "./image/memeriagourmet1.png"},
    ];

     

    return (         
        <div class="stores">

         <  CgChevronRightO className="iconStores"/>
          
         { NovoImgLegenda.map(item => <MenuStores legenda={item.legenda} img={item.img} />) }
           
        </div>
                
    )
}

