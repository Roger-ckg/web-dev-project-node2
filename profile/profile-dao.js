const model = require('./profile-model');

const findAllProfile = () => model.find();

const findProfileById = (id) => model.findById(id);

const updateProfile = (newProfile) =>
    model.updateOne({username:newProfile.username},
        {$set: newProfile});

module.exports = {
    findAllProfile, updateProfile, findProfileById
}