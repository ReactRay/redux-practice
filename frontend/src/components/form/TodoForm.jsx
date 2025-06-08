
import './todoForm.css';
import { useState } from 'react';
function TodoForm() {

    const [form, setForm] = useState({
        title: '',
        task: ''
    })

    function handleChange(e) {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    console.log(form)
    return (
        <div className="todo-form">
            <form className="main-form">
                <div className="form-group">
                    <label htmlFor="title">title:</label>
                    <input type="text" name='title' placeholder="title" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="task">task:</label>
                    <input type="text" name='task' placeholder="task" onChange={handleChange} />
                </div>
                <div className='form-group '>
                    <button type="submit" className='btn'>submit</button>
                </div>

            </form>
            <h1 style={{ color: '#333' }}>{form.title}</h1>
            <h1 style={{ color: '#333' }}>{form.task}</h1>

        </div>
    )
}

export default TodoForm
