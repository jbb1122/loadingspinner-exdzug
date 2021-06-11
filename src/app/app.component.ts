
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {

  isLoading = false;

  load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 2000 );
  }

	async wait(ms: number): Promise<void> {
		return new Promise<void>( resolve => setTimeout( resolve, ms) );
	}

	start() {
    this.isLoading = true;
		this.wait(2000).then( () => this.isLoading = false );
	}
}
