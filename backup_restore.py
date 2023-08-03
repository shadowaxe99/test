import os
import pickle

def backup_state(task_manager, backup_file='task_manager_backup.pkl'):
    """
    Backup the state of the task manager.
    Parameters:
    task_manager (TaskManager): Task manager instance to backup.
    backup_file (str): File path to save the backup. Defaults to 'task_manager_backup.pkl'.
    """
    with open(backup_file, 'wb') as f:
        pickle.dump(task_manager, f)
    print(f'Task manager state backed up to {backup_file}')


def restore_state(backup_file='task_manager_backup.pkl'):
    """
    Restore the state of the task manager from a backup file.
    Parameters:
    backup_file (str): File path to load the backup from. Defaults to 'task_manager_backup.pkl'.
    Returns:
    TaskManager: Restored task manager instance.
    """
    if os.path.exists(backup_file):
        with open(backup_file, 'rb') as f:
            task_manager = pickle.load(f)
        print(f'Task manager state restored from {backup_file}')
        return task_manager
    else:
        print(f'No backup found at {backup_file}. Cannot restore state.')
        return None
