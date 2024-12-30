const Task = require('../models/task');
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.status(201).json({ message: 'Tarea creada exitosamente', task });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al crear la tarea', error: err.message });
  }
};

const getTaskList = async (req, res) => {
  try {
    const { status } = req.query;
    const filter =
      status === 'completed'
        ? { completed: true }
        : status === 'pending'
        ? { completed: false }
        : {};
    const tasks = await Task.find(filter);
    res.json({ message: 'Tareas obtenidas exitosamente', tasks });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al obtener las tareas', error: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json({ message: 'Tarea obtenida exitosamente', task });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al obtener la tarea', error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json({ message: 'Tarea actualizada exitosamente', task });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al actualizar la tarea', error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada exitosamente' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al eliminar la tarea', error: err.message });
  }
};
module.exports = {
  createTask,
  getTaskList,
  getTaskById,
  updateTask,
  deleteTask,
};
