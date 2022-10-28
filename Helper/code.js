class Helper{

  static isEven(n){
    return n % 2 === 0 ? true: false;
  }

  static isPositive(n){
    return n > 0 ? true : false;
  }

  static isNegative(n){
    return n < 0 ? true : false;
  }
}

Helper.isEven(2)
Helper.isEven(3)
Helper.isPositive(2)
Helper.isPositive(-10)
Helper.isNegative(-10)
Helper.isNegative(10)

module.exports = Helper