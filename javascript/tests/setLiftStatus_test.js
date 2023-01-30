Feature("Feature ABC");

const {I, setLiftStatus_query, setLiftStatus_schema} = inject()

Scenario("Validar cenário", ({I, setLiftStatus_query, setLiftStatus_schema}) => {

    setLiftStatus_query.enviarPost()
    setLiftStatus_schema.validarSchema()
})