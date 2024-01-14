'use client';
import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { ICourse, ICourseIntake, ICourseLabel, courseIntakes, courseLabels, courses } from '../../.includes/courses';
import IntakeCard from '../IntakeCard';

type ProductDetailsData = {
  orderId: string,
  productId: string,
  amount: number,
  currency: string,
  productName: string,
};

type ProductDetailsProps = ProductDetailsData & {
  updateFields: (fields: Partial<ProductDetailsData>) => void;
};

export default function ProductDetails({ updateFields }: ProductDetailsProps) {
  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  const [intakeData, setIntakeData] = useState<ICourseIntake | undefined>(undefined);


  function handleCourseChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const course = courses.get(e.target.value as ICourseLabel);
    const intakeData = course && courseIntakes.get(course.nextBatchCode.toString());

    setCourse(course);
    setIntakeData(intakeData);

    updateFields({
      orderId: `payhere_${uuidV4()}`,
      productId: intakeData?.batchCode?.toString(),
      productName: course?.title,
      amount: intakeData?.amount,
      currency: intakeData?.currency,
    });
  }

  return (
    <>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold'>Pay for a course</h2>
      </div>
      <select className="select select-bordered w-full max-w-xs" onChange={e => handleCourseChange(e)}>
        <option value={"Select course..."} disabled selected>Select an option...</option>
        <option value={courseLabels.beginnersGrammar}>{courses.get('beginnersGrammar')?.title}</option>
        <option value={courseLabels.pronunciationTraining}>{courses.get('pronunciationTraining')?.title}</option>
        <option value={courseLabels.spokenEnglish}>{courses.get('spokenEnglish')?.title}</option>
      </select>
      <div className="my-4 flex justify-center">
        {intakeData && <IntakeCard data={intakeData} />}
      </div>
    </>
  );
}
