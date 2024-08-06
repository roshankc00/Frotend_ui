"use client";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Dialog, DialogHeader } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateChatValidation } from "@/lib/validation/create.chat.validation";
import { useHandleCreateChat } from "@/hooks/react-query/chats/create-chats";

const CreateChat = () => {
  const { createChat, isPending } = useHandleCreateChat();
  const [openCat, setOpenCat] = useState(false);
  const form = useForm<z.infer<typeof CreateChatValidation>>({
    resolver: zodResolver(CreateChatValidation),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CreateChatValidation>) => {
    createChat(values);
    setOpenCat(false);
  };

  return (
    <div className="w-full mb-10 ">
      <Dialog open={openCat} onOpenChange={setOpenCat}>
        <DialogTrigger className="w-full">
          <Button className="w-[300px]"> Add Chat</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-2">Create Chat</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter the email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Chat Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <Button disabled={isPending} type="submit" className="w-full">
                    Create Chat
                  </Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateChat;
