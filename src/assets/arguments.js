export default {
  start: {
    text: `
      Wouldn't it be awesome if you had more influence at work?
      What if you, and your coworkers, had more influence on the decisions
      that are now made by your boss alone?
    `,
    replies: [
      {
        text: `
          I don't think that would work. Making decisions is difficult.
          My coworkers and I are good at what we do, and bosses are good at...
          well, managing, seeing the big picture, and making big decisions.
        `,
        counter: 'tooPowerfulBosses'
      },
      {
        text: `
          I guess that would be better, but what can I do? I work for a big
          company, I cannot just completely change how my company does things.
        `,
        counter: 'unionize'
      }
    ]
  },

  tooPowerfulBosses: {
    text: `
      Of course, everyone should focus on what they're good at. And it is possible
      that you or your coworkers lack the time or information to make certain
      decisions. But... does that mean that your boss should have complete control
      over <i>all</i> decisions? Including decisions that are in your field of expertise?
      And what about decisions like salaries? Should your boss have complete control
      over how much money everyone makes? Including how much they pay themselves?
    `,
    replies: []
  },

  unionize: {
    text: `
      It is hard to do change things as an individual. But it is easier to change
      things as a group. Ask your coworkers if they too would like to have more
      influence on your company's decisions. See if any unions are active in your
      industry, or even within your company.
    `,
    replies: []
  }
}
