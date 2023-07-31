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
        const customer = await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`,  [name, phone, cpf, birthday]);
        if(customer.rows.length > 0){
            return res.status(409).send("Erro ao Cadastrar. O cliente já existe");
        }
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function editCustomers(req, res) {
    const {id} = req.params;
    const {name, phone, cpf, birthday} = req.body;

    try{
        const customers = await (await db.query(`SELECT * FROM customers`)).rows;
        const verificarCpf = customers.find((c) => c.cpf == cpf);
        if(verificarCpf){
            if(verificarCpf.id != id){
                return res.status(409).send("Cpf já cadastrado em outro cliente");
            }
        }

        await db.query(`UPDATE customers SET name='${name}', phone='${phone}', cpf='${cpf}', birthday='${birthday}' WHERE id=$1;`, [id]);
        res.sendStatus(200);
    }catch (err) {
        res.status(500).send(err.message);
    }
}
