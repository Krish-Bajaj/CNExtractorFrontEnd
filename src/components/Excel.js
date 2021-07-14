import ReactExport from 'react-export-excel'

const Excel = ({ userData }) => {
	const ExcelFile = ReactExport.ExcelFile
	const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
	const ExcelColumn = ReactExport.ExcelFile.ExcelColumn
	return (
		<ExcelFile element={<button>Download Excel file</button>} filename="Trades">
			<ExcelSheet data={userData} name="Trades">
				<ExcelColumn label="Settlement Date" value="Settlement Date" />
				<ExcelColumn label="Stock" value="Stock" />
				<ExcelColumn label="Quantity (Bought)" value="Quantity (Bought)" />
				<ExcelColumn label="Quantity (Sold)" value="Quantity (Sold)" />
				<ExcelColumn label="Amount" value="Amount" />
				<ExcelColumn label="Price per share" value="Price per share" />
			</ExcelSheet>
		</ExcelFile>
	)
}

export default Excel