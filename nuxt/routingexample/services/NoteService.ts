export default class NoteService {
   private base_uri = "http://localhost:3000/api/notes";

   public async GetNote() {
        const uri = this.base_uri;
        const rawResponse = await fetch(uri, {
            method: 'GET',
        })
        const response = await rawResponse.json();
        return response;
   }
}