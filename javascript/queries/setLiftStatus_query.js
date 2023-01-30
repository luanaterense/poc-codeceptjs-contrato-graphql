const { I } = inject()

module.exports = {
    query: {
        query: { query: 'mutation{setLiftStatus(id:"astra-express", status:CLOSED){id,name,status}}' },
        header: ["'content-type: application/json'"]
    },

    enviarPost() {
        I.sendPostRequest('',
            this.query.query,
            this.query.header
        )
    }
}