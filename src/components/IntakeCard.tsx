import { ICourseIntake, courseLabels } from '@/.includes/courses';
import React from 'react';
import { format, formatDistanceToNow } from "date-fns";
import Link from 'next/link';

type IIntakeCardProps = {
  data: ICourseIntake;
  showJoin?: boolean;
};

export default function IntakeCard({ data, showJoin = false }: IIntakeCardProps) {
  return (
    <div className="card w-80 max-w-xs bg-base-100 border shadow-xl">
      <div className="card-body">
        {showJoin && data.startDate && <h2 className="card-title mb-4">Join the {data.status}</h2>}
        {data.startDate &&
          <div>
            <p className="text-sm">Start Date</p>
            <p className="font-bold">{format(data.startDate, "PPP")}</p>
            <p className="text-xs">{formatDistanceToNow(data.startDate, { addSuffix: true })}</p>
          </div>
        }
        <div>
          <p className="text-sm">Duration</p>
          <p className="font-bold">{data.duration}</p>
        </div>
        <div>
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
        <div>
          <p className="text-sm">Class Time</p>
          <p className="font-bold">{data.classTime}</p>
        </div>
        <div>
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
          <div className="card-actions justify-end mt-4">
            {data.whatsAppUrl && <Link href={data.whatsAppUrl} target="_blank" className="btn btn-ghost btn-block bg-success text-success-content"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>Join WhatsApp Group</Link>}
            {data.canRegister && data.registrationUrl ? <Link target="_blank" href={data.registrationUrl} className="btn btn-primary btn-block" >Sign up</Link> : <Link target="_blank" href={data.registrationUrl} className="btn btn-info btn-block" >Pre-register</Link>}
          </div>
        )}
      </div>
    </div>
  );
}
