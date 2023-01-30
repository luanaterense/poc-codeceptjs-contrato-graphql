exports.config = {
  tests: './javascript/tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://snowtooth.moonhighway.com/graphql',
      onRequest: (request) => {
      }
    },
    GraphQL: {
      endpoint: 'https://snowtooth.moonhighway.com/graphql',
      onRequest: (request) => {
      }

    },
    JSONResponse: {},
    FileSystem: {},
  },
  include: {
    I: './steps_file.js',
    setLiftStatus_query: './javascript/queries/setLiftStatus_query.js',
    setLiftStatus_schema: './javascript/schemas/setLiftStatus_schema.js',
  },
  name: 'poc-graphql-codeceptjs'
}