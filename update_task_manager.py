import json

def save_preferences(preferences):
    with open('preferences.json', 'w') as f:
        json.dump(preferences, f)


def load_preferences():
    with open('preferences.json', 'r') as f:
        preferences = json.load(f)
    return preferences


def update_task_manager_and_auto_prompter():
    preferences = load_preferences()
    # Update task manager and auto-prompter based on preferences
    # This part would depend on how your task manager and auto-prompter are implemented
