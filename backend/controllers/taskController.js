const Task = require('../models/taskModel')
const mongoose = require('mongoose')

const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1})
    res.status(200).json(tasks)
}

const getTask = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Task not found.'})
    }
    const task = await Task.findById(id)
    if(!task){
        return res.status(404).json({error: 'Task not found.'})
    }
    res.status(200).json(task)
}

const createTask = async (req, res) => {
    const {title, description} = req.body

    try {
        const task = await Task.create({title, description})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Task not found.'})
    }
    const task = await Task.findOneAndDelete({_id: id})
    if(!task){
        return res.status(404).json({error: 'Task not found.'})
    }
    res.status(200).json(task)
}

const updateTask = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Task not found.'})
    }
    const task = await Task.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!task){
        return res.status(404).json({error: 'Task not found.'})
    }
    res.status(200).json(task)
}

module.exports = { getTasks, getTask, createTask, deleteTask, updateTask }