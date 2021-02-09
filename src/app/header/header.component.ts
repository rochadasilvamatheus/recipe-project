import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    @Output() featureSelected = new EventEmitter<String>();

    collapsed = true;

    constructor() { }

    ngOnInit() { }

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}