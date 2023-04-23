const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  const coordinate =[0,0]
  for(const position of moves){
    if(position === 'north'){
      coordinate[1] = coordinate [1]+1;
    } else if (position === 'south'){
      coordinate[1] = coordinate [1]-1;
    } else if (position === 'west'){
      coordinate[0] = coordinate [0]-1;
    } else if (position === 'east'){
      coordinate[0] = coordinate [0]+1;
    }
  }
  return coordinate
}

console.log(finalPosition(moves))