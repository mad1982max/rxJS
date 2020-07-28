import 'bootstrap';
import './style.scss';
import {people} from './data';
import {interval} from 'rxjs';
import {filter, map, take, scan} from 'rxjs/operators';

console.log('hello');

let btnInt = document.getElementById('interval');
let result = document.getElementById('result');
let btnrxjs = document.getElementById('rxjs');

btnrxjs.addEventListener('click', rxjsFN);
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

function rxjsFN() {
    btnrxjs.disabled = true;
    interval(1000)
        .pipe(
            take(people.length),
            filter(v => people[v].age>=18),
            map(v => people[v].name),
            scan((acc, v) => acc.concat(v), [])
        )
        .subscribe(data => 
            result.textContent = data.join(', ')
        , () => null, () => btnrxjs.disabled = false)
}