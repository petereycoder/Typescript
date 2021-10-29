"use strict";
(function () {
    //? Funciones básicas
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    // Parametros por defecto
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    //Rest?
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    //Tipo funcion
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    // Tipos
    //const batman: string = 'Bruce';
    //const superman: string = 'Clark';
    //const existe: boolean = false;
    // Tuplas
    //const parejaHeroes: [ string, string ] = [batman,superman];
    //const villano: [ string, number, boolean ] = ['Lex Lutor',5,true];
    // Arreglos
    //const aliados: string [] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    //Enumeraciones
    //enum fuerza{
    //acuaman = 0,
    //batman = 1,
    //flash = 5,
    //superman = 100
    //}
    //const fuerzaFlash:fuerza = fuerza.flash;
    //const fuerzaSuperman:fuerza = fuerza.superman;
    //const fuerzaBatman:fuerza = fuerza.batman;
    //const fuerzaAcuaman:fuerza = fuerza.acuaman;
    // Retorno de funciones
    //function activar_batiseñal(): string{
    //return 'activada';
    //}
    //function pedir_ayuda(): void{
    //console.log('Auxilio!!!');
    //}
    // Aserciones de Tipo
    //const poder: any = '100';
    //const largoDelPoder:number = (poder as string ).length; //Castear
    //console.log( largoDelPoder );
})();
