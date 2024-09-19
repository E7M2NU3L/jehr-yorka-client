import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Mailer() {
  return (
   <main className="flex h-[92vh] items-center justify-center overflow-y-scroll scroll-smooth scrollbar-hide">
     <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Team Performance Report</CardTitle>
        <CardDescription>Review and send the latest team performance report to selected members.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="recipients">Recipients</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select team members" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john@example.com">John Doe</SelectItem>
                <SelectItem value="jane@example.com">Jane Smith</SelectItem>
                <SelectItem value="bob@example.com">Bob Johnson</SelectItem>
                <SelectItem value="alice@example.com">Alice Williams</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="report-type">Report Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly Report</SelectItem>
                <SelectItem value="monthly">Monthly Report</SelectItem>
                <SelectItem value="quarterly">Quarterly Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Add a message to accompany the report" className="min-h-[100px]" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="link">Preview Report</Button>
        <Button type="submit">Send Report</Button>
      </CardFooter>
    </Card>
   </main>
  )
}