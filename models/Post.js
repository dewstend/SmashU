const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'post',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        tag: {
            type: Sequelize.STRING
        },
        users_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        timestamps: false
    }
)