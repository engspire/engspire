'use client';
import { usePathname } from 'next/navigation';
import { ICourseLabel, courseIntakes, courses } from '../../.includes/courses';
import IntakeDetails from '../IntakeDetails';

type CourseDetailsData = {
  orderId: string,
  productId: string,
  amount: number,
  currency: string,
  productName: string,
};

type CourseDetailsProps = CourseDetailsData & {
  updateFields: (fields: Partial<CourseDetailsData>) => void;
};

export default function CourseDetails({ updateFields }: CourseDetailsProps) {
  const pathname = usePathname();

  const intakeData = courseIntakes.get(`${courses.get((pathname.split("/")[2] as ICourseLabel))?.nextBatchCode}`);

  return (
    <>
      {intakeData && <IntakeDetails data={intakeData} showJoin />}
    </>
  );
}
