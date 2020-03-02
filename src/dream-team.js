module.exports = function createDreamTeam(members) {
    let nameTeam = '';
    if (!Array.isArray(members)) return false;
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string')
            for (let j = 0; j < members[i].length; j++) {
                if (members[i][j] != ' ') {
                    nameTeam += members[i][j];
                    break;
                }
            }

    }
    return nameTeam.toUpperCase().split('').sort().join('');
};