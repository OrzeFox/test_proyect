export const suma = (a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    return "Por favor digite 2 numeros";
  } else if (typeof a == "string" || typeof b == "string") {
    return "Uno de los datos no es un numero";
  } else {
    const sum = a + b;
    return sum;
  }
};

export const resta = (a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    return "Por favor digite 2 numeros";
  } else if (typeof a == "string" || typeof b == "string") {
    return "Uno de los datos no es un numero";
  } else {
    const sum = a - b;
    return sum;
  }
};

export const multiplicacion = (a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    return "Por favor digite 2 numeros";
  } else if (typeof a == "string" || typeof b == "string") {
    return "Uno de los datos no es un numero";
  } else {
    const sum = a * b;
    return sum;
  }
};

export const division = (a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    return "Por favor digite 2 numeros";
  } else if (typeof a == "string" || typeof b == "string") {
    return "Uno de los datos no es un numero";
  }else if( a == 0 && b == 0){
    return "ambos numeros no pueden ser igual a 0"
  }
  else if (b == 0) {
    return "no se puede dividir por 0";
  }
   else {
    const sum = a / b;
    return sum;
  }
};

export const modulo = (a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    return "Por favor digite 2 numeros";
  } else if (typeof a == "string" || typeof b == "string") {
    return "Uno de los datos no es un numero";
  } else {
    const sum = a % b;
    return sum;
  }
};
