import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const items = [
  {
    id: "1",
    name: "Mr.O P Bhansali",
    Position: "Chairman and Managing Director",
  },
  {
    id: "2",
    name: "Mr.Vimal Bhansali",
    Position: "Whole Time Director",
  },
  {
    id: "3",
    name: "Mr. Gaurav Bhansali",
    Position: "Whole Time Director",
  },
  {
    id: "4",
    name: "Mr.Mahendra Rakhecha",
    Position: "Non-Executive Independent Director",
  },
  {
    id: "5",
    name: "Mr. Yogesh Maheshwari",
    Position: "Non-Executive Independent Director",
  },
  {
    id: "6",
    name: "Mr. Santosh Kumar Joshi",
    Position: "Non-Executive Independent Director",
  },
  {
    id: "7",
    name: "Mrs. Rekha Bhandari",
    Position: "Non-Executive Independent Woman Director",
  },
  {
    id: "8",
    name: "Mrs. Payal Daga",
    Position: "Non Executive & Non Indepnedent Director",
  },
]

export default function BoardOfDirectorsTableComponent() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Position</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
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
