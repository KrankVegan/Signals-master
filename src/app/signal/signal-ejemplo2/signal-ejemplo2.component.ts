import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-ejemplo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-ejemplo2.component.html',
  styleUrls: ['./signal-ejemplo2.component.scss']
})
export default class SignalEjemplo2Component {
  count = signal(0);
  isRunning = signal(false);

  incrementedCount = computed(() => this.count() + 1);

  startAutoIncrement() {
    if (!this.isRunning()) {
      this.isRunning.set(true);
      this.incrementLoop();
    }
  }

  stopAutoIncrement() {
    this.isRunning.set(false);
  }

  resetCount() {
    this.count.set(0);
  }

  private incrementLoop() {
    if (this.isRunning()) {
      this.count.update(val => val + 1);
      setTimeout(() => this.incrementLoop(), 1000);
    }
  }
}