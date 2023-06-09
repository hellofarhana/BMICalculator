let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'This part needed';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'This part needed';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = ' Your Result is Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Your Result is still Normal : ' + bmi;
        }else{
            result.innerHTML = 'Your Result is Over weight : ' + bmi;
        }
    }else{
        alert('If you want to skip, Atleast enter the Weight and HEight.  ');
        result.innerHTML = '';
    }

  button.addEventListener('click', () => { 
    const name = parseInt(document.getElementById('name').value);
    const datetime=parseInt(document.getElementById('datetime').value);
    const age = parseInt(document.getElementById('age').value);
    const exercise = parseInt(document.getElementById('exercise').value);
    const gender = parseInt(document.getElementById('gender').value); 


   

    if (name == ''|| datetime == '' || exercise == '' || age == '' || gender == '' || height == '' || weight == '' ){
        return
    }alert('There are still blank and need to fill ! ');

    document.getElementById('demo').value = " <strong> This is the Data that You Enter in the Calculator : </strong> " + name+ "   ,   "  + datetime + "   ,   "  + age +"   ,   " + exercise + "  ,   " +gender;

})  


});