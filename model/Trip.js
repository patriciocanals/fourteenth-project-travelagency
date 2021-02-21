import Sequelize from 'sequelize';
import db from '../config/db.js';

//trips is the name of the main table in Database
export const Trip = db.define('trips',{
    title: {
        type: Sequelize.STRING
    },
    fare: {
        type: Sequelize.STRING
    },
    departure_date: {
        type: Sequelize.DATE
    },
    return_date: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    availables: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
}) 