import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';

export default function PlateDetails({results}){ // *Accepts results as a prop from Results.jsx
    return ( <Table>
        <TableHead>
            <TableRow>
                <TableCell><strong>Owner Name</strong></TableCell>
                <TableCell><strong>Car Make</strong></TableCell>
                <TableCell><strong>Car Model</strong></TableCell>
                <TableCell><strong>Registration Date</strong></TableCell>
                <TableCell><strong>Location</strong></TableCell>
            </TableRow>
        </TableHead>

        <TableBody> {/**/}
            {results.map((entry) => ( // looping through filtered results
                <TableRow key={entry.id}>               {/*Creating a new row for each entry */}
                    <TableCell>{entry.owner}</TableCell> {/*adding owner name to the cell*/}
                    <TableCell>{entry.make}</TableCell>
                    <TableCell>{entry.model}</TableCell>
                    <TableCell>{entry.registrationDate}</TableCell>
                    <TableCell>{entry.location}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    );
}


// props are a way to pass data from parent component to child component in React