import Note from '../../models/Note';

export default defineEventHandler(async (event) => {
    const notes = await Note.find()
    return {notes};
})
