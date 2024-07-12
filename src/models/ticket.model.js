import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    code: {
        type: String,
        require: true,
        unique: true
    },
    purchase_dateTime: {
        type: String,
        default: Date.now
    },
    amount: {
        type: Number,
        require: true
    },
    purchaser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },



})


const TicketModel = mongoose.model("tickets", ticketSchema)

export default TicketModel