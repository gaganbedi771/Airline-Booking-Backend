const { Op } = require("sequelize");
const {City} =require("../models/index");

exports.createCity=async ({name})=>{
    try {   
        return await City.create({name});
    } catch (error) {
        console.log("city repo error");
        throw error        
    }
}

exports.deleteCity=async (cityId)=>{
    try {
        await City.destroy({where:{ id: cityId}});
        return true;
    } catch (error) {
        console.log("city repo error");
        throw error        
    }
}

exports.updateCity=async (cityId,data)=>{
    try {
        return await City.update(data,{where:{id:cityId}});
    } catch (error) {
        console.log("city repo error");
        throw error        
    }
}

exports.getCity=async (cityId)=>{
    try {
        return City.findByPk(cityId);
    } catch (error) {
        console.log("city repo error");
        throw error        
    }
}

exports.getAllCities=async (filter)=>{
    try {
         if(filter.name){
            const cities = await City.findAll({
                where: {
                  name: {
                    [Op.startsWith]: filter.name,
                  },
                },
                limit: 2
              });
              return cities;
         }
        return await City.findAll()
    } catch (error) {
        console.log("city repo error");
        throw error        
    }
}