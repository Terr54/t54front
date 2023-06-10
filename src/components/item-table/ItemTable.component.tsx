import React from 'react'
import classes from './ItemTable.module.css'

interface tableProps {
  heading?: string;
  data?: any;
  tableHeading?: any;
}

const ItemTable = ({ tableHeading = [], data, heading }: tableProps) => {
  return (
    <div className={classes.container}>
        <h4>{heading}</h4>
        <div>
        <table className={classes.table}>
            <thead>
                <tr>{tableHeading.map((item: any) => <th key={`${item}`}>{item}</th>)}</tr>
            </thead>
            <tbody className={classes.tableBody}>
                {data.map((item: any, idx: any) => (
                <tr key={idx}>
                    <td>{item.quantity}</td>
                    <td>{item.description}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.total}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ItemTable
