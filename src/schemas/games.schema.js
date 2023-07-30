import joi from "joi"

export const gamesSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    stackTotal: joi.number().required(),
    pricePerDay: joi.number().required()
})