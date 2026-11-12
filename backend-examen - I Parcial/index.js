const express = require('express')
const { where } = require('sequelize')
const Gasto = require('./Modelos/Gasto')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/gasto', async (req, res) => {
    try {
        const gastos = await Gasto.findAll();
        res.status(200).json(gastos);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al consultar' });
    }
})


app.post('/gasto', async (req, res) => {
    try {
        const { categoria, monto, fecha } = req.body;
        const nuevoGasto = await Gasto.create({
            categoria,
            monto,
            fecha
        });
        res.status(201).json(nuevoGasto);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al guardar' });
    }
})


app.delete('/gasto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const eliminado = await Gasto.destroy({
            where: { idgasto: id }
        });

        if (eliminado) {
            res.status(200).json({ mensaje: 'Gasto eliminado con éxito' });
        } else {
            res.status(404).json({ error: 'Gasto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al eliminar' });
    }
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});