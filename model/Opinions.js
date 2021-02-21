import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Opinions = db.define('opinions',{
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
})