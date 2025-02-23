import { ITask } from "./FormTask";
import styles from "./FormList.module.css";
import { Check, ClipboardText, Trash } from "phosphor-react";

interface formListProps {
  tasks: ITask[];
  onDeleteTask: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
}

export function FormList({ tasks, onDeleteTask, onCheckTask }: formListProps) {
  const notCompletedTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  const sortedNotCompletedTasks = notCompletedTasks.sort((a, b) =>
    a.content.localeCompare(b.content)
  );
  const sortedCompletedTasks = completedTasks.sort((a, b) =>
    a.content.localeCompare(b.content)
  );

  const sortedTasks = [...sortedNotCompletedTasks, ...sortedCompletedTasks];

  return (
    <>
      <div className={styles.tasksList}>
        <p className={styles.createdTasks}>
          Tarefas criadas{" "}
          <span className={styles.amountNumberTasks}>{tasks.length}</span>
        </p>
        <p className={styles.completedTasks}>
          Concluídas{" "}
          {tasks.length > 0 ? (
            <span className={styles.amountNumberTasksCompleted}>
              {completedTasks.length} de {tasks.length}
            </span>
          ) : (
            <span className={styles.amountNumberTasks}>{tasks.length}</span>
          )}
        </p>
      </div>

      {tasks.length > 0 ? (
        <ul className={styles.list}>
          {sortedTasks.map((task) => (
            <li key={task.id} className={styles.task}>
              <button
                onClick={() => onCheckTask(task.id)}
                className={
                  task.isCompleted ? styles.btnComplete : styles.btnIncomplete
                }
              >
                <Check weight="bold" />
              </button>

              <span
                className={
                  task.isCompleted ? styles.taskComplete : styles.taskIncomplete
                }
              >
                {task.content}
              </span>

              <button
                onClick={() => onDeleteTask(task.id)}
                className={styles.btnDelete}
              >
                <Trash weight="light" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyList}>
          <ClipboardText weight="light" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  );
}
