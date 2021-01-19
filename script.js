document.getElementById('main-unit').addEventListener('keyup', () => {
    
    let i = document.querySelector('.main-unit-options')
    let j = document.querySelector('.second-unit-options')
    let mainUnit = i.options[i.selectedIndex].textContent.toLowerCase();
    let secondUnit = j.options[j.selectedIndex].textContent.toLowerCase();

    let numberTyped = document.getElementById('main-unit').value;
    numberTyped = parseFloat(numberTyped);

    if(mainUnit === 'celsius'){
        if(secondUnit === 'kelvin'){
            document.getElementById('second-unit').value = numberTyped + 273.15;
        }else if(secondUnit === 'fahrenheit'){
            document.getElementById('second-unit').value = (numberTyped * 9/5) + 32;
        }else{
            document.getElementById('second-unit').value = numberTyped;
        }
    }else if(mainUnit === 'kelvin'){
        if(secondUnit === 'celsius'){
            document.getElementById('second-unit').value = numberTyped - 273.15;
        }else if(secondUnit === 'fahrenheit'){
            document.getElementById('second-unit').value = (numberTyped - 273.15) * 9/5 + 32;
        }else{
            document.getElementById('second-unit').value = numberTyped;
        }
    }else if(mainUnit === 'fahrenheit'){
        if(secondUnit === 'celsius'){
            document.getElementById('second-unit').value = (numberTyped - 32) * 5/9;
        }else if(secondUnit === 'kelvin'){
            document.getElementById('second-unit').value = (numberTyped - 32) * 5/9 + 273.15;
        }else{
            document.getElementById('second-unit').value = numberTyped;
        }
    }

    Array.from(document.querySelectorAll('.reset')).forEach(select => {
        select.addEventListener('change', () => {
            document.getElementById('main-unit').value = '';
            document.getElementById('second-unit').value = '';
        })
    })
});