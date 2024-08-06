"use client";
import { Button } from "@/components/ui/button";
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
import { AddUserToChatValidation } from "@/lib/validation/addUserTOChat.validation";
import { useHandleAddUserToChat } from "@/hooks/react-query/chats/add-user-to-chat";
type Props = {
  chatId: string;
};

const AddUser: React.FC<Props> = ({ chatId }) => {
  const { addUserToChatHandler, isPending } = useHandleAddUserToChat();
  const [openCat, setOpenCat] = useState(false);
  const form = useForm<z.infer<typeof AddUserToChatValidation>>({
    resolver: zodResolver(AddUserToChatValidation),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof AddUserToChatValidation>) => {
    await addUserToChatHandler({ ...values, chatId });
    setOpenCat(false);
  };

  return (
    <div className="w-full  ">
      <Dialog open={openCat} onOpenChange={setOpenCat}>
        <DialogTrigger className="w-full">
          <Button className=""> Add User</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-2">Add User</DialogTitle>
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
                  <Button type="submit" className="w-full">
                    Add User
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

export default AddUser;
