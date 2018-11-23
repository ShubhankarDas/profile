import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';

const routerTransition = trigger('routerTransition', [
  transition('projectView => home', [
    query(':enter, :leave', style({ width: '100%', position: 'fixed' }), {
      optional: true
    }),
    query(':enter', style({ opacity: 0 })),
    query(':leave .hero',
    animate('0.3s ease-in-out', style({transform: 'translateY(40px)', opacity:0}))),
    group([
      query(
        ':leave .back-space',
        animate(
          '0.4s ease-in-out',
          style({ transform: 'scale(3)', zIndex: 4, background: '#047bff' })
        )
      )
    ]),
    query(
      ':enter #moon',
      style({ opacity: 1, zIndex: 4, transform: 'scale(10)' })
    ),
    query(':enter .landing-wrapper', style({ opacity: 0 })),
    query(':enter', style({ opacity: 1 })),
    query(':leave', style({ opacity: 0 })),
    group([
      query(':enter #moon', [
        style({ zIndex: 4 }),
        animate('0.4s ease-in-out')
      ])
    ]),
    query(':enter .landing-wrapper', [
      style({ zIndex: -3, opacity: 0, transform: 'translateY(40px)' }),
      animate('0.4s ease-in-out')
    ])
  ]),

  transition('home => projectView', [
    query(':enter, :leave', style({ width: '100%', position: 'absolute' }), {
      optional: true
    }),
    query(
      ':enter .hero',
      style({ transform: 'translateY(40px)', opacity: '0' })
    ),
    query(':enter', style({ opacity: 0 })),
    group([
      query('#moon', [
        style({ zIndex: 3 }),
        animate(
          '0.5s ease-in-out',
          style({ opacity: 1, transform: 'scale(150)', zIndex: 3 })
        )
      ])
    ]),
    query(':leave #moon', style({ opacity: 0 })),
    query(':enter', style({ opacity: 1 })),
    group([
      query(':enter .project-wrapper', style({ boxShadow: 'none' })),
      query(':leave', style({ opacity: 0 })),
      query(':enter .back-space', [
        style({ transform: 'scale(2)', zIndex: 2, background: '#047bff' }),
        animate('0.4s ease-in-out')
      ])
    ]),
    query(
      ':enter .hero',
      [
        animate(
          '0.3s ease-in-out',
          style({ transform: 'translateY(0px)', opacity: '1' })
        )
      ],
      { optional: true }
    )
  ]),

  transition('* => home', [
    query(':enter, :leave', style({ width: '100%', position: 'fixed' }), {
      optional: true
    }),
    query('#moon', style({ transform: 'translate(300px, -300px) scale(0)' })),
    query(
      '.landing-left, .landing-right',
      style({ opacity: 0, transform: 'translateY(30px)' })
    ),
    query('#moon', animate('0.4s ease-in-out')),
    query(
      '.landing-right',
      animate(
        '0.3s ease-in-out',
        style({ opacity: 1, transform: 'translateY(0)' })
      )
    ),
    group([
      query(
        '.landing-left',
        animate(
          '0.3s ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      )
    ])
  ])
]);

export { routerTransition };
