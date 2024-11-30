// Ejercicio 3: crea una función constructora Vehiculo con la propiedad marca y un método arrancar() que imprima "El vehículo ha arrancado.". Luego, crea una función constructora Coche que herede de Vehiculo y añada la propiedad modelo. Añade un método mostrarInfo() que imprima la marca y el modelo del coche.

function Vehiculo(marca) {
    this.marca = marca; 
    this.arrancar = function() { console.log("El vehículo ha arrancado.");};
  }
  

  function Coche(marca, modelo) {
    Vehiculo.call(this, marca);
    this.modelo = modelo;
  

    this.mostrarInfo = function() {
      console.log(`Este coche es un ${this.marca} ${this.modelo}.`);
    };
  }
  

  let miVehiculo = new Vehiculo("Toyotita");
  miVehiculo.arrancar(); 
  
  // Crear un objeto de Coche
  let miCoche = new Coche("Honda", "Renault");
  miCoche.arrancar(); 
  miCoche.mostrarInfo(); 
  