import {Schema, model} from 'mongoose';

const registroSchema = new Schema ({
    Nombre: {
        type: String,
        required: true,
        trim: true
    },
    Documento: {
        type: String,
        required: true,
        trim: true
    },
    nFinca: {
        type: String,
        required: true,
        trim: true
    },
    Ubicacion: {
        type: String,
        trim: true
    },
    tCultivo: {
        type: String,
        trim: true
    },
    clonCacao: {
        type: String,
        required: true,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('Registro', registroSchema);