import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';

const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3},
];

export default function PlateDetails(){
    return ( <Table>
        <TableHead>
            <TableRow>
                <TableCell><strong>License</strong></TableCell>
                <TableCell><strong>Owner Name</strong></TableCell>
                <TableCell><strong>Registration Date</strong></TableCell>
                <TableCell><strong>Car Model</strong></TableCell>
                <TableCell><strong>Location</strong></TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {products.map((product) => (
                <TableRow key={product.id}>
                    <TableCell>{product.title}</TableCell>
                    <TableCell style={{ color: product.isFruit? 'magneta' : 'darkgreen'}}>
                        {product.isFruit ? 'Fruit' : 'Vegetable'}
                    </TableCell>    
                </TableRow>
            ))}
        </TableBody>
    </Table>
    );
}


