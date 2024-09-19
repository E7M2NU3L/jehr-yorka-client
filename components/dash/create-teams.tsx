"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { TeamSchema } from "@/schemas/teams";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { createFile } from "@/api/upload";

export function CreateTeamsDialog() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof TeamSchema>>({
    resolver: zodResolver(TeamSchema),
    defaultValues: {
      name: "",
      description: "",
      logo: "",
      location: "",
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        try {
          const promise = await createFile(file);
          console.log(promise.href);
          if (promise?.href) {
            form.setValue("logo", promise.href);
            setImageURL(promise.href);
          }
        } catch (error) {
          toast({
            title: "File Upload Error",
            description: "There was an error uploading the file.",
            variant: "destructive",
          });
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async (values: z.infer<typeof TeamSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: error.name,
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Unknown Error",
        });
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only">New Team</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a Team</DialogTitle>
          <DialogDescription>
            Create a Team for your projects and tasks management
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="name" className="text-right">
                      Team Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="name"
                        className="col-span-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="description" className="text-right">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="description"
                        className="col-span-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="location" className="text-right">
                      Location
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="location"
                        className="col-span-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Team Logo</FormLabel>
                    <div
                      {...getRootProps()}
                      className="border border-dark-green bg-dark-green/15 border-dashed text-dark-green font-bold px-6 py-7"
                      style={{
                        fontFamily: "Anta, sans-serif",
                      }}
                    >
                      <FormControl>
                        <Input {...getInputProps()} />
                      </FormControl>
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                    {imageURL && (
                      <img
                        src={imageURL}
                        alt="Uploaded Team Logo"
                        className="mt-4 max-h-40"
                      />
                    )}
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="mt-8">
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
