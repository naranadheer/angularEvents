import { Component, Input, Directive, Inject, ElementRef, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
   selector: '[model-Trigger]',
})


export class modalTrigger  implements OnInit {

    private el: HTMLElement;
    @Input('model-Trigger') modelId: string;

    constructor( ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
         this.el = ref.nativeElement;
    }

    ngOnInit() {

        this.el.addEventListener('click', e => {
            this.$(`#${this.modelId}`).modal({});
                });
    }
}
