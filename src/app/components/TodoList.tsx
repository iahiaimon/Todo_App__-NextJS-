import React from "react";
import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function TodoList() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full flex justify-between">
          {/* Table head */}

          <thead>
            <tr>
              <th>Id</th>
              <th>Todo</th>
              <th>Status</th>
              <th>Actions Time</th>
              <th>Adding Time</th>
            </tr>
          </thead>

          {/* Table body */}

          <tbody>
            <tr className="bg-base-200">
              <th>1</th>
              <td>Buy Eggs</td>
              <td>Pending</td>
              <td>2023-09-22 10:00 AM</td>
              <td>2023-09-22 10:00 AM</td>
              <td>
                <div className="flex gap-8 text-xl">
                  <div className="cursor-pointer">
                    <FaCheck />
                  </div>
                  <div className="text-red-600 cursor-pointer">
                    <AiFillDelete />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th>2</th>
              <td>Shopping</td>
              <td>In Progress</td>
              <td>2023-09-21 2:30 PM</td>
              <td>2023-09-22 1:00 PM</td>
              <td>
                <div className="flex gap-8 text-xl">
                  <div className="cursor-pointer">
                    <FaCheck />
                  </div>
                  <div className="text-red-600 cursor-pointer">
                    <AiFillDelete />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th>3</th>
              <td>Project</td>
              <td>Not Started</td>
              <td>2023-09-20 11:45 AM</td>
              <td>2023-09-20 11:45 AM</td>
              <td>
                <div className="flex gap-8 text-xl">
                  <div className="cursor-pointer">
                    <FaCheck />
                  </div>
                  <div className="text-red-600 cursor-pointer">
                    <AiFillDelete />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="bg-base-200 ">
              <th>4</th>
              <td>Office</td>
              <td>Completed</td>
              <td>2023-09-19 9:15 AM</td>
              <td>2023-09-19 9:15 AM</td>
              <td>
                <div className="flex gap-8 text-xl">
                  <div className="cursor-pointer">
                    <FaCheck />
                  </div>
                  <div className="text-red-600 cursor-pointer">
                    <AiFillDelete />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th>5</th>
              <td>Buy Fruits</td>
              <td>In Progress</td>
              <td>2023-09-18 3:00 PM</td>
              <td>2023-09-22 12:45 PM</td>
              <td>
                <div className="flex gap-8 text-xl">
                  <div className="cursor-pointer">
                    <FaCheck />
                  </div>
                  <div className="text-red-600 cursor-pointer">
                    <AiFillDelete />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th>6</th>
              <td>Extend RAM</td>
              <td>Pending</td>
              <td>2023-09-23 8:30 AM</td>
              <td>2023-09-23 8:30 AM</td>
              <td>
                <div className="flex gap-8 text-xl">
                  <div className="cursor-pointer">
                    <FaCheck />
                  </div>
                  <div className="text-red-600 cursor-pointer">
                    <AiFillDelete />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
