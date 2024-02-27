import { Session } from 'next-auth';
import { PropsWithChildren } from 'react';

export interface ISessionProviderProps extends PropsWithChildren {
  session: Session | null;
}
