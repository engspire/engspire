"use client";
import ActivityHeatMap from '@/components/ActivityHeatMap';
import CourseCards from '@/components/CourseCards';
import CurrentUserCard from '@/components/CurrentUserCard';
import MoreActionsButton from '@/components/DashboardActionButtons/MoreActionsButton';
import ScheduleConversationButton from '@/components/DashboardActionButtons/ScheduleConversationButton';
import ViewPaymentsButton from '@/components/DashboardActionButtons/ViewPaymentsButton';
import MyCoursesView from '@/components/MyCoursesView';
import PaymentsModal from '@/components/PaymentsModal';
import ProfileModal from '@/components/ProfileModal';
import RandomQuote from '@/components/RandomQuote';
import { useProfile } from '@/providers/ProfileProvider';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Dashboard() {
    const { isLoading } = useProfile();
    const { width } = useWindowSize();

    if (isLoading) return (<div className="min-h-screen grid place-items-center text-center"><span className="-mt-64 loading loading-bars loading-lg" ></span></div>);
    else return (
        <div className="min-h-screen pt-2 flex flex-col lg:flex-row gap-3">
            <div className="flex flex-col items-center gap-3 min-w-[320px]">
                <CurrentUserCard />
                <ProfileModal />
                {width && width < 1024 && (
                    <div className='grid gap-3 w-[80%]'>
                        <ScheduleConversationButton />
                        <ViewPaymentsButton />
                        <MoreActionsButton />
                    </div>
                )}
                <ActivityHeatMap />
                <RandomQuote />
            </div>
            <div className="grid lg:w-[600px] p-4 lg:h-fit gap-4">
                {width && width >= 1024 &&
                    <div className="lg:flex flex-row gap-3 lg:h-fit">
                        <ScheduleConversationButton />
                        <ViewPaymentsButton />
                        <MoreActionsButton />
                    </div>
                }
                <MyCoursesView />
            </div>
            <PaymentsModal />
        </div>
    );
}
