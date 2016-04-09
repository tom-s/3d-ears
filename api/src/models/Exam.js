import mongoose from 'mongoose'

const ExamSchema = new mongoose.Schema({
  position: { type: Boolean, require: true, unique: true, index: true },
  name: { type: String, require: true, unique: true, index: true }
}, {
  timestamps: true
})

export default mongoose.model('Exam', ExamSchema)
