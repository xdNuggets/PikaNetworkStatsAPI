# PikaNetworkStatsAPI
This API uses PikaNetworks public API (accessible via https://stats.pika-network.net/api/profile/{username}/) to bring you a simple npm package to use these for your project.

# Documentation
Here's a simple list of each function I have created so far. It should be pretty self explanatory what they return from their names, but I'll give a short summary anyway.

> All functions return JSON

___



> ```getRanks(username)```
> Returns the players owned ranks in a list. The data includes the displayName, LuckPerms name (i.e, Titan is called `games3`), and the server it is owned on (i.e MiniGames is called `games`

Example: `console.log(getRanks('not_Nuggets'));`<br>
Output: 
```
    [
        {
          name: 'games3',
          displayName: 'Titan',
          server: 'games',
          season: null
        },
        {
          name: 'practice3',
          displayName: 'Diamond',
          server: 'global',
          season: null
        }
      ]
 ```
 
 
___

> ```getFriends(username)```
> Returns the players friends in a list. The data includes the username of the friend, their lastSeen (in a long), and their online status (boolean).

Example: `console.log(getFriends('not_Nuggets'));`<br>
Output: 
``` 
[
    { username: 'Titan_Leo', lastSeen: 1672495475354, online: false },
    { username: 'bene_e', lastSeen: 1678556917694, online: false },
    { username: 'Fournes_', lastSeen: 1674241486877, online: false },
    { username: 'Difficulted', lastSeen: 1679496093449, online: false },
    { username: 'Sanified', lastSeen: 1679691498358, online: true },
    { username: 'xDerpcat', lastSeen: 1679657065659, online: false },
    { username: 'Il1ann', lastSeen: 1676655494619, online: false },
    { username: 'CreamCheese', lastSeen: 1679602722638, online: false },
    { username: 'Jitterinq', lastSeen: 1679509235577, online: false },
    { username: 'zornk', lastSeen: 1675959709939, online: false }
]
```


___
> ```getFriendStatus(username)```
> Returns the players friend status. This will be either Online, Away, DND or Invisible.

Example: `console.log(getFriendStatus('not_Nuggets'));`<br>
Output: ```'ONLINE'```

___

> ```getClan(username)```
> Returns the data of the clan the player is currently in. This includes the name, tag, current trophies (not used on Pika), creation time in YYYY-MM-DD HH:MM:SS format, the members, owner (this includes the username, last seen, and if they're online status (boolean)), and the level of the clan (this includes the current level, EXP, and total EXP)

Example: `console.log(getClan('not_Nuggets'));`<br>
Output:
``` 
    {
        name: 'DEMONIC',
        tag: 'DEMONIC',
        currentTrophies: 0,
        creationTime: '2023-01-18T16:10:39',
        members: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object]
        ],
        owner: { username: 'Skq1er', lastSeen: 1679691834717, online: true },
        leveling: { level: 27, exp: 3458, totalExp: 205145 }
    }
```
  
___
 
> ```isDiscordVerified(username)```
> Pretty self explanatory. Returns a boolean based on whether the user has their discord verified by the discord bot or not.<br>

Example: `console.log(isDiscordVerified('not_Nuggets'));`<br>
Output: `true`
 
___
 
 # TODO
 - [] Implement Leaderboard Support
 - [] Rename project and implement JartexNetwork support.
 
 # Contribution
 If you want to contribute to this project, simply open a pull request with your code, and I'll decide if I want to add it
 
 # Support Me
 Lastly, if you want to support me for making this awful package, you can buy me a Kofi!
 https://ko-fi.com/nuggetsisswag
 
