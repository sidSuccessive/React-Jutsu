


import "./Table.module.css";

const TableContent = (props) => {
    const UserData = JSON.parse(localStorage.getItem("UserData"));
    return (
        <tr>
        <td>{UserData['name']['name']}</td>
        <td>{UserData['email']['email']}</td>
        <td>{UserData['mobile']['mobile']}</td>
        <td>{UserData['address']['address']}</td>
        </tr>
    );
}

export default TableContent;