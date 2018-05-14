function theBeatlesPlay(musicians, instruments) {
  array=[];
  for(i=0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays the ${instruments[i]}`);
  }
  return array
}