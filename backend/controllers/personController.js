import Person from "../models/Person.js";
import mongoose from "mongoose";

export const getPerson = async(req,res)=>{
    try{
         const people = await Person.find();
         res.json(people);
    }
    catch(err)
    {
        res.status(500).json({ error: 'Failed to fetch people' });
    }

}


export const postPerson = async(req,res)=>{


    try{
        const {name , age , gender , mobileno} = req.body;

        const newPerson = new Person({
            name , age , gender , mobileno
        });

        const savedPerson = await newPerson.save();

        res.status(201).json(savedPerson)
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
    
}

export const deletePerson = async(req,res)=>{

    try{
        const personId = req.params.id

        const deletedPerson = await Person.findByIdAndDelete(personId);

        if (!deletedPerson) {
                return res.status(404).json({ error: "Person not found" });
        }

        res.status(200).json({ message: "Person deleted successfully", deletedPerson });
    }
    catch(err)
    {
         res.status(500).json({ error: err.message });
    }
}

export const updatePerson = async(req,res)=>{
    try{
        const Personid = req.params.id

        const {name , age , gender , mobileno} = req.body;

        const updatedPerson = await Person.findByIdAndUpdate(
            Personid , 
            {name , age , gender , mobileno},
            {new : true , runValidators : true}
        )

        if(!updatedPerson)
        {
            return res.status(404).json({error : "Person not found"})
        }

        res.status(200).json({message : "person updated successfully",updatedPerson})
    }
    catch(err)
    {
         res.status(400).json({ error: err.message });
    }
}

