import { interval, fromEvent } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

const startButton = document.getElementById("start-button");
const sstopButton = document.getElementById("stop-button");
const resultArea = document.querySelector<HTMLElement>('.output');

let tenthSecond$ = interval(100);
let startClick$ = fromEvent(startButton, 'click');
let stopClick$ = fromEvent(stopButton,'click');

startClick$.subscribe(
    ()=>{
        tenthSecond$.pipe(
            map(item => (item / 10)),
            takeUntil(stopClick$)
        )
        .subscribe(num => resultArea.innerText = num + 's')
    }
)