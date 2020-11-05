import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games = [{ name: '' }];
  // serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test' }];

  // onServerAdded(serverData: { serverName: string, serverContent: string }): void {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }): void {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }

  // addChanges(): void {
  //   this.serverElements[0].name = 'Changed!!';
  // }

  startGame(): void {
    setInterval(() => {
      // console.log(this.games.length);
      this.games.push({
        name: 'Game-' + (this.games.length - 1),
      });
    }, 1000);

  }

}
