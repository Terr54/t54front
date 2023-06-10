import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import classes from './Table.module.css';
import { useNavigate } from 'react-router-dom';

interface tableProps {
  heading?: any;
  data?: any;
  productImage?: string;
  countryFlag?: string
  path?: string
}

const Table = ({ heading = [], data, path }: tableProps) => {
  const navigate = useNavigate();
  return (
    <div>
        <table className={classes.table}>
          <thead className={classes.tHead}>
            <tr>
              {heading
                .filter((it: any, idx: any) => idx === 0)
                .map((head: any) => (
                  <th className={classes.action} key={head.text}>
                    <div className={classes.actionContent}>
                      <CheckBoxOutlineBlankIcon
                        className={classes.actionIcon}
                      />
                      {head.text}
                    </div>
                  </th>
                ))}
              {heading
                .filter((it: any, idx: any) => idx !== 0)
                .map((head: any) => (
                  <th key={head.text}>{head.text}</th>
                ))}
            </tr>
            <tr>
              <td colSpan={8}>
                <hr style={{ backgroundColor: '#86B817', height: '2px' }} />
              </td>
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {data.map((data: any) => (
              <tr key={data.id} onClick={() => navigate(`/${path}/${data.id}`)}>
                <td className={classes.action}>
                  <div className={classes.actionContent}>
                    <CheckBoxOutlineBlankIcon className={classes.actionIcon} />
                    {data.quoteID}
                  </div>
                </td>
                <td>{data.date}</td>
                <td className={classes.tableData}>
                  <div className={classes.productImage}>
                    <img src={data.productImage} className={classes.image} />
                    <div className={classes.country}>
                      {data.product}
                      <img src={data.countryFlag} className={classes.flagImage} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className={classes.incoterm}>
                    {data.incoterm}
                    <span>Lagos, Nigeria</span>
                  </div>
                </td>
                <td>
                  {
                    data.status === 'Open' && <div className={classes.open}>
                    {data.status}
                  </div>
                  }
                  {
                    data.status === 'Draft' && <div className={`${classes.open} ${classes.draft}`}>
                    {data.status}
                  </div>
                  }
                  {
                    data.status === 'Accepted' && <div className={`${classes.open} ${classes.accepted}`}>
                    {data.status}
                  </div>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Table
