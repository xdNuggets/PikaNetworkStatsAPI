
// Gets the general JSON data from the API
async function getStatsData(username) {
    let data = await fetch('https://stats.pika-network.net/api/profile/' + username);
    let response = await data.json();
    console.log(response)
    return response;
    

}


async function getRanks(username) {
    
    let json = await getStatsData(username);

    let ranks = json['ranks'];
    return ranks;
}


// Gets a players rank(s)
exports.getRanks = async function(username) {
    
    let json = await getStatsData(username);

    let ranks = json['ranks'];
    return ranks;
}

// Gets a players friend(s)
exports.getFriends = async function(username) {
    let json = await getStatsData(username);

    let friends = json['friends'];
    return friends;
}


// Gets a players friend status
exports.getFriendStatus = async function(username) {
    let json = await getStatsData(username);

    let friendStatus = json['friendStatus'];
    return friendStatus;
}

// Gets a players last seen (in long format)
exports.getLastSeen = async function(username) {
    let json = await getStatsData(username);

    let lastSeen = json['lastSeen'];
    return lastSeen;
}

// Gets a players clan data (if they are in a clan, if not, will return null)
exports.getClan = async function(username) {
    let json = await getStatsData(username);

    let clan = json['clan'];
    return clan;
}


exports.isDiscordVerified = async function(username) {
    let json = await getStatsData(username);

    let discordVerified = json['discord_verified'];
    return discordVerified;
}


// Leaderboards


 


