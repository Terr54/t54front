import React from 'react'

// const Table = () => {
//   return (
//     <div>
//         <table className={classes.table}>
//               <thead className={classes.tHead}>
//                 <tr>
//                   {suppliersHeading
//                     .filter((it, idx) => idx === 0)
//                     .map((head) => (
//                       <th className={classes.action} key={head.text}>
//                         <div className={classes.actionContent}>
//                           <CheckBoxOutlineBlankIcon
//                             className={classes.actionIcon}
//                           />
//                           {head.text}
//                         </div>
//                       </th>
//                     ))}
//                   {suppliersHeading
//                     .filter((it, idx) => idx !== 0)
//                     .map((head) => (
//                       <th key={head.text}>{head.text}</th>
//                     ))}
//                 </tr>
//                 <tr>
//                   <td colSpan={8}>
//                     <hr style={{ backgroundColor: '#86B817', height: '2px' }} />
//                   </td>
//                 </tr>
//               </thead>
//               <tbody className={classes.tableBody}>
//                 {suppliersState.pending.map((sup) => (
//                   <tr key={sup.id}>
//                     <td className={classes.action}>
//                       <div className={classes.actionContent}>
//                         <CheckBoxOutlineBlankIcon
//                           className={classes.actionIcon}
//                         />
//                         {sup.id.substring(0, 7)}
//                       </div>
//                     </td>
//                     <td>{sup.email}</td>
//                     <td>N/A</td>
//                     <td style={{ display: 'flex', alignItems: 'center' }}>
//                       <span>
//                         <img src={flag} style={{ marginRight: '5px' }} />
//                         Ivory Coast
//                       </span>
//                     </td>
//                     <td>{sup.activity}</td>
//                     <td>
//                       {verified
//                         ? (
//                         <span className={classes.verified}>Verified</span>
//                           )
//                         : (
//                         <span
//                           className={`${classes.verified} ${classes.unverified}`}
//                         >
//                           Unverified
//                         </span>
//                           )}
//                     </td>
//                     <td
//                       style={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         width: '100%'
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           width: '80%'
//                         }}
//                       >
//                         {new Date(sup.createdAt).toDateString()}{' '}
//                         <MoreVertOutlinedIcon
//                           className={`${classes.actionIcon} ${classes.actionIconVertical}`}
//                         />
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//     </div>
//   )
// }

// export default Table
