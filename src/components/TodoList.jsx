import { useState } from "react";
import { PlusCircle, CheckCircle, Circle, X, Calendar } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Lebensmittel einkaufen",
      completed: false,
      dueDate: "09.05.2025",
      priority: "Hoch",
    },
    {
      id: 2,
      text: "Projekt fertigstellen",
      completed: false,
      dueDate: "12.05.2025",
      priority: "Hoch",
    },
    {
      id: 3,
      text: "Arzttermin",
      completed: true,
      dueDate: "05.05.2025",
      priority: "Mittel",
    },
    {
      id: 4,
      text: "Tägliche Übungen",
      completed: false,
      dueDate: "10.05.2025",
      priority: "Niedrig",
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("2025-05-09"); // تاریخ پیش‌فرض
  const [dueTime, setDueTime] = useState("12:00"); // زمان پیش‌فرض

  const [filter, setFilter] = useState("Alle");

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        dueDate: `${dueDate} ${dueTime}`, // ترکیب تاریخ و زمان
        priority: "Mittel",
      };
      setTasks([...tasks, task]);
      setNewTask("");
      setDueDate("2025-05-09"); // بازنشانی تاریخ
      setDueTime("12:00"); // بازنشانی زمان
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Alle") return true;
    if (filter === "Erledigt") return task.completed;
    if (filter === "Ausstehend") return !task.completed;
    return true;
  });

  const getPriorityColor = (priority) => {
    if (priority === "Hoch") return "bg-red-100 text-red-600";
    if (priority === "Mittel") return "bg-yellow-100 text-yellow-600";
    return "bg-blue-100 text-blue-500";
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6">
        <h1 className="text-2xl font-bold text-white">Meine Aufgabenliste</h1>
        <p className="text-white text-opacity-80">
          Tägliche Aufgabenverwaltung
        </p>
        <p className="text-white text-opacity-70 text-sm mt-1">
          Organisiere deinen Tag einfach und effizient
        </p>

        <div className="mt-6 flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Neue Aufgabe hinzufügen..."
            className="flex-1 py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            className="py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-indigo-700 text-white px-4 rounded-r-lg flex items-center"
          >
            <PlusCircle size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter("Alle")}
              className={`px-3 py-1 rounded-md ${
                filter === "Alle" ? "bg-gray-200" : "bg-gray-100"
              }`}
            >
              Alle
            </button>
            <button
              onClick={() => setFilter("Ausstehend")}
              className={`px-3 py-1 rounded-md ${
                filter === "Ausstehend" ? "bg-gray-200" : "bg-gray-100"
              }`}
            >
              Ausstehend
            </button>
            <button
              onClick={() => setFilter("Erledigt")}
              className={`px-3 py-1 rounded-md ${
                filter === "Erledigt" ? "bg-gray-200" : "bg-gray-100"
              }`}
            >
              Erledigt
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {filteredTasks.length} Aufgaben
          </div>
        </div>

        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                task.completed
                  ? "bg-gray-50 border-gray-200"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center flex-1">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className="mr-2"
                >
                  {task.completed ? (
                    <CheckCircle size={22} className="text-green-500" />
                  ) : (
                    <Circle size={22} className="text-gray-400" />
                  )}
                </button>
                <div className="flex-1">
                  <p
                    className={`${
                      task.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {task.text}
                  </p>
                  <div className="flex mt-1 text-xs space-x-2">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {task.dueDate}
                    </div>
                    <div
                      className={`px-2 py-0.5 rounded-full ${getPriorityColor(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={18} className="text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
