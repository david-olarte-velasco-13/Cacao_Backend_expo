import {RequestHandler} from 'express';
import registro from './registro';


export const createRegistro: RequestHandler = async(req,res) => {
    const Registro = new registro(req.body)
    const savedRegistro = await Registro.save();
    res.json(savedRegistro);
}

export const getRegistros: RequestHandler = async(req,res) => {
    try {
        const Registros = await registro.find();
        return res.json(Registros);
    } catch (error) {
        res.json(error)
    }

}

export const getRegistro: RequestHandler = async(req,res) => {
    const registroFound = await registro.findById(req.params.id);
    if (!registroFound) return res.status(204).json();
    return res.json(registroFound); 
}

export const deleteRegistro: RequestHandler = async(req,res) => {
    const registroFound = await registro.findByIdAndDelete(req.params.id);
    if (!registroFound) return res.status(204).json();
    return res.json(registroFound); 
}

export const updateRegistro: RequestHandler = async(req,res) => {
    const registroUpdated = await registro.findByIdAndUpdate(req.params.id, req.body, {new : true});
    if (!registroUpdated) return res.status(204).json();
    res.json(registroUpdated);
    
}



