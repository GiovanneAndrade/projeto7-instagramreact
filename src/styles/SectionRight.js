function SeletionR (props) {return(
    <div class="sidebar">
        <div class="sidebar-stores">
            <div class="sidebar-fotos">
                <img src={props.images}  />
            
                <div class="texto">
                    <p>{props.texto}<b>{props.texto1}</b> </p>
                    <p class="leg">{props.testo2}</p>
                </div>
            </div>

            <div class="sidebar-seguir">
                <p>{props.testo3}</p>

            </div>
        
        </div>

    </div>
    )}

function SectionRight () {  
  return (
        <div class="section-right"> 
            <div class="catana">
                <img src="./image/catanacomics.png" alt=""/>
                <div class="texto">
                    <p><b>catanacomics</b> </p>
                    <p class="leg">Catana</p>
                </div>
            </div>
            <div class="sidebar">
                <div class="sidebar-stores">
                    <div class="sidebar-fotos">
                        
                        <div class="primeiro-texto"> 
                            <p class="leg">Sugestões para você</p> 
                        </div>
                    </div>
                    <div class="sidebar-ver-tudo">
                        <p>ver tudo</p>
                    </div>
                </div>
            </div>
            <SeletionR images="./image/badvibesmemes.png" texto="" texto1="bad.vibes.memes" testo2="Segue você"
            testo3="Seguir"/>
            <SeletionR images="./image/chibirdart.png" texto="" texto1="chibirdart" testo2="Segue você"
            testo3="Seguir"/>
            <SeletionR images="./image/razoesparaacreditar.png" texto="" texto1="razoesparaacreditar" testo2="Novo no Instagram"
            testo3="Seguir"/>
            <SeletionR images="./image/adorableanimals1.png" texto="" texto1="adorable_animals" testo2="Segue você"
            testo3="Seguir"/>
            <SeletionR images="./image/smallcutecats.png" texto="" texto1="smallcutecats" testo2="Segue você"
            testo3="Seguir"/>

            <div class="sidebar">
                <div class="sidebar-stores">
        
                    
                    <div class="texto-importante">
                    
                        <p class="paragrafo"> Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags • 
                        Idioma</p>
                        <p >© 2021 INSTAGRAM DO FACEBOOK</p>  
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SectionRight