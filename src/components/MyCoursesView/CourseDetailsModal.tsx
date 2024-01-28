import { format } from 'date-fns';
import Link from 'next/link';

type ICourseDetailsModal = {
  data: any;
};

export default function CourseDetailsModal({ data }: ICourseDetailsModal) {
  return (
    <dialog id={`CourseDetailsModal_${data.id}`} className="modal modal-top justify-center">
      <div className="modal-box max-h-screen md:max-h-fit md:min-w-[540px] md:max-w-fit">
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold -mt-8"><span className='text-secondary'>{data.course.title}</span></h1>
          <div className="flex flex-col sm:flex-row justify-center place-items-center">
            <div className="w-full mb-4">
              <div className="grid gap-3">
                <div>
                  <h2 className="text-xl font-semibold">Class days</h2>
                  <div className="flex space-x-2 py-2">
                    <div className={data.course.classDayMonday ? "btn btn-xs sm:btn-sm btn-circle btn-primary" : data.course.title === "Spoken English Course" ? "btn btn-xs sm:btn-sm btn-circle btn-info" : "btn btn-xs sm:btn-sm btn-circle btn-ghost btn-outline"}>M</div>
                    <div className={data.course.classDayTuesday ? "btn btn-xs sm:btn-sm btn-circle btn-primary" : data.course.title === "Spoken English Course" ? "btn btn-xs sm:btn-sm btn-circle btn-info" : "btn btn-xs sm:btn-sm btn-circle btn-ghost btn-outline"}>T</div>
                    <div className={data.course.classDayWednesday ? "btn btn-xs sm:btn-sm btn-circle btn-primary" : data.course.title === "Spoken English Course" ? "btn btn-xs sm:btn-sm btn-circle btn-info" : "btn btn-xs sm:btn-sm btn-circle btn-ghost btn-outline"}>W</div>
                    <div className={data.course.classDayThursday ? "btn btn-xs sm:btn-sm btn-circle btn-primary" : data.course.title === "Spoken English Course" ? "btn btn-xs sm:btn-sm btn-circle btn-info" : "btn btn-xs sm:btn-sm btn-circle btn-ghost btn-outline"}>T</div>
                    <div className={data.course.classDayFriday ? "btn btn-xs sm:btn-sm btn-circle btn-primary" : data.course.title === "Spoken English Course" ? "btn btn-xs sm:btn-sm btn-circle btn-info" : "btn btn-xs sm:btn-sm btn-circle btn-ghost btn-outline"}>F</div>
                    <div className={data.course.classDaySaturday ? "btn btn-xs sm:btn-sm btn-circle btn-primary" : "btn btn-xs sm:btn-sm btn-circle btn-ghost btn-outline"}>S</div>
                    <div className={data.course.classDaySunday ? "btn btn-xs sm:btn-sm btn-circle btn-primary" : "btn btn-xs sm:btn-sm btn-circle btn-ghost btn-outline text-red-500"}>S</div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Class time</h2>
                  {/* <p className='text-base truncate'>From {format(new Date(0, 0, 0, (data.course.classStartTime).split(":")[0], (data.course.classStartTime).split(":")[1]), "hh:mm a")} to {format(new Date(0, 0, 0, (data.course.classEndTime).split(":")[0], (data.course.classEndTime).split(":")[1]), "hh:mm a")}</p> */}
                  <p className='text-base truncate'>From {format(new Date(0, 0, 0, 8, 30), "hh:mm a")} to {format(new Date(0, 0, 0, 10, 30), "hh:mm a")}</p>
                  {data.course.eventUrl && (
                    <Link href={data.course.eventUrl ?? ""} target="_blank" className="btn btn-primary mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Join Live Discussion
                    </Link>
                  )}
                </div>
                {/* <div>
                  <h2 className="text-xl font-semibold">Course duration</h2>
                  <p className='text-base truncate'>From {format(new Date(data.course.courseStartDate), "yyyy-MM-dd")} to {format(new Date(data.course.courseEndDate), "yyyy-MM-dd")}</p>
                </div> */}
              </div>
            </div>
          </div>
          {(data.course.classroomUrl || data.course.whatsAppUrl) && (
            <div className="flex flex-col gap-4">
              {data.course.classroomUrl && (
                <div className="join">
                  <img src="/GoogleClassroomIconModified.png" alt="Google Classroom" className='h-[48px] mx-2' />
                  <Link href={data.course.classroomUrl ?? ""} target='_blank' className="btn">Open Google Classroom</Link>
                </div>
              )}
              {data.course.whatsAppUrl && (
                <div className="join">
                  <img src="/WhatsAppIcon.png" alt="Google Classroom" className="h-[48px] mx-2" />
                  <Link href={data.course.whatsAppUrl ?? ""} target='_blank' className="btn">Open WhatsApp channel</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
