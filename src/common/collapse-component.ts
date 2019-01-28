import { Component, Input } from '@angular/core';


@Component ({

    selector: 'collapse-well',
    template: `
    <div (click)="toggleClick()" class="well pointable">
    <h4> <ng-content select="[well-title]" > </ng-content> </h4>
    <ng-content *ngIf="visible" select="[well-body]"> </ng-content>
    </div>
    `
})


export class collapseComponent {

    @Input() title: string;
    visible = true;
    toggleClick() {

      this.visible = !this.visible;
    }



}

