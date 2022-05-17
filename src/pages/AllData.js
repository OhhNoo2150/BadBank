import { useState } from "react";
import Table from 'react-bootstrap/Table';

export default function AllData({ users }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Deposit</th>
                    <th>Withdraw</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.deposit}</td>
                            <td>{user.withdraw}</td>
                            <td>{user.balance}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}