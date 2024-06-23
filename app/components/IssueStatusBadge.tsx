import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';
import React from 'react';

interface IssueStatusBadgeProps {
  status: Status;
}

const STATUS_MAP: Record<Status, { label: string; color: 'red' | 'violet' | 'green' }> = {
  OPEN: { label: 'Open', color: 'red' },
  IN_PROGRESS: { label: 'In Progress', color: 'violet' },
  CLOSED: { label: 'Closed', color: 'green' },
};

const IssueStatusBadge: React.FC<IssueStatusBadgeProps> = ({ status }) => {
  return <Badge color={STATUS_MAP[status].color}>{STATUS_MAP[status].label}</Badge>;
};

export default IssueStatusBadge;
