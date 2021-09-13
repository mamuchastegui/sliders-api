module.exports = mongoose => {
    const jumper = mongoose.Schema(
        {
            time: Date,
            min: Number,
            max: Number,
            measures: Array,
            numberOfMeasurements: Number,
            interval: Number,
        },
        {timestamps: true}
    );

    jumper.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("jumper", jumper);
};
