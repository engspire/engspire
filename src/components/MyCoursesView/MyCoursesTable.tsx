"use client";
import React from 'react';
import CourseDetailsModal from './CourseDetailsModal';

type IMyCoursesTableProps = {
  records: any[];
};

export default function MyCoursesTable({ records }: IMyCoursesTableProps) {
  function getStatusColor(status: "ACTIVE" | "COMPLETED" | "PENDING" | "SUSPENDED") {
    let color = "string";
    switch (status) {
      case "ACTIVE":
        return "primary";
      case "COMPLETED":
        return "neutral";
      case "PENDING":
        return "secondary";
      case "SUSPENDED":
        return "accent";
      default:
        return "neutral";
    }
  }

  return (
    <table className="table md:max-w-sm bg-base-100 shadow-xl">
      <thead>
        <tr>
          <td className='pl-[58px]'>Course Title</td>
          {records[0].status && <td className=''>Status</td>}
        </tr>
      </thead>
      <tbody>
        {records.length > 0 ? records.map((record, i) => (
          <tr key={Math.random()}>
            <td className='pr-0 flex flex-row items-center'>
              <div className="dropdown">
                <button className="btn btn-ghost btn-xs btn-circle" tabIndex={0}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                </button>
                <ul tabIndex={0} className="dropdown-content bg-neutral text-neutral-content z-[1] menu p-2 shadow rounded-box min-w-[240px] justify-center">
                  <li><a className='justify-start' href={record.course.classroomUrl ?? ""} target='_blank'><span className='lg:inline'>🧑🏻‍🏫</span>Open Google Classroom</a></li>
                  <li><a className='justify-start' href={record.course.whatsAppUrl ?? ""} target='_blank'><span className='lg:inline'>🗨️</span>Open WhatsApp channel</a></li>
                  <li><a className='justify-start' href={"#open-course-calendar"}><span className='lg:inline'>🗓️</span>Open course calendar</a></li>
                </ul>
              </div>
              <a href={`#course-details/${record.course.id}`} className="text-left font-semibold ml-2 cursor-pointer hover:underline line-clamp-1" onClick={() => (document.getElementById(`CourseDetailsModal_${record.id}`) as HTMLDialogElement).showModal()}>
                {record.course.title}
              </a>
            </td>
            {record.status && <td className='place-items-center'><span className={`badge badge-${getStatusColor(record.status)} badge-outline text-xs p-1`}>{record.status}</span></td>}
            <CourseDetailsModal data={record} />
          </tr>
        )) : (
          <tr className='h-[100px]'>
            <td colSpan={2} className='text-center'>
              <label className='btn btn-ghost hover:bg-base-100 cursor-default'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                No records
              </label>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
