function playSound(seletorAudio){

   const element = document.querySelector(seletorAudio);

   if(element && element.localName === 'audio' ){
            element.play();
        }
    else {
        alert('Element not found')
    }
   
}

const keyList = document.querySelectorAll('.key');

for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument = key.classList[1];
    const idAudio = `#sound_${instrument}`;  


    key.onclick = function(){
        playSound(idAudio);
    };

    key.onkeydown = function(event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('active');
        }

    }

    key.onkeyup = function() {
        key.classList.remove('active');
    }
}
