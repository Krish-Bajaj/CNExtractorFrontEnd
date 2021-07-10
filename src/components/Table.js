import { nanoid } from 'nanoid'

const Table = ({ userData }) => {
	return (
		<table>
			<thead>
				<tr>
					{Object.keys(userData[0]).map(el => (
						<td key={nanoid()}>{el}</td>
					))}
				</tr>
			</thead>
			<tbody>
				{userData.map(el => (
					<tr key={nanoid()}>
						{Object.values(el).map(ele => (
							<td key={nanoid()}>{ele}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table