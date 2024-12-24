import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import "./UserForm.css";

function UserForm() {
    const { register, handleSubmit, reset, formState: { errors} } = useForm()
    const [users, setUsers] = useState([])

    const onSubmit = (data) => {
        setUsers([...users, data])
        reset();
    };

    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index))
    };

    const clearTable = () => {
        setUsers([])
    }

    return (
        <div className="user-form-container">
            <h1>Форма</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-field">
                    <label>Name</label>
                    <input
                        type="text"
                        {...register("name", {required: "Name is required"})}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="form-field">
                    <label>Username</label>
                    <input
                        type="text"
                        {...register("username", {required: "Username is required"})}
                    />
                    {errors.username && <p className="error">{errors.username.message}</p>}
                </div>

                <div className="form-field">
                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email", {required: "Email is required"})}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-field">
                    <label>Phone</label>
                    <input
                        type="tel"
                        {...register("phone", {required: "Phone is required"})}
                    />
                    {errors.phone && <p className="error">{errors.phone.message}</p>}
                </div>

                <div className="form-field">
                    <label>Website</label>
                    <input type="text" {...register("website")} />
                </div>

                <div className="form-buttons">
                    <button type="submit">Создать</button>
                    <button type="button" onClick={clearTable}>
                        Очистить таблицу
                    </button>
                </div>
            </form>

            <div className="user-table">
                {users.length === 0 ? (
                    <p>Таблица пуста</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website || "N/A"}</td>
                                <td>
                                    <button onClick={() => deleteUser(index)}>Удалить</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default UserForm;