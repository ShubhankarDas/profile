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
    query(':enter, :leave', style({ width: '100%', position: 'absolute' }), {
      optional: true
    }),
    query(
      ':leave .back-space',
      animate('0.5s ease-in-out', style({ transform: 'scale(3)', zIndex: 4 }))
    )
  ]),

  transition('home => projectView', [
    query(':enter, :leave', style({ width: '100%', position: 'absolute' }), {
      optional: true
    }),
    query(
      ':enter .hero',
      style({ transform: 'translateY(200px)', opacity: '0' })
    ),
    query(':enter', style({ opacity: 0 })),
    group([
      query(
        '#moon',
        animate(
          '1s ease-in-out',
          style({ opacity: 1, transform: 'scale(200)' })
        )
      ),
      query(
        ':leave .work-text',
        [
          style({ transform: 'translateX(0px)', opacity: '1' }),
          animate(
            '0.5s ease-in-out',
            style({
              transform: 'translateX(60px)',
              opacity: '0'
            })
          )
        ],
        { optional: true }
      ),
      query(
        ':leave .work-image',
        [
          style({ transform: 'translateX(0px)', opacity: '1' }),
          animate(
            '0.5s ease-in-out',
            style({
              transform: 'translateX(-60px)',
              opacity: '0'
            })
          )
        ],
        { optional: true }
      )
    ]),
    query(':leave #moon', style({ opacity: 0 })),
    query(':enter', style({ opacity: 1 })),
    group([
      query('.back-space', [
        style({ transform: 'scale(2)', zIndex: 2, background: '#047bff' }),
        animate('0.8s ease-in-out')
      ]),
      query(
        ':enter .hero',
        [
          animate(
            '0.8s ease-in-out',
            style({ transform: 'translateY(0px)', opacity: '1' })
          )
        ],
        { optional: true }
      )
    ])
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
    // group([
    //   query(':enter ', [
    //     style({ opacity: 0, transform: 'scale(0.9) translateY(-50px)' }),
    //     animate(
    //       '0.8s ease-in-out',
    //       style({ opacity: 1, transform: 'scale(1) translateY(0)' })
    //     )
    //   ])
    // ]),
    query('#moon', animate('0.8s ease-in-out')),
    query(
      '.landing-right',
      animate(
        '0.8s ease-in-out',
        style({ opacity: 1, transform: 'translateY(0)' })
      )
    ),
    group([
      query(
        '.landing-left',
        animate(
          '0.5s ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      )
    ])
  ])
]);

export { routerTransition };
