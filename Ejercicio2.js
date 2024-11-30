// Ejercicio 2: Amplía el ejercicio anterior. En la clase Perro, añade una propiedad adicional raza. Utiliza super en el constructor de Perro para inicializar las propiedades heredadas de Animal.

class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    hacerSonido() {
      console.log("El animal hace un sonido.");
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad, raza) {
      super(nombre, edad);
      this.raza = raza;
    }
    hacerSonido() {
      console.log("El perro hace: ¡Guau!");
    }
  

    mostrarInfo() {
      console.log(`Mi perro ${this.nombre}, tiene ${this.edad} años y es de la raza ${this.raza}.`);
    }
  }
  
  let miAnimal = new Animal("Roscon", 5);
  miAnimal.hacerSonido();
  
  let miPerro = new Perro("Titoelbambino", 3, "Labrador");
  miPerro.hacerSonido();
  miPerro.mostrarInfo();
  