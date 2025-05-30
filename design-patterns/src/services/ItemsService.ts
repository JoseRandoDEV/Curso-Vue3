export default class {
    public uri = "https://google.com";

    async getItems() {
        const rawResponse = await fetch(`${this.uri}/my-endpoint`)
        const response = await rawResponse.json();
        return response
    }
}