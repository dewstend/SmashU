const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'comment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING
        },
        users_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        posts_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        timestamps: false
    }
)