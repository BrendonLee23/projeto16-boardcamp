import { db } from "../database/database.connection.js"

export async function getRentals(req, res) {
    try {
        db
    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function postRentals(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
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