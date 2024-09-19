"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TasksSchema } from "@/schemas/tasks";
import * as z from "zod";
import { toast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const CreateTasks = () => {
  const form = useForm<z.infer<typeof TasksSchema>>({
    resolver: zodResolver(TasksSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      assignedTo: "",
    },
  });

  const onSubmit = (values: z.infer<typeof TasksSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: error.name,
          description: error.message,
          variant: "destructive",
        });
        return false;
      } else {
        toast({
          title: "Unknown Error",
          variant: "destructive",
        });
        return false;
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"} className="flex items-center">
          <Plus />
          <span className="ps-2">Add Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[355px] sm:max-w-sm md:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Add a new task to your team's workflow.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <FormDescription>
                    Title has to be a short thing to remember when looking at
                  </FormDescription>
                  <FormControl>
                    <Input
                      {...field}
                      className="outline-none "
                      id="title"
                      placeholder="Enter task title"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="description"
                      className="outline-none "
                      placeholder="Enter task description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="dueDate"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="dueDate">Due Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="outline-none "
                      id="dueDate"
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="assignedTo"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="assignee">Assign To</FormLabel>
                  <FormDescription>
                    Select Preferred Team Member that you want to assign the
                    task
                  </FormDescription>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select assignee" className="text-dark-black placeholder:text-slate-800" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe</SelectItem>
                      <SelectItem value="sarah-miller">Sarah Miller</SelectItem>
                      <SelectItem value="lisa-johnson">Lisa Johnson</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex items-center justify-around flex-row">
              <DialogClose>
                <Button variant={"destructive"}>Cancel</Button>
              </DialogClose>
              <Button type="submit" variant={"default"}>
                Create Task
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTasks;
