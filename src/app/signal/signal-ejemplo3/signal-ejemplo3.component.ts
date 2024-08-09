import { ChangeDetectionStrategy, Component } from '@angular/core';
import { _MatInternalFormField } from '@angular/material/core';

@Component({
  selector: 'app-signal-ejemplo3',
  standalone: true,
  imports: [_MatInternalFormField, MatInputModule],
  templateUrl: './signal-ejemplo3.component.html',
  styleUrl: './signal-ejemplo3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo3Component {
  nombre = signal('Yuko Mishima');

  updateName(nombre: string){
    this.nombre.set(nombre);
  }
}
