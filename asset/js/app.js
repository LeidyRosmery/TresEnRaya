var a1 = [0,0,0];
var a2 = [0,0,0];
var a3 = [0,0,1];
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

function TresEnRaya(){
  var jugador=1 ;	//determina el turno de cada jugador (jugador 1 y 2)
  var comprobarPieza=false;
		//inicialmente no comprueba por lo que comienza siendo falso, sirve para saber si pieza ha entrado o no
console.log(comprobarPieza);
while(comprobarPieza==false){
  var x=  parseInt(prompt("ingrese la casilla fila "));
  var y= parseInt(prompt("ingrese la columnas"));
  if( introPieza(jugador,x,y)== true){
    comprobarPieza=true;
    console.log(comprobarPieza);
  }
}

  }
TresEnRaya();
