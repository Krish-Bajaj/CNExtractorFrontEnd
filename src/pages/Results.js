import { useState, useEffect } from 'react'
import { postReq } from '../services/api'

import Table from '../components/Table'
import Excel from '../components/Excel'
import Loader from '../components/Loader/Loader'

const Results = () => {
	const [userData, setUserData] = useState()
	const [error, setError] = useState()
	const [pass, setPass] = useState('')

	useEffect(() => {
		let fetchData = async () => {
			const data = await postReq('contracts/all', { password: pass })
			if (data.data) {
				setUserData(data?.data)
			} else {
				setError(data?.response?.status)
			}
		}
		fetchData()
	}, [pass])
	const handlePassword = () => {
		setPass(document.getElementById('getPassword').value)
	}

	return userData || error ? (
		<div>
			{userData ? (
				<>
					<Table userData={userData} />
					<Excel userData={userData} />
				</>
			) : null}
			{error === 505 ? (
				<>
					<label htmlFor="getPassword">Password</label>
					<input type="text" id="getPassword" defaultValue={pass} />
					<button onClick={handlePassword}>Submit</button>
				</>
			) : null}
		</div>
	) : (
		<Loader />
	)
}

export default Results
