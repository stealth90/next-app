import React, { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

interface LinkProps extends PropsWithChildren {
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
