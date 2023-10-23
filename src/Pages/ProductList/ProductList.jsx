// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../Data.js/UserData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";

export default function ProductList() {
    const [data,setData] =useState(productRows);

    function handleDelete(id){
        setData(data.filter(item=>item.id !==id));
    }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlist-product">
            <img
              src={params.row.avatar}
              alt=""
              className="productlist-productImage"
            />
            {params.row.productName}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "text",
      width: 200,
    },
    { field: "status", headerName: "Status", width: 200 },
    { field: "price", headerName: "Price", width: 130 },
    {
        field:'action',
        headerName:'Action',
        width:150,
        // eslint-disable-next-line no-unused-vars
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/product/"+params.row.id}>
                <button className='productListEdit'>Edit</button>
                </Link>
                <DeleteOutline className='productList-Delete' onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        }
      }
  ];

  return (
    <div className="productList" style={{ height: 500, width: "100%" }}>
      <DataGrid
        className="productsList"
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
}
