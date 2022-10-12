import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "segredo",
  database: "migoc2",
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  entities: [
    "./src/modules/**/entidades/*.ts"
  ]
})

export { AppDataSource }

  // .then(() => {
  //   console.log("Data Source has been initialized!")
  // })
  // .catch((err) => {
  //   console.error("Error during Data Source initialization", err)
  // })

