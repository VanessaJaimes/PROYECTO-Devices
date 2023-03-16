const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Brand', BrandSchema);

