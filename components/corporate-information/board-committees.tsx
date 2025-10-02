import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const itemsList1 = [
  {
    id: "1",
    name: "Mr. Santosh Kumar Joshi",
    Position: "Chairman, Independent Director",
  },
  {
    id: "2",
    name: "Mr. Yogesh Maheshwari",
    Position: "Member, Independent Director",
  },
  {
    id: "3",
    name: "Mr. Gaurav Bhansali",
    Position: "Member, Whole Time Director",
  },
]

const itemsList2 = [
  {
    id: "1",
    name: "Mr. Yogesh Maheshwari",
    Position: "Chairman, Independent Director",
  },
  {
    id: "2",
    name: "Mr. Mahendra Rakhecha",
    Position: "Member, Independent Director",
  },
  {
    id: "3",
    name: "Mr. Santosh Kumar Joshi",
    Position: "Member, Independent Director",
  },
]

const itemsList3 = [
  {
    id: "1",
    name: "Mr. Yogesh Maheshwari",
    Position: "Chairman, Independent Director",
  },
  {
    id: "2",
    name: "Mr. Vimal Bhansali",
    Position: "Member, Whole-Time Director",
  },
  {
    id: "3",
    name: "Mr. Mahendra Rakhecha",
    Position: "Member, Independent Director",
  },
]

const itemsList4 = [
  {
    id: "1",
    name: "Mr. Om Prakash Bhansali",
    Position: "Chairman, Managing Director",
  },
  {
    id: "2",
    name: "Mr. Vimal Bhansali",
    Position: "Member, Whole-Time Director",
  },
  {
    id: "3",
    name: "Mr. Mahendra Rakhecha",
    Position: "Member, Independent Director",
  },
]

export function BoardCommitteeList1() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold">Name of the Member </TableHead>
            <TableHead className="font-semibold">Designation in Committee & Category</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList1.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export function BoardCommitteeList2() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold">Name of the Member </TableHead>
            <TableHead className="font-semibold">Designation in Committee & Category</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList2.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export function BoardCommitteeList3() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold">Name of the Member </TableHead>
            <TableHead className="font-semibold">Designation in Committee & Category</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList3.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export function BoardCommitteeList4() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold">Name of the Member </TableHead>
            <TableHead className="font-semibold">Designation in Committee & Category</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList4.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}
