"use client";
import { useWindowSize } from '@uidotdev/usehooks';
import MoreActionsButton from './MoreActionsButton';
import ScheduleConversationButton from './ScheduleConversationButton';
import ViewPaymentsButton from './ViewPaymentsButton';

export default function DashboardActionButtons() {
  const { width } = useWindowSize();

  if (width && width >= 1024) return (
    <div className="lg:flex flex-row gap-3 lg:h-fit">
      <ScheduleConversationButton />
      <ViewPaymentsButton />
      <MoreActionsButton />
    </div>
  );
}
