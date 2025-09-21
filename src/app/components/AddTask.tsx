import React from "react";
import { FaPlus } from "react-icons/fa6";
import {} from "react-icons/ai";

export default function AddTask() {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-outline btn-info w-md rounded-2xl"
          >
            Add Task
            <FaPlus />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <div className="">
                <label className="input validator">
                  <input
                    type="text"
                    required
                    placeholder="todo name"
                    title="Only letters"
                  />
                </label>
                <p className="validator-hint">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <input type="time" className="input" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>


// {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     </form>
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click on ✕ button to close</p>
//   </div>
// </dialog>
  );
}
