const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/peters-park',
  {
    logging: false
  }
)

const Cat = db.define('cat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/images/default-cat.png'
  }
})

module.exports = {
  db, Cat
}
