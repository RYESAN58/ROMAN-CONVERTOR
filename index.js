let newStr = ""
function convertToRoman(num) {
  let digits = num.toString().split('')
  if(num > 999){
    newStr += "M".repeat(digits[0])
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if (num > 899){
    newStr += "CM"
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if(num > 499){
    newStr += "D"
    num -= 500
    convertToRoman(num)
  }else if(num > 399){
    newStr += "CD"
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if(num > 99){
    newStr += "C".repeat(digits[0])
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if(num > 89){
    newStr += "XC"
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if(num > 49){
    newStr += "L"
    num -= 50
    convertToRoman(num)
  }else if(num > 39){
    newStr += "XL"
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if(num > 9){
    newStr += "X".repeat(digits[0])
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if (num > 8){
    newStr += "IX"
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if(num > 4){
    newStr += "V"
    num -= 5
    convertToRoman(num)
  }else if (num > 3){
    newStr += "IV"
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else if(num > 0){
    newStr += "I".repeat(digits[0])
    digits.shift()
    convertToRoman(parseInt(digits.join('')))
  }else{
    console.log(newStr)
    return newStr
  }
  }
convertToRoman(1999);