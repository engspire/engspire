"use client";
import { apiClient } from '@/apiClient';
import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import MyCoursesTable from './MyCoursesTable';

export default function MyCoursesView() {
  const { userId, getToken } = useAuth();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"], queryFn: async () => {
      const { data } = await apiClient(await getToken()).get(`/v1/me/courses`);
      console.log(data);
      return data;
    }
  });

  return userId && (
    <div className='grid gap-6'>
      {isLoading && <div className="min-h-[172px] max-w-sm grid place-items-center text-center"><span className="loading loading-bars loading-lg" ></span></div>}
      {courses?.coursesAsTeacher && courses?.coursesAsTeacher.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Courses I&apos;m teaching 🧑🏻‍🏫</h3>
          <div className="grid gap-3">
            <MyCoursesTable records={courses?.coursesAsTeacher ?? []} />
          </div>
        </div>
      )}
      {courses?.coursesAsLearner && courses?.coursesAsLearner.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Courses I&apos;m following 🧑🏻‍🎓</h3>
          <div className="grid gap-3">
            <MyCoursesTable records={courses?.coursesAsLearner ?? []} />
          </div>
        </div>
      )}
    </div>
  );
}
