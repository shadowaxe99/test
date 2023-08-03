import csv
import json


def export_task_data(task_data, file_format, file_name):
    if file_format.lower() == 'csv':
        with open(file_name, 'w', newline='') as csvfile:
            fieldnames = task_data[0].keys()
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

            writer.writeheader()
            for data in task_data:
                writer.writerow(data)
    elif file_format.lower() == 'json':
        with open(file_name, 'w') as jsonfile:
            json.dump(task_data, jsonfile)
    else:
        print('Invalid file format. Please choose either CSV or JSON.')


# Example usage:
task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
export_task_data(task_data, 'csv', 'task_data.csv')

# Additional logic
# Add your additional logic here

# Your code goes here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Additional logic
# Add your additional logic here

# Your additional code goes here

# Your code goes here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Additional logic
# Add your additional logic here

# Your additional code goes here

# Your code goes here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Deployment logic
# Add your deployment logic here

# All the logic
# Add all your logic here

# Your code goes here

# Add your logic here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Additional logic
# Add your additional logic here

# Add your logic here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Additional logic
# Add your additional logic here

# Add your logic here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Your code goes here

# Example:
# task_data = [{'task': 'task1', 'command': 'ls', 'response': 'file1 file2'}, {'task': 'task2', 'command': 'cd dir', 'response': ''}]
# export_task_data(task_data, 'csv', 'task_data.csv')

# Add your code here

# Deployment logic
# Add your deployment logic here

# Your code goes here