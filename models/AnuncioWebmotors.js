const defineAnuncioWebmotorsModel = (sequelize, DataTypes) => {
    const AnuncioWebmotors = sequelize.define('AnuncioWebmotors', {
        marca: DataTypes.STRING,
        modelo: DataTypes.STRING,
        versao: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        quilometragem: DataTypes.INTEGER,
        observaçao: DataTypes.STRING,
    },{ timestamps: false });
    return AnuncioWebmotors;
};

module.exports = defineAnuncioWebmotorsModel;