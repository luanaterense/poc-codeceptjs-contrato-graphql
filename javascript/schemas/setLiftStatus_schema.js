const { I } = inject()

module.exports = {
    validarSchema() {
        I.seeResponseMatchesJsonSchema(joi => {
            return joi.object({
                data: joi.object({
                    setLiftStatus: joi.object({
                        id: joi.string().min(3).max(30).required(),
                        name: joi.string(),
                        status: joi.string()
                    })
                })
            })
        })
    }
}