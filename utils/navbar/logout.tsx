import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Logout() {
    const handleLogout = () => {}
    const handleClose = () => {}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="text-md font-light"
          style={{ fontFamily: "Anta, sans-serif" }}
        >
          Logout
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-dark-black outline-dark-white">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-dark-white" style={{
            fontFamily: "Anta, sans-serif"
          }}>Logout</DialogTitle>
          <DialogDescription>
            Are you sure you wany to logout ?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confimation" className="text-right text-dark-white">
              Type "confirm" to logout
            </Label>
            <Input id="confimation" value="confirm" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="flex w-full justify-between items-center px-3">
          <Button type="submit" variant={"secondary"} onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant={"destructive"} onClick={handleLogout}>Logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
