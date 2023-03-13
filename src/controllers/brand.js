const Brand = require('../models/brand');

exports.allBrand = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todas las marcas' })
    }
}