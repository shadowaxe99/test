import readline
import os


def log_commands():
    history_file = os.path.expanduser('~/.command_history')
    readline.read_history_file(history_file)
    readline.set_history_length(1000)
    readline.write_history_file(history_file)

while True:
    command = input(">>> ")
    readline.add_history(command)
    log_commands()
