import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import React from 'react';

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage: React.FC<IssueDetailPageProps> = async ({ params }) => {
  // if (typeof params.id !== 'number') notFound();
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(params.id) } });

  if (!issue) notFound();
  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdOn.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
