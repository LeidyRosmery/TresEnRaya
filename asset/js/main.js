var a1 = [0,0,0];
var a2 = [0,0,0];
var a3 = [0,0,0];
var tablero = [a1,a2,a3];

function introPieza (jugador, x,y){
	if(tablero[x][y] == 0){
    tablero[x][y]== jugador;
    return true ;
    }		// cuando es valida la accion, cambia de jugador. si devuelve falso sigue jugando el mismo
	else  {
    return  false ;
  }
}

function comprobarGanador (){ 		//para que le programa piense menos se empieza a comprobar si hay ganador a partir de 5 fichas
 for (var a=0 ; a<3 ; a++){
   if( tablero [a][0]== tablero[a][1] && tablero[a][1]== tablero[a][2]){
     return tablero [a][2]	;
   }
 }
	// esto significa que compruebe la linea a, hasta que las tres sean el mismo signo
			// es decir, ha ganado

	for( var a=0 ; a<3 ; a++	){	//la variable en columnas es igual,pero cambia el orden
		if( tablero [0][a]==tablero[1][a] && tablero [1][a]==tablero[2][a]){
      return tablero [1][a]	;
    }
  }

	if( tablero[0][0]==tablero[1][1] && tablero[1][1]==tablero[2][2] ){
    return tablero [2][2];
  }	// no tiene variable porque no hace un bucle ya que solo tiene dos opciones
	if(tablero[0][2]==tablero[1][1] && tablero[1][1]==tablero[2][0]){
   return tablero[0][2] ;
   } else {
     return 0;
   }
			//es decir, si no cumple ninguna, se sigue jugando
}

function TresEnRaya(){
	var jugador=1 ;	//determina el turno de cada jugador (jugador 1 y 2)
	var comprobarPieza=false;		//inicialmente no comprueba por lo que comienza siendo falso, sirve para saber si pieza ha entrado o no
  while(comprobarPieza==false){
  var x=  parseInt(prompt("ingrese la casilla fila "));
  var y= parseInt(prompt("ingrese la columnas"));
	if( introPieza(jugador,x,y)== true){
		comprobarPieza=true;
	}
    }			//si es verdero de cambia de jugador
console.log(jugador);
		if (jugador==1) {
		  jugador=2;

		}  		//si jugador 1 ha entrado pasa a jugador 2
		else{
      jugador=1;
    }
			console.log(jugador);

	var numPiezas=0	;	//declara la variable numero de piezas en la que empieza a comprobar el ganador a partir de que haya 5 piezas en el tablero


	var juegoTerminado=false;			//el juego comienza falso porque no se comprueba
	console.log(comprobarGanador());

		if(comprobarGanador()==true){
      alert("El juego a terminado");
    }


	var ganador=0;
    if (numPiezas>=5) {
    ganador=comprobarGanador();
    }
    if (comprobarGanador()==true) {
      if (ganador!==0) {
      juegoTerminado=true;
      alert("ganador");
      }
    }

}

TresEnRaya();
