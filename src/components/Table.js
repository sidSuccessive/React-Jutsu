
import TableContent from "./TableContent";


const Table = (props) => {
    return <table>
         <thead>
         <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            </tr>
         </thead>
        <tbody>
            <TableContent />
        </tbody>

        </table>
}

export default Table;