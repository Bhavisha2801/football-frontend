'use client'; 
import MatchSchedule from './match-schedule';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function ScheduleMatch() {
  return (
    <QueryClientProvider client={queryClient}>  {/* Provide the query client to the component tree */}
      <MatchSchedule />
    </QueryClientProvider>
  );
}
