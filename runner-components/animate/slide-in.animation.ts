import { trigger, state, animate, transition, style } from '@angular/animations';

export function routerTransition():any {
    return slideToLeft();
    // return fadeInAnimation();
}


function fadeInAnimation() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'}) ),
        transition(':enter', [
            style({opacity: 0}),
            animate('1.5s', style({opacity: 1}))
        ]),
    ]);
}

function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
}
function slideToRight() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateX(-100%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateX(100%)'}))
        ])
    ]);
}

function slideToBottom() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
        state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateY(100%)'}))
        ])
    ]);
}

function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
        state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateY(100%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.9s ease-in-out', style({transform: 'translateY(-100%)'}))
        ])
    ]);
}