import { db } from "../database/database.connection.js";

export async function getCustomers(req, res) {
    try {
        const customers = await db.query(`SELECT * FROM customers;`)
        res.send(customers.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCustomersById(req, res) {
    const {id} = req.params
    try {
        const customers = await db.query(`SELECT * FROM customers WHERE id=${id};`)
        res.send(customers.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


export async function postCustomers(req, res) {
    const {name, phone, cpf, birthday} = req.body;

    try {
        const customers = await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`,  [name, phone, cpf, birthday]);
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function editCustomers(req, res) {
    const {name, phone, cpf, birthday} = req.body;

    try {
        const customers = await db.query(`UPDATE customers SET ${name, phone, cpf, birthday}) WHERE name = ${name}`);
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}