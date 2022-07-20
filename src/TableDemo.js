import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID',width: 80 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name',  width: 150},
    { field: 'age', headerName: 'Age', type: 'number', width: 80},
    { field: 'fullName', headerName: 'Full name', width: 200,
    valueGetter: (params) =>
    `${params.row.firstName || ''} ${params.row.lastName || ''}` 
},
    { field: 'email', headerName: 'Email', width: 250},
    { field: 'address', headerName: 'Address', width: 250},
];

const rows = [
    { id: 1, firstName: 'kishor', lastName: 'Jadhav', age: 35, email: "abc@gmail.com", address:"Pune" },
    { id: 2, firstName: 'Shweta', lastName: 'Borse', age: 42, email: "abc@gmail.com", address:"Mumbai"  },
    { id: 3, firstName: 'Rohini', lastName: 'More', age: 45, email: "abc@gmail.com", address:"Nagpur"  },
    { id: 4, firstName: 'Sujit', lastName: 'Kanjune', age: 16, email: "abc@gmail.com", address:"Hyderabad"  },
    { id: 5, firstName: 'Rupesh', lastName: 'Bhagat', age: 20, email: "abc@gmail.com", address:"Chennai"  },
    { id: 6, firstName: 'Sunny', lastName: 'Sing', age: 50, email: "abc@gmail.com", address:"Banglore"  },
    { id: 7, firstName: 'khan', lastName: 'Salman', age: 44, email: "abc@gmail.com", address:"Delhi"  },
    { id: 8, firstName: 'ricky', lastName: 'ponting', age: 36, email: "abc@gmail.com", address:"Noida"  },
    { id: 9, firstName: 'Mamatha', lastName: 'Morya', age: 65, email: "abc@gmail.com", address:"Ahmadbad"  },
    { id: 10, firstName: 'Payal', lastName: 'Kumaar', age: 65, email: "abc@gmail.com" , address:"jaipur" },
];


export default function TableDemo() {
    return (
        <div className="TableDemoPage">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[10]}
                //checkboxSelection
                search
            />
        </div>
    );
}
