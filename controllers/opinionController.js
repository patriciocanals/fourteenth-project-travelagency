
import {Opinions}  from '../model/Opinions.js';

const saveOpinion = async (req,res) => {
    const {name,email,message} = req.body;

    const errors = [];

    if (name.trim() === '') {
        errors.push( {message: 'Name is required'} );
    }
    if (email.trim() === '') {
        errors.push( {message: 'E-Mail is required'} );
    }
    if (message.trim() === '') {
        errors.push( {message: 'Message is required'} );
    }
    if (errors.length > 0) {
        const opinions = await Opinions.findAll();
        res.render('opinions', {
            page: 'Opinions',
            errors,
            name,
            email,
            message,
            opinions
        })
    } else{
        try {
            await Opinions.create({
                name,email,message
            });
            res.redirect('/opinions')
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    saveOpinion
}