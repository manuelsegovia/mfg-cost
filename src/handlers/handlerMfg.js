const Boom = require('@hapi/boom');
const {
  getAllDocuments,
  getDocument,
  saveDocument,
} = require('../database/crudFunctions');
const { calcWeight } = require('../helpers/calcWeight');

const DB_COL = 'partsMaster';

const getAllMfgParts = async (request, h) => {
  const parts = await getAllDocuments(request, DB_COL);
  return h.response(parts).code(200);
};
const getPart = async (request, h) => {
  const partNumber = { ...request.params };

  const part = await getDocument(request, DB_COL, partNumber);
  if (!part) {
    throw Boom.badRequest('part not existent');
  }
  return h.response(part).code(200);
};
const addPart = async (request, h) => {
  const part = { ...request.payload };
  if (part.origen === 'fabricada') {
    const findRaw = getDocument(request, DB_COL, {
      partNumber: part.rawMatNumber,
    });
    if (!findRaw) {
      return 'raw material no existe';
    }
  }
  if (part.category === 'Plate') {
    part.weightKg =
      request.payload.weightKg ||
      calcWeight(
        part.dimensions.thckIn,
        part.dimensions.widthIn,
        part.dimensions.lengthIn
      );
  }
  try {
    const newPart = await saveDocument(request, DB_COL, part);
    return h.response(newPart.ops[0]).code(201);
  } catch (error) {
    throw Boom.badRequest('duplicate part number');
  }
};

module.exports = {
  getAllMfgParts,
  getPart,
  addPart,
};
