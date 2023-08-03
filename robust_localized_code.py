import os
import pickle
import schedule
import time
import json


class CommandStack:
    def __init__(self):
        self.stack = []
    def push(self, command):
        self.stack.append(command)
    def pop(self):
        if len(self.stack) < 1:
            return None
        return self.stack.pop()
    def peek(self):
        if len(self.stack) < 1:
            return None
        return self.stack[len(self.stack) - 1]

def backup_state(task_manager, backup_file='task_manager_backup.pkl'):
    with open(backup_file, 'wb') as f:
        pickle.dump(task_manager, f)


def restore_state(backup_file='task_manager_backup.pkl'):
    if os.path.exists(backup_file):
        with open(backup_file, 'rb') as f:
            task_manager = pickle.load(f)
        return task_manager
    else:
        return None


def export_task_data(task_data, file_format, file_name):
    if file_format.lower() == 'csv':
        with open(file_name, 'w', newline='') as csvfile:
            fieldnames = task_data[0].keys()
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(task_data)
    elif file_format.lower() == 'json':
        with open(file_name, 'w') as jsonfile:
            json.dump(task_data, jsonfile)


def job():
    pass

schedule.every().day.at("10:30").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
