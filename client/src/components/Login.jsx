import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
	.object({
		username: yup.string().min(8).required(),
		password: yup.string().min(8).required()
	})

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => console.log(data);

	return (
		<div className='flex justify-center item-center'>
			<form className='h-[600px] w-[600px] p-8 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
				<label>username</label>
				<input defaultValue='hello' {...register("username")} />
				{errors.username && <span classname='text-red-500'>{errors.username.message}</span>}
				<label>password</label>
					<input {...register("password", { required: "this field is required" })} />
				{errors.password && <span classname='text-red-500'>{errors.password.message}</span>}
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Login;