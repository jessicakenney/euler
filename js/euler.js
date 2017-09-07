export class Euler {

  solveProblem1(){
    const max = 1000;
    let sum = 0;
    for (let n = 1; n < max; n++ ){
      if ((n % 3 === 0) || (n % 5 === 0)){
        sum += n;
      }
    }
    return sum;
  }




};
