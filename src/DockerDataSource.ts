import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "segredo",
  database: "migoc2",
  "migrations": [
    "./dist/database/migrations/*.js"
  ],
  entities: [
    "./dist/modules/**/entidades/*.js"
  ]
})

export { AppDataSource }

  // .then(() => {
  //   console.log("Data Source has been initialized!")
  // })
  // .catch((err) => {
  //   console.error("Error during Data Source initialization", err)
  // })

