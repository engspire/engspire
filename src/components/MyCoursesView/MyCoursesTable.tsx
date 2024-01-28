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
      <tbody>
        {records.length > 0 ? records.map((record, i) => (
          <tr key={Math.random()}>
            <td className='pr-0 flex flex-row items-center'>
              <div className="dropdown">
                <button className="btn btn-ghost btn-xs btn-circle" tabIndex={0}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </button>
                <ul tabIndex={0} className="dropdown-content bg-neutral text-neutral-content z-[1] menu p-2 shadow rounded-box min-w-[240px] justify-center">
                  <li><a className='justify-start' href={record.course.classroomUrl ?? ""} target='_blank'><span className='lg:inline'>🧑🏻‍🏫</span>Open Google Classroom</a></li>
                  <li><a className='justify-start' href={record.course.whatsAppUrl ?? ""} target='_blank'><span className='lg:inline'>🗨️</span>Open WhatsApp channel</a></li>
                  <li><a className='justify-start' href={"#open-course-calendar"}><span className='lg:inline'>🗓️</span>Open course calendar</a></li>
                </ul>
              </div>
              <label className="text-left font-semibold ml-2 cursor-pointer hover:underline line-clamp-1" onClick={() => (document.getElementById(`CourseDetailsModal_${record.id}`) as HTMLDialogElement).showModal()}>
                {record.course.title}
              </label>
            </td>
            {record.status && <td className='place-items-center text-right'><span className={`badge badge-${getStatusColor(record.status)} badge-outline text-xs p-1`}>{record.status}</span></td>}
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
