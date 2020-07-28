import 'bootstrap';
import './style.scss';
import {people} from './data'

console.log('hello');

let btnInt = document.getElementById('interval');
let result = document.getElementById('result');

btnInt.addEventListener('click', intFN);

function intFN() {
    btnInt.disabled = true;
    let i = 0;
    const canDrink = [];
    const int = setInterval(() => {
        if(people[i]) {
            if(people[i].age >18) {
                canDrink.push(people[i].name);
                
            }
            result.textContent = canDrink.join(', ');
            i++;
        } else {
            clearInterval(int);
            btnInt.disabled = false;
        }
    },1000)
}