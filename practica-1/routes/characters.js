const router = require('express').Router();
const request = require('request');

const CharacterModel = require('./schemas/characters.schema')

router.get('/:page*?', async (req, res) => {
    let page = req.params.page || 1 ;
    let character = await CharacterModel.findOne({page : page}).exec();
    console.log(character)
    if(!character){
        request(`https://rickandmortyapi.com/api/character/?page=${page}`, (error, response, body) => {
            const newPage = new CharacterModel({page : page , data : body});
            newPage.save();
            res.json({data : JSON.parse(body)}) 
        })

    }
    res.json({id : character._id, 
              guardado : character.registrationDate, 
              data : JSON.parse(character.data)  }) 


})  ;

module.exports = router;