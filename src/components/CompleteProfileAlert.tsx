"use client";
import ProfileForm from './ProfileForm';

export default function CompleteProfileAlert() {
  return (
    <div className="flex flex-row rounded-2xl bg-base-100 shadow-xl p-2 border max-w-[280px]">
      <div className="p-2">
        <h2 className="font-bold text-base text-accent line-clamp-1">⚠️ Your profile is incomplete.</h2>
        <div className="flex flex-col gap-1">
          <div className="px-2 my-2">
            <p className='text-xs'>You need to complete your profile to use this platform.</p>
          </div>
          <a href='#complete-profile' className="btn btn-sm btn-accent" onClick={() => (document.getElementById('CompleteProfileModal') as HTMLDialogElement).showModal()}>Complete profile</a>
        </div>
      </div>
      <dialog id="CompleteProfileModal" className="modal modal-top md:justify-center">
        <div className="modal-box min-h-screen md:min-h-fit md:min-w-[540px]">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
          <ProfileForm header="Welcome to Engspire!" />
        </div>
      </dialog>
    </div>
  );
}
