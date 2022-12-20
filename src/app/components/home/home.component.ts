import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ElectronStoreService } from 'src/app/services/electron-store.service';
import { IpcService } from 'src/app/services/ipc-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pong: boolean = false;
  user: string = '';
  constructor(
    private ipcService: IpcService,
    private store: ElectronStoreService,
    private cdRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    const user = this.store.get('user')
    if(user !== ''){
      this.user = user;
    }
  }

  ping = (): void => {
    this.ipcService.send("message", "ping");
    this.ipcService.on("reply", (event: any, arg: string) => {
      this.pong = arg === "pong";
      this.cdRef.detectChanges();
    });
  }

  saveData(){
    this.store.set('user', 'Juani');
    this.user = this.store.get('user');
  }
  
  deleteData(){
    this.store.delete('user');
    this.user = '';
  }
  
  abrirCs(){
    this.ipcService.send("open-program");
  }

  ngOnDestroy(): void {
    this.ipcService.removeAllListeners("reply");
  }
}
