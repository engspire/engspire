"use client";
import { ICourseIntake } from '@/.includes/courses';
import { useProfile } from '@/providers/ProfileProvider';
import Link from 'next/link';
import IntakeDetails from './IntakeDetails';

type IIntakeCardProps = {
  data: ICourseIntake;
  showJoin?: boolean;
};

export default function IntakeCard({ data, showJoin = false }: IIntakeCardProps) {
  const { profile } = useProfile();

  return (
    <div className="card w-80 max-w-xs bg-base-100 border shadow-xl">
      <div className="card-body">
        <IntakeDetails data={data} showJoin={showJoin} />
        <div className="form-control mt-4">
          {data.canRegister && data.registrationUrl
            ? <Link target="_blank" href={data.registrationUrl} className="btn btn-primary btn-block" >Sign up</Link>
            : <Link target="_blank" href={data.registrationUrl} className="btn btn-accent btn-block" >Join the waiting list</Link>
          }
        </div>
      </div>
    </div>
  );
}
