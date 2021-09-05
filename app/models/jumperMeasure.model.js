module.exports = mongoose => {
    const jumperMeasure = mongoose.Schema(
        {
            time: Date,
            measures: Array,
            interval: Number,
        },
        {timestamps: true}
    );

    jumperMeasure.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("jumperMeasure", jumperMeasure);
};
