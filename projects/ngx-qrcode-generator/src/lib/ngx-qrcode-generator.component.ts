import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
// @ts-ignore
import QRious from 'qrious';

@Component({
    selector: 'ngx-qrcode-generator',
    template: ``,
    standalone: true
})
export class NgxQrcodeGeneratorComponent implements OnChanges {
    @Input() background: string = 'white';
    @Input() backgroundAlpha: number = 1.0;
    @Input() foreground: string = 'black';
    @Input() foregroundAlpha: number = 1.0;
    @Input() level: string = 'L';
    @Input() mime: string = 'image/png';
    @Input() padding: number | null = null;
    @Input() size: number = 100;
    @Input() value: string = '';
    @Input() canvas: boolean = false;

    constructor(private elementRef: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('background' in changes ||
            'backgroundAlpha' in changes ||
            'foreground' in changes ||
            'foregroundAlpha' in changes ||
            'level' in changes ||
            'mime' in changes ||
            'padding' in changes ||
            'size' in changes ||
            'value' in changes ||
            'canvas' in changes) {
            this.generate();
        }
    }

    generate() {
        try {
            let el: HTMLElement = this.elementRef.nativeElement;
            el.innerHTML = '';
            let qr = new QRious({
                background: this.background,
                backgroundAlpha: this.backgroundAlpha,
                foreground: this.foreground,
                foregroundAlpha: this.foregroundAlpha,
                level: this.level,
                mime: this.mime,
                padding: this.padding,
                size: this.size,
                value: this.value
            });

            if (this.canvas) {
                el.appendChild(qr.canvas);
            } else {
                el.appendChild(qr.image);
            }
        } catch (e: any) {
            console.error(`Could not generate QR Code: ${e.message}`);
        }
    }
}
