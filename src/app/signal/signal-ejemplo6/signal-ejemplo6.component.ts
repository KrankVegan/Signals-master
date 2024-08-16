import { Component, ChangeDetectionStrategy } from '@angular/core';
import { interval, take } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-signal-ejemplo6',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo6.component.html',
  styleUrl: './signal-ejemplo6.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export default class SignalEjemplo6Component {
  counter$ = interval(1000).pipe(take(10)); // Limitar a 10 emisiones
  counter = toSignal(this.counter$)
  counter2$ = interval(1000).pipe(take(10)); // Limitar a 10 emisiones;
  counterConValorInicial = toSignal(this.counter2$, {initialValue: 0})
  counter3$ = interval(1000).pipe(take(10)); // Limitar a 10 emisiones
  counterUpTo5 = toSignal(this.counter3$)
}