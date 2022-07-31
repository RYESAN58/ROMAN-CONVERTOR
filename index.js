function convertToRoman(num) {
  let y = []
  let newStr = ""
  function inner(num){
  let digits = num.toString().split('')
  if (digits.length == 0 || num === 0 ){
    console.log(newStr)
    return newStr
    }else if(num > 999){
      newStr += "M".repeat(digits[0])
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if (num > 899){
      newStr += "CM"
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if(num > 499){
      newStr += "D"
      num -= 500
      return newStr += convertToRoman(num)
    }else if(num > 399){
      newStr += "CD"
      digits.shift()
        return newStr += convertToRoman(parseInt(digits.join('')))
    }else if(num > 99){
      newStr += "C".repeat(digits[0])
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if(num > 89){
      newStr += "XC"
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if(num > 49){
      newStr += "L"
      num -= 50
      return newStr += convertToRoman(num)
    }else if(num > 39){
      newStr += "XL"
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if(num > 9){
      newStr += "X".repeat(digits[0])
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if (num > 8){
      newStr += "IX"
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if(num > 4){
      newStr += "V"
      num -= 5
      return newStr += convertToRoman(num)
    }else if (num > 3){
      newStr += "IV"
      digits.shift()
      return newStr += convertToRoman(parseInt(digits.join('')))
    }else if(num > 0){
      newStr += "I".repeat(digits[0])
      digits.shift()
      return newStr += convertToRoman(digits)
    }
    }
    inner(num)
    return newStr
  }
  convertToRoman(55)