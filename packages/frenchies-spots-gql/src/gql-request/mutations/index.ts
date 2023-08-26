const fs = require('fs');
const path = require('path');

export const mutations = {
    createOrUpdateRating : fs.readFileSync(path.join(__dirname, 'createOrUpdateRating.gql'), 'utf8'),
    deleteSpot: fs.readFileSync(path.join(__dirname, 'deleteSpot.gql'), 'utf8'),
    deleteTag: fs.readFileSync(path.join(__dirname, 'deleteTag.gql'), 'utf8'),
    getNewTokens: fs.readFileSync(path.join(__dirname, 'getNewTokens.gql'), 'utf8'),
    insertSpot: fs.readFileSync(path.join(__dirname, 'insertSpot.gql'), 'utf8'),
    insertTag: fs.readFileSync(path.join(__dirname, 'insertTag.gql'), 'utf8'),
    logout: fs.readFileSync(path.join(__dirname, 'logout.gql'), 'utf8'),
    signIn: fs.readFileSync(path.join(__dirname, 'signIn.gql'), 'utf8'),
    signUp: fs.readFileSync(path.join(__dirname, 'signUp.gql'), 'utf8'),
    toggleFavorite: fs.readFileSync(path.join(__dirname, 'toggleFavorite.gql'), 'utf8'),
    updateSpot: fs.readFileSync(path.join(__dirname, 'updateSpot.gql'), 'utf8'),
    updateTag: fs.readFileSync(path.join(__dirname, 'updateTag.gql'), 'utf8')
}