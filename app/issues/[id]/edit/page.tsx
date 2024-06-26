import React from 'react';
import IssueForm from '../../_components/IssueForm';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

interface EditIssuePageProps {
  params: { id: string };
}

const EditIssuePage: React.FC<EditIssuePageProps> = async ({ params }) => {
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(params.id) } });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
