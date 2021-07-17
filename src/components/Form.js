import { useState } from 'react'

const Form = () => {
    const data = {
		email: 'krish@gmail.com',
		name: 'Krish',
		age: '',
		address: 'Mumbai',
		phoneNo: '',
	}
	const [values, setValues] = useState({
		email: data.email,
		name: data.name,
		age: data.age,
		address: data.address,
		phoneNo: data.phoneNo,
	})

	const handleChange = (event) => {
		setValues({
			...values, // without this line the previous values don't get appended
			[event.target.name] : event.target.value
		})
	}
	const handleClick = (event) => {
		event.preventDefault() // prevents form from refreshing
		console.log(values)
	}
	return (
		<form onSubmit={handleClick}>
			<label>Email:</label>
			<input
				type="text"
				name="email"
				defaultValue={values.email}
				onChange={handleChange}
				required
			/>
			<label>Name:</label>
			<input
				type="text"
				name="name"
				defaultValue={values.name}
				onChange={handleChange}
			/>
			<label>Age:</label>
			<input
				type="text"
				name="age"
				defaultValue={values.age}
				onChange={handleChange}
			/>
			<label>Address:</label>
			<input
				type="text"
				name="address"
				defaultValue={values.address}
				onChange={handleChange}
			/>
			<label>Phone No:</label>
			<input
				type="text"
				name="phoneNo"
				defaultValue={values.phoneNo}
				onChange={handleChange}
			/>
			<button>Save and continue</button>
		</form>
	)
}

export default Form