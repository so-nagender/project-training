import{
    trigger,
    transition, style,
    animate, state,
  } 
  from '@angular/animations'

export const  fader = 
                trigger('routeAnimations',[
                    state('open', style({
                        height: '200px',
                        opacity: 1,
                        backgroundColor: 'yellow'
                      })),
                      state('closed', style({
                        height: '100px',
                        opacity: 0.5,
                        backgroundColor: 'green'
                      })),
                      transition('* => closed', [
                        animate('1s')
                      ]),
                      transition('* => open', [
                        animate('0.5s')
                      ]),
            ]);