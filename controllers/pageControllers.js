import { Trip } from '../model/Trip.js';
import { Opinions } from '../model/Opinions.js';

const homePage = async (req,res) => {
    const promiseDB = [];
    promiseDB.push( Trip.findAll( {limit: 3} ) );
    promiseDB.push( Opinions.findAll( {limit: 3} ) );
    try {        
        const result = await Promise.all(promiseDB);
        res.render('home', {
            page: 'Home',
            class: 'home',
            destinations: result[0],
            opinions: result[1]
        })
        
    } catch (error) {
        console.log(error)
    }
}
const aboutusPage =  (req,res) => {
    res.render('aboutus', {
        page:'About Us'
    });
}
const destinationsPage = async (req,res) => {
    
    const destinations = await Trip.findAll();

    res.render('destinations', {
        page:'Destinations',
        destinations
    });
}
const opinionsPage = async (req,res) => {
    try {
        const opinions = await Opinions.findAll();
        res.render('opinions', {
        page:'Opinions',
        opinions
        });
    } catch (error) {
        console.log(error)
    }
    
}

const detailedTripPage = async (req,res) => {
    const { slug } = req.params;

    try {
        const trip = await Trip.findOne( { where: { slug } } );
        res.render('trip', {
            page:'Trip Information',
            trip
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    homePage,
    aboutusPage,
    destinationsPage,
    opinionsPage,
    detailedTripPage
}