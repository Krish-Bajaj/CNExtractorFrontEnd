import { useState, useEffect } from 'react'
import { getReq } from '../services/api'

import Table from '../components/Table'
import Excel from '../components/Excel'

const Results = () => {
	const [userData, setUserData] = useState()
	useEffect(() => {
		let fetchData = async () => {
			const data = await getReq('contracts/all')
			if (data) {
				setUserData(data.data)
			}
		}
		fetchData()
	}, [])
	console.log(userData)
	return userData ? (
		<div>
			<Table userData={userData} />
			<Excel userData={userData} />
		</div>
	) : (
		<h1>Loading...</h1>
	)
}

export default Results
