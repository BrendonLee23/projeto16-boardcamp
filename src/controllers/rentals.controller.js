import { db } from "../database/database.connection.js"

export async function getRentals(req, res) {
    try {
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function postRentals(req, res) {
    const { customerId, gameId, daysRented } = req.body;
    if (daysRented <= 0) return res.status(400).send('daysRented deve ser maior que zero!');
    try {
        const game = await db.query(`SELECT * FROM games WHERE id=$1`, [gameId]);
        const rentDate = new Date();
        const originalPrice = daysRented*game.rows[0].pricePerDay;
        await db.query(`
            INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")
            VALUES ($1,$2,$3,$4, null, $5, null);
        `, [customerId, gameId, rentDate, daysRented, originalPrice]);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
export async function finalizeRentals(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function deleteRentals(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}