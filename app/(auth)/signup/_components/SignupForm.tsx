"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { redirect, useRouter } from "next/navigation";
import { signupApi } from "@/common/api/user/user.api";
import { useHandleSignupUser } from "@/hooks/react-query/users/signup.hook";
import { SignUpValidationSchema } from "@/lib/validation/signup.validation";

function SignupForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof SignUpValidationSchema>>({
    resolver: zodResolver(SignUpValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSignup, isPending } = useHandleSignupUser();
  const onSubmit = (values: z.infer<typeof SignUpValidationSchema>) => {
    handleSignup(values);
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Create New Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter the name"
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
                name="password"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="shadcn"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link href="/login" className="text-center text-sky-400 w-full">
            Already have an Accoun?Login
          </Link>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignupForm;
