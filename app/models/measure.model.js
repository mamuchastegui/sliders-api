module.exports = mongoose => {

    const gyroscope = new mongoose.Schema({
        x: Number,
        y: Number,
        z: Number,
    });
    const accelerometer = new mongoose.Schema({
        x: Number,
        y: Number,
        z: Number,
    });

    const measure = mongoose.Schema(
        {
            time: Date,
            interval: Number,
            foot: String,
            temperature: String,
            accelerometer: accelerometer,
            gyroscope: [gyroscope],
        },
        {timestamps: true}
    );

    measure.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Measure = mongoose.model("measure", measure);
    return Measure;
};
