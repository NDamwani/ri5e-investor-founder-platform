import React, { useState, useEffect } from "react";
import { FaPlus, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { constants } from "../../utility/constants";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const TaskScheduler = () => {
  const { axiosGet, axiosPost, axiosPatch, axiosDelete } = useAxiosPrivate();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await axiosGet(constants.TASKS);
      if (data && Array.isArray(data.tasks)) {
        setTasks(data.tasks);
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  const addTask = async (values, { resetForm }) => {
    try {
      const data = await axiosPost(constants.TASKS, values);
      setTasks([...tasks, data.task]);
      resetForm();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axiosDelete(`${constants.TASKS}/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTaskStatus = async (taskId, status) => {
    try {
      const data = await axiosPatch(`${constants.TASKS}/${taskId}/status`, {
        status,
      });
      setTasks(tasks.map((task) => (task._id === taskId ? data.task : task)));
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const validationSchema = Yup.object({
    task: Yup.string().required("Task name is required"),
    status: Yup.string()
      .oneOf(["in progress", "done", "on hold"], "Invalid status")
      .required("Status is required"),
    time: Yup.string().required("Time is required"),
  });

  return (
    <div className="flex w-1/4 items-start justify-end">
      <div className="w-full space-y-4 rounded-lg bg-gray-900 text-white">
        {/* Heading */}
        <h2 className="py-4 text-center text-xl font-semibold">
          Task Scheduler
        </h2>

        {/* Formik Form for Task Input */}
        <Formik
          initialValues={{ task: "", status: "in progress", time: "" }}
          validationSchema={validationSchema}
          onSubmit={addTask}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-4 rounded-lg bg-gray-800 p-4">
              <div className="mb-4 flex flex-col">
                <Field
                  type="text"
                  name="task"
                  placeholder="New Task"
                  className="rounded-lg border-none bg-gray-800 p-2 text-white outline-none"
                />
                <ErrorMessage
                  name="task"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-4 flex flex-col">
                <Field
                  as="select"
                  name="status"
                  className="rounded-lg bg-gray-700 p-2 text-white"
                >
                  <option value="in progress">In Progress</option>
                  <option value="done">Done</option>
                  <option value="on hold">On Hold</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-4 flex flex-col">
                <Field
                  type="text"
                  name="time"
                  placeholder="Time"
                  className="rounded-lg border-none bg-gray-800 p-2 text-white outline-none"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center rounded-lg bg-blue-600 p-2 text-white"
              >
                <FaPlus className="mr-2" />
                {isSubmitting ? "Adding..." : "Add Task"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Task List */}
        <div className="max-h-[500px] space-y-4 overflow-y-auto p-4">
          {tasks.length > 0 ? (
              tasks.slice().reverse().map((task) => (
              <div
                key={task._id}
                className="mb-2 flex items-center justify-between rounded-lg bg-gray-800 p-3"
              >
                <div>
                  <span className="block text-lg font-semibold">
                    {task.task}
                  </span>
                  <span
                    className={`block text-sm ${
                      task.status === "done"
                        ? "text-green-500"
                        : task.status === "on hold"
                          ? "text-yellow-500"
                          : "text-orange-500"
                    }`}
                  >
                    {task.status}
                  </span>
                  <span className="text-sm text-gray-400">{task.time}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => updateTaskStatus(task._id, "in progress")}
                    className="text-blue-500"
                  >
                    <FaSyncAlt />
                  </button>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No tasks scheduled</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskScheduler;
