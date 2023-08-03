import schedule
import time

def job():
    # Insert the tasks you want to be done here
    pass

# Schedule the job every day at a specific time
schedule.every().day.at("10:30").do(job)

while True:
    # Checks whether a scheduled task is pending to run or not
    schedule.run_pending()
    time.sleep(1)
