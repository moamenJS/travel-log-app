const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true,
}

const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    image: String,
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180
    },
    visitedDate: {
        required: true,
        type: Date,
    },
}, {
    // give a "createdAt": "2022-09-06T14:55:16.368Z","updatedAt": "2022-09-06T14:55:16.368Z"
    timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema)

module.exports = LogEntry 