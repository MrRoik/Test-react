//import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice';

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
        className={css.checkbox}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
