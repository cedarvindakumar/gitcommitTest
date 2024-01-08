import React, { useEffect, useState } from 'react'
import './todolist.css';

export default function TodoList() {
    const [inputValue, setinputValue] = useState('');
    const [item, setItem] = useState<string[]>([]);

    const setData = () => {
        if (inputValue.trim() !== '') {
            const updatedItems1 = [...item, inputValue];
            setItem(updatedItems1);
            setinputValue('');
            localStorage.setItem('items', JSON.stringify(updatedItems1));
        }
    }
    const deleteItem = (id: any) => {
        const updatedItem = item.filter((elem, index) => {
            return index != id;
        })
        setItem(updatedItem);
        localStorage.setItem('items', JSON.stringify(updatedItem));
    }
    const removeAll = () => {
        setItem([]);
        localStorage.removeItem('items');
    }
    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItem(JSON.parse(storedItems));
        }
        console.log(item, 'tttttttt');
    }, []);
    return (
        <div className='todo-wrapper'>
             <h3>Local storage and todo list</h3>
            <div className='prepare-todolist'>
                <input type='text' name="tasks" value={inputValue} id="todolist" placeholder='Add items' onChange={(e) => (setinputValue(e.target.value))} />
                <button onClick={() => setData()}>Add</button>
            </div>
            <div className='todo-list'>
                {item.map((elem, index) => {
                    return (
                        <div className='item' key={index}>
                            <span>{elem}</span>
                            <button className='delete' onClick={() => { deleteItem(index) }}>Delete</button>
                        </div>
                    )
                })}
            </div>
            <div className='remove--all'>
                <button onClick={() => { removeAll() }}>
                    Remove all
                </button>
            </div>
        </div>
    )
}
