"use client";
import ProfileForm from './ProfileForm';

export default function ProfileModal() {
  return (
    <dialog id="EditProfileModal" className="modal modal-top md:justify-center">
      <div className="modal-box min-h-screen md:min-h-fit md:min-w-[540px]">
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
        <ProfileForm header="Edit my profile" />
      </div>
    </dialog>
  );
}
