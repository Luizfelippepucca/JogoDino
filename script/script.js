const dino = document.querySelector('.dino');
const fundo = document.querySelector('.background');
let position = 0;


let pulando = false; 
function keyJump(e){
    if(e.keyCode === 32){
        if(!pulando){
            dinoJump();
        }
       
    
    };
};

function dinoJump(){
  
    let limite = 350;
    pulando = true;

    let upInterval = setInterval(()=>{

        if(position>=200){
           clearInterval(upInterval);

           let downInterval = setInterval(()=>{
               if(position<=0){
                   clearInterval(downInterval);
                   pulando = false;
               }else{
                position = position -20;
                dino.style.bottom = position + 'px';

               }
           },20);
        }else{
            position = position + 20;
            dino.style.bottom = position + 'px';

        }
     
     
     
      
    },15);
}

function obstaculo (){
    const obs = document.createElement('div');
    let obsImg = document.createElement('img');
    obsImg.setAttribute('src','img/cactus.png');
    obs.appendChild(obsImg);
    let obsPosition = 1200;
    let obsTime = Math.floor(Math.random()* 4000);
    

    
    obs.style.left = obsPosition +'px'; 
    obs.classList.add('obs');
    fundo.appendChild(obs);
   

    let lefInterval = setInterval(()=>{

        obsPosition = obsPosition - 10;
        obs.style.left = obsPosition + 'px'

        if(obsPosition < -80){
            clearInterval(lefInterval);
            fundo.removeChild(obs);
        }else if(obsPosition > 0 && obsPosition < 40 && position < 60){
          //game over
          clearInterval(lefInterval);
          document.body.innerHTML='<h1 class="game-over">Fim de jogo </h1>';
        }else{
            obsPosition = obsPosition - 10;
            obs.style.left = obsPosition + 'px';
        };

      

    },30);
    setTimeout(obstaculo,obsTime);

    
}


document.addEventListener('keyup',keyJump);
   

