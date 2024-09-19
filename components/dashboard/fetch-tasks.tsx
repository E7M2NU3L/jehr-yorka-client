"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from '../ui/use-toast';
import React, { useRef } from 'react'
import { Button } from "@/components/ui/button";
import { SelectTeamSchema } from "@/schemas/teams"
import TableView from "./table-view"
import { KanbanView } from "./kanban-view"
import { Kanban, Table } from "lucide-react"

const FetchTasks = () => {
  const form = useForm<z.infer<typeof SelectTeamSchema>>({
    resolver: zodResolver(SelectTeamSchema),
    defaultValues: {
      teamId: '',
    },
  });

  const [tableMode, setTableMode] = React.useState(true);

  const handleModeTable = () => {
    setTableMode(true);
  };
  const handleModeKanban = () => {
    setTableMode(false);
  }

  function onSubmit(data: z.infer<typeof SelectTeamSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div>
      <main className="flex flex-row justify-between items-end">
        <Form {...form}>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-x-6 flex flex-col md:flex-row items-center"
            >
            <FormField
                control={form.control}
                name="teamId"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Team</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                        <SelectValue
                            placeholder="Select a team to display the assigned tasks"
                            className="text-black" // Ensure placeholder and value text is black
                        />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {[0, 1, 2, 3].map((content: number, index: number) => (
                        <SelectItem value={`Team ${content}`} key={index}>
                            Team {content}
                        </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                    <FormDescription>
                    You can manage teams in your{" "}
                    <Link href="/examples/forms">team settings</Link>.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit">Fetch</Button>
            </form>
        </Form>

        <div className="flex flex-row items-center gap-x-2">
            <Button variant={"custom"} className={tableMode ? "bg-dark-gold/80 text-black hover:bg-dark-gold/70" : "border border-dark-gold text-dark-gold "} onClick={handleModeTable}>
                <Table />
            </Button>

            <Button variant={"custom"} className={!tableMode ? "bg-dark-gold/80 text-black" : "border border-dark-gold text-dark-gold hover:bg-dark-gold/10"} onClick={handleModeKanban}>
                <Kanban className="text-dark-gold" />
            </Button>
        </div>
      </main>
      
      {tableMode ? (
        <>
            <TableView />
        </>
      ) : (
        <>
            <KanbanView />
        </>
      )}
    </div>
  );
}

export default FetchTasks;
