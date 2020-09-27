const cfbData = [
  {
    name: 'Peyton Manning',
    stat: 'won NFL Offensive player of the year in 2004 and 2003.',
  },
  {
    name: 'Reggie White',
    stat: 'lead the NFL in sacks in 1987 and 1988.',
  },
  {
    name: 'Al Wilson',
    stat: ' was named first-team All-SEC in 1997 and 1998.',
  },
  {
    name: 'Eric Berry',
    stat: 'was named SEC Defensive Player of the Year in 2008.',
  },
  {
    name: 'Alvin Kamara',
    stat: 'was named NFL Offensive Rookie of the Year in 2017.',
  },
  {
    name: 'Tennessee',
    stat: 'went undefeated and won the BCS National Championship in 1998.',
  },
  {
    name: 'Peyton Manning',
    stat: 'holds the NFL record for most passing touchdowns in a season, with 55.',
  },
  {
    name: 'Peyton Manning',
    stat: 'had 539 career passing touchdowns, third in NFL history.',
  },
  {
    name: 'Reggie White',
    stat: 'was inducted into the NFL Hall of Fame in 2006.',
  },
  {
    name: 'Doug Atkins',
    stat: 'was inducted into the NFL Hall of Fame in 1982.',
  },
  {
    name: 'General Robert Neyland',
    stat: 'won National Championships in 1938, 1940, 1950, and 1951.',
  },
];

const getRandomStat = () => {
  const statLength = cfbData.length;
  const index = Math.floor(Math.random() * statLength);
  return cfbData[index];
};

export default { getRandomStat };
