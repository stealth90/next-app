'use client';

import { Button, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>({});

  const onCreateIssue = async (data: IssueForm) => {
    await axios.post('/api/issues', data);
    router.push('/issues');
  };

  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onCreateIssue)}>
      <TextField.Root placeholder="Title" {...register('title')}></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="description" {...field} />}
      ></Controller>
      <Button>Submit new issue</Button>
    </form>
  );
};

export default NewIssuePage;
