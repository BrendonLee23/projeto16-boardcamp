import { db } from "../database/database.connection.js"

export async function getRentals(req, res) {
    try {
        const rentals = await db.query(`
            SELECT rentals.*, customers.name as customer, 
            games.name as game FROM rentals JOIN customers ON 
            rentals."customerId" = customers.id JOIN games ON rentals."gameId"=games.id;
        `);
        rentals.rows.forEach(rental => {
            const rentDate = new Date(rental.rentDate);
            rental.rentDate = `${rentDate.getFullYear()}-${String(rentDate.getMonth() + 1).padStart(2, '0')}-${String(rentDate.getDate()).padStart(2, '0')}`
            rental.customer = { id: rental.customerId, name: rental.customer };
            rental.game = { id: rental.gameId, name: rental.game };
            if (rental.returnDate) {
                const returnDate = new Date(rental.returnDate);
                rental.returnDate = `${returnDate.getFullYear()}-${String(returnDate.getMonth() + 1).padStart(2, '0')}-${String(returnDate.getDate()).padStart(2, '0')}`
            }
        })
        res.send(rentals.rows);
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
        const originalPrice = daysRented * game.rows[0].pricePerDay;
        await db.query(`
            INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")
            VALUES ($1,$2,$3,$4, null, $5, null);
        `, [customerId, gameId, rentDate, daysRented, originalPrice]);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function deleteRentals(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}