const {Sequelize} = require('sequelize')

const sequelize= new Sequelize(
     'exameniparcial',
     'root',
     '',
    {
        host:  '127.0.0.1',
        port: 3306,
        dialect: 'mysql'
    }
)


sequelize.authenticate()
    .then(()=> console.log("Conexion exitosa a la base de datos"))
    .catch(err=> console.log("Ocurrio un error" + err))

module.exports= sequelize