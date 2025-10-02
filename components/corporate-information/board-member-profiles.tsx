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
    name: "Oliver Rubber Industries LLP",
    Position: "Designated Partner",
  },
  {
    id: "2",
    name: "Jodhpur Tire Limited",
    Position: "Director",
  },
]

const itemsList2 = [
  {
    id: "1",
    name: "Somy Firstnbest Exim LLP",
    Position: "Designated Partner",
  },
]

const itemsList3 = [
  {
    id: "1",
    name: "Jodhpur Tire Limited",
    Position: "Director",
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
    name: "Harsh Realestate Developers Private Limited",
    Position: "Director",
  },
]

export function BriefProfileList1() {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold"> S. No. </TableHead>
            <TableHead className="font-semibold">Name of the Companies/ bodies corporate</TableHead> 
            <TableHead className="font-semibold">Nature of  interest or concern (including full time position)</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList1.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export function BriefProfileList2() {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold"> S. No. </TableHead>
            <TableHead className="font-semibold">Name of the Companies/ bodies corporate</TableHead> 
            <TableHead className="font-semibold">Nature of  interest or concern (including full time position)</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList2.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export function BriefProfileList3() {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold"> S. No. </TableHead>
            <TableHead className="font-semibold">Name of the Companies/ bodies corporate</TableHead> 
            <TableHead className="font-semibold">Nature of  interest or concern (including full time position)</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList3.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export function BriefProfileList4() {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold"> S. No. </TableHead>
            <TableHead className="font-semibold">Name of the Companies/ bodies corporate</TableHead> 
            <TableHead className="font-semibold">Nature of  interest or concern (including full time position)</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsList4.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.Position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}


