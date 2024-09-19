import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { MoveVerticalIcon } from 'lucide-react';
import { Button } from '../ui/button';

const TableView = () => {
  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time Tracked</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="font-medium">Redesign website homepage</div>
              <div className="text-slate-300 text-sm">
                Update the homepage design
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>John Doe</div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline" className="border border-dark-gold text-dark-gold">
                In Progress
              </Badge>
            </TableCell>
            <TableCell>
              <div className="font-medium">12h 45m</div>
            </TableCell>
            <TableCell>
              <div>2023-06-30</div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoveVerticalIcon className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Start Timer</DropdownMenuItem>
                  <DropdownMenuItem>Edit Task</DropdownMenuItem>
                  <DropdownMenuItem>Delete Task</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
  )
}

export default TableView