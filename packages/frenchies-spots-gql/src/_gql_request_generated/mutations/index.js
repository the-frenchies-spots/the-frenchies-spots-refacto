const fs = require('fs');
const path = require('path');

module.exports.createOrUpdateRating = fs.readFileSync(path.join(__dirname, 'createOrUpdateRating.gql'), 'utf8');
module.exports.deleteSpot = fs.readFileSync(path.join(__dirname, 'deleteSpot.gql'), 'utf8');
module.exports.deleteTag = fs.readFileSync(path.join(__dirname, 'deleteTag.gql'), 'utf8');
module.exports.getNewTokens = fs.readFileSync(path.join(__dirname, 'getNewTokens.gql'), 'utf8');
module.exports.insertSpot = fs.readFileSync(path.join(__dirname, 'insertSpot.gql'), 'utf8');
module.exports.insertTag = fs.readFileSync(path.join(__dirname, 'insertTag.gql'), 'utf8');
module.exports.logout = fs.readFileSync(path.join(__dirname, 'logout.gql'), 'utf8');
module.exports.signIn = fs.readFileSync(path.join(__dirname, 'signIn.gql'), 'utf8');
module.exports.signUp = fs.readFileSync(path.join(__dirname, 'signUp.gql'), 'utf8');
module.exports.toggleFavorite = fs.readFileSync(path.join(__dirname, 'toggleFavorite.gql'), 'utf8');
module.exports.updateSpot = fs.readFileSync(path.join(__dirname, 'updateSpot.gql'), 'utf8');
module.exports.updateTag = fs.readFileSync(path.join(__dirname, 'updateTag.gql'), 'utf8');
