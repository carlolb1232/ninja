class Ninja{
  constructor({
    nombre,
    salud = 10,
    velocidad = 3,
    fuerza = 3,
  }){
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }
  
  sayName(){
    console.log(`Mi nombre es ${this.nombre}`)
  }

  showStats(){
    console.log(`NOMBRE: ${this.nombre}`);
    console.log(`FUERZA: ${this.fuerza}`);
    console.log(`VELOCIDAD: ${this.velocidad}`);
    console.log(`SALUD: ${this.salud}`);
  }

  drinkSake(){
    this.salud += 10;
  }
}

const ninja1 = new Ninja({
  nombre: "Hyabusa"
})

console.log(ninja1);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log(ninja1);
