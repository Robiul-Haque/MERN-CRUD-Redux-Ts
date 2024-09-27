import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email" {...register("Email", { required: true })} />
            <input type="password" placeholder="Password" {...register("Password", { max: 22, min: 5, pattern: /@&.-_1Aa /i })} />

            <input type="submit" />
        </form>
    );
}

export default Login;