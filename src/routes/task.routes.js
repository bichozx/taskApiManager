const express = require('express');
const { body, param, validationResult } = require('express-validator');

const {
  createTask,
  getTaskList,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller');
const router = express.Router();

const handleErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Crear una tarea
router.post(
  '/',
  body('title').notEmpty().withMessage('El título es obligatorio'),
  handleErrors,
  createTask
);

// Obtener todas las tareas con filtro opcional por estado
router.get('/', getTaskList);

// Obtener una tarea por ID
router.get(
  '/:id',
  param('id').isMongoId().withMessage('ID inválido'),
  handleErrors,
  getTaskById
);

// Actualizar una tarea
router.put(
  '/:id',
  param('id').isMongoId().withMessage('ID inválido'),
  body('title')
    .optional()
    .notEmpty()
    .withMessage('El título no puede estar vacío'),
  body('completed')
    .optional()
    .isBoolean()
    .withMessage('El estado debe ser booleano'),
  handleErrors,
  updateTask
);

// Eliminar una tarea
router.delete(
  '/:id',
  param('id').isMongoId().withMessage('ID inválido'),
  handleErrors,
  deleteTask
);

module.exports = router;
