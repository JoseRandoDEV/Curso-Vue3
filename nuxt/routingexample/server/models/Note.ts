import { Schema, model } from 'mongoose';

const NoteSchema = new Schema({
    title: String,
    content: String,   
})

export default model('Note', NoteSchema)

