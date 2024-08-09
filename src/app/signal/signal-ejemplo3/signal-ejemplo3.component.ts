import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-ejemplo3',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './signal-ejemplo3.component.html',
  styleUrl: './signal-ejemplo3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo3Component {
 nombre = signal('Mike');

 updateName(nombre: string){
  this.nombre.set(nombre);

 }


  
}
