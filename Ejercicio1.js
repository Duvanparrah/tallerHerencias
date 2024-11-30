// Ejercicio 1: Crea una clase Animal con las propiedades nombre y edad, y un método hacerSonido() que imprima "El animal hace un sonido.". Luego, crea una clase Perro que herede de Animal y sobrescriba el método hacerSonido() para imprimir "El perro ladra: ¡Guau!".

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
    constructor(nombre, edad) {
      super(nombre, edad);
    }
    hacerSonido() {
      console.log("El perro hace: ¡Guau!");
    }
  }
  
  let miAnimal = new Animal("Roscon", 5);
  miAnimal.hacerSonido(); 
  
  // Creamos un objeto de la clase Perro
  let miPerro = new Perro("Titoelbambino", 3);
  miPerro.hacerSonido();
  