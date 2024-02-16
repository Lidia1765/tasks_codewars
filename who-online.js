function whosOnline(friends) {
    const output = {}
    friends.forEach((n) => {
        if (n.status === 'online' && n.lastActivity <= 10) {
            if (!output.online) output.online = [];
            output.online.push(n.username)
        } else if (n.status === 'offline') {
            if (!output.offline) output.offline = [];
            output.offline.push(n.username)
        } else {
            if (!output.away) output.away = [];
            output.away.push(n.username)
        }
    })
    return output;
}
console.log(whosOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]))