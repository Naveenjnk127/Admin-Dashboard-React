// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./UserList.css";
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../Data.js/UserData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function UserList(){

    const [data,setData] =useState(userRows);

    function handleDelete(id){
        setData(data.filter(item=>item.id !==id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User Name', width: 200 , renderCell: (params) =>{
          return (
              <div className='userlist-user'>
                  <img src={params.row.avatar} alt="" className='userlist-userImage'/>
                  {params.row.userName}
              </div>
          )
        }},
        {
          field: 'email',
          headerName: 'Email',
          type: 'email',
          width: 200,
        },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'transaction', headerName: 'Transaction', width: 130 },
        {
          field:'action',
          headerName:'Action',
          width:150,
          // eslint-disable-next-line no-unused-vars
          renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/user/"+params.row.id}>
                  <button className='userListEdit'>Edit</button>
                  </Link>
                  <DeleteOutline className='userList-Delete' onClick={()=>handleDelete(params.row.id)}/>
                  </>
              )
          }
        }
      ];






  return (
    <div className='userList' style={{ height: 500, width:"100%" }}>
      <DataGrid className='userList'
        rows={data} disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10 ,20]}
        checkboxSelection
      />
    </div>
  );
}