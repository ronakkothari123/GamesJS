const picture = [];
const colors = [];

function initializePicture(){
    const randomNum = Math.floor(Math.random());

    if(randomNum === 0){
        picture.push([0,0,0,0,1,1,1,1,0,0,0,0]);
        picture.push([0,0,1,1,2,2,2,2,1,1,0,0]);
        picture.push([0,1,2,2,3,2,2,2,2,2,1,0]);
        picture.push([0,1,2,3,3,3,2,2,2,2,1,0]);
        picture.push([1,2,2,2,3,2,2,2,2,2,2,1]);
        picture.push([1,2,2,2,2,1,1,2,2,2,2,1]);
        picture.push([1,1,2,2,1,3,4,1,2,2,1,1]);
        picture.push([1,3,1,1,1,4,4,1,1,1,4,1]);
        picture.push([0,1,3,3,3,1,1,4,4,4,1,0]);
        picture.push([0,1,4,3,3,3,4,4,4,4,1,0]);
        picture.push([0,0,1,1,4,4,4,4,1,1,0,0]);
        picture.push([0,0,0,0,1,1,1,1,0,0,0,0]);
    }
}

initialize();