const schema = {
    // _id: String,
    name: String,
    aadhaar: String,
    image: String,
    hasVoted: Boolean,
    isValid: Boolean,
    constituency: String,
    created: {
        _id: String,
        type: Date,
        default: Date.now
    }
}

export const getSchema = () => {
    return schema;
}

export const voterSchema = (app, mongoose) => {
    const _schema = schema;

    var VoterSchema = new mongoose.Schema(_schema);

    // VoterSchema.createIndex({
    //     _id: 1
    // });
    VoterSchema.set('autoIndex', (app.get('env') === 'development'));

    app.db.model('Voter', VoterSchema);
};