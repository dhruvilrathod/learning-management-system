import { trigger, transition, style, animate } from "@angular/animations";

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 0.25 }))
    ]),
    transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
    ])
]);

export const fadeOutIn = trigger('fadeOutIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
    ])
]);