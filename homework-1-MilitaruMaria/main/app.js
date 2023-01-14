const distance = (a, b) => {
  if ((typeof a !== 'string') || (typeof b !== 'string')) {
		throw TypeError('InvalidType');
	}
	if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 

  var matrice = [];


  var i;
  for(i = 0; i <= b.length; i++){
    matrice[i] = [i];
  }


  var j;
  for(j = 0; j <= a.length; j++){
    matrice[0][j] = j;
  }

  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrice[i][j] = matrice[i-1][j-1];
      } else {
        matrice[i][j] = Math.min(matrice[i-1][j-1] + 1,
                                Math.min(matrice[i][j-1] + 1, 
                                         matrice[i-1][j] + 1)); 
      }
    }
  }

  return matrice[b.length][a.length];
}


module.exports.distance = distance