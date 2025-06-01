import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {

        } catch (err) {
            // setError(err.response?.data?.message || 'Ошибка авторизации');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <Input
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleInputChange}
                                label="Имя пользователя"
                                placeholder="Введите имя"
                            />
                        </div>
                        <div>
                            <Input
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                label="Пароль"
                                placeholder="Введите пароль"
                            />

                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="button button__main"
                        >
                            {loading ? (
                                <>

                                    Вход...
                                </>
                            ) : 'Войти'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;