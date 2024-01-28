import { ICourseIntake, courseLabels } from '@/.includes/courses';
import { useAuth } from '@clerk/nextjs';
import { format, formatDistanceToNow } from "date-fns";
import Link from 'next/link';

type IIntakeCardProps = {
  data: ICourseIntake;
  showJoin?: boolean;
};

export default function IntakeDetails({ data, showJoin }: IIntakeCardProps) {
  const { userId } = useAuth();

  return (
    <>
      {showJoin && data.startDate && <h2 className="card-title mb-4">Join the {data.status}</h2>}
      {data.startDate &&
        <div className="mb-2">
          <p className="text-sm">Start Date</p>
          <p className="font-bold">{format(data.startDate, "PPP")}</p>
          <p className="text-xs">{formatDistanceToNow(data.startDate, { addSuffix: true })}</p>
        </div>
      }
      <div className="mb-2">
        <p className="text-sm">Duration</p>
        <p className="font-bold">{data.duration}</p>
      </div>
      <div className="mb-2">
        <p className="text-sm">Class Day(s)</p>
        <div className="flex space-x-2 py-2">
          <div className={data.classDays.Monday ? "btn btn-xs btn-circle btn-primary" : data.courseLabel === courseLabels.spokenEnglish ? "btn btn-xs btn-circle btn-success" : "btn btn-xs btn-circle btn-ghost btn-outline"}>M</div>
          <div className={data.classDays.Tuesday ? "btn btn-xs btn-circle btn-primary" : data.courseLabel === courseLabels.spokenEnglish ? "btn btn-xs btn-circle btn-info" : "btn btn-xs btn-circle btn-ghost btn-outline"}>T</div>
          <div className={data.classDays.Wednesday ? "btn btn-xs btn-circle btn-primary" : data.courseLabel === courseLabels.spokenEnglish ? "btn btn-xs btn-circle btn-info" : "btn btn-xs btn-circle btn-ghost btn-outline"}>W</div>
          <div className={data.classDays.Thursday ? "btn btn-xs btn-circle btn-primary" : data.courseLabel === courseLabels.spokenEnglish ? "btn btn-xs btn-circle btn-info" : "btn btn-xs btn-circle btn-ghost btn-outline"}>T</div>
          <div className={data.classDays.Friday ? "btn btn-xs btn-circle btn-primary" : data.courseLabel === courseLabels.spokenEnglish ? "btn btn-xs btn-circle btn-success" : "btn btn-xs btn-circle btn-ghost btn-outline"}>F</div>
          <div className={data.classDays.Saturday ? "btn btn-xs btn-circle btn-primary" : "btn btn-xs btn-circle btn-ghost btn-outline"}>S</div>
          <div className={data.classDays.Sunday ? "btn btn-xs btn-circle btn-primary" : "btn btn-xs btn-circle btn-ghost btn-outline text-red-500"}>S</div>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-sm">Class Time</p>
        <p className="font-bold">{data.classTime}</p>
      </div>
      <div className="mb-2">
        <p className="text-sm">Total Fee</p>
        {
          data.totalFeeStrikethrough
            ? <p className="font-bold"><span className="line-through">{data.totalFeeStrikethrough}</span>&nbsp;<span className='text-primary'>{data.totalFee}</span></p>
            : <p className="font-bold">{data.totalFee}</p>
        }
        {data.installments && data.installments.description.length > 0 && (
          <ul className="text-sm pl-2">
            <li>Installments</li>
            <li>
              <ul className="text-xs">
                {data.installments.description.map((installment, index) => (<li key={index}>{installment}</li>))}
              </ul>
            </li>
          </ul>
        )}
      </div>
      {showJoin && (
        <div className="card-actions mt-6">
          {data.whatsAppUrl &&
            <div className="join">
              <img src="/WhatsAppIcon.png" alt="Google Classroom" className="h-[48px] mx-2" />
              <Link href={data.whatsAppUrl ?? ""} target='_blank' className="btn">Join WhatsApp group</Link>
            </div>
          }
        </div>
      )}
    </>
  );
}
