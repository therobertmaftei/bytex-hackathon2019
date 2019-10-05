import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  constructor(private dialogRef: MatDialogRef<HelpComponent>) { }

  public close(): void {
    this.dialogRef.close();
  }
}
