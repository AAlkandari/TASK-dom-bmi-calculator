function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  height = height/100

    const BMI = (weight/(height*height))

      if(age <19)
    {
  if(BMI<19  )
  alert(`your BMI is ${BMI} & you are underweight`)
  else if(BMI <24)
  alert(`your BMI is ${BMI} & you are healthy`)
  if(BMI>24) alert(`your BMI is ${BMI} & you are overweight`)
    }

     else if(age <=34)
    {
  if(BMI<20 )
  alert(`your BMI is ${BMI} & you are underweight`)
  else if(BMI <25)
  alert(`your BMI is ${BMI} & you are healthy`)
  else alert(`your BMI is ${BMI} & you are overweight`)
   }
  
    else if(age <=44)
  {
  if(BMI<21 )
  alert(`your BMI is ${BMI} & you are underweight`)
  else if(BMI <26)
  alert(`your BMI is ${BMI} & you are healthy`)
  else alert(`your BMI is ${BMI} & you are overweight`)
  }

    else if(age <=54)
  {
  if(BMI<22 )
  alert(`your BMI is ${BMI} & you are underweight`)
  else if(BMI <27)
  alert(`your BMI is ${BMI} & you are healthy`)
  else alert(`your BMI is ${BMI} & you are overweight`)
  }

    else if(age <=64)
  {
  if(BMI<23 )
  alert(`your BMI is ${BMI} & you are underweight`)
  else if(BMI <28)
  alert(`your BMI is ${BMI} & you are healthy`)
  else alert(`your BMI is ${BMI} & you are overweight`)
  }

  else if(age >65)
  {
  if(BMI<24 )
  alert(`your BMI is ${BMI} & you are underweight`)
  else if(BMI <29)
  alert(`your BMI is ${BMI} & you are healthy`)
  else alert(`your BMI is ${BMI} & you are overweight`)
  }
  
  
  }
