import tkinter as tk
import unittest

# Create the main window
window = tk.Tk()
window.title('CHAT2EXPLODE GUI')

# Create a label
label = tk.Label(window, text='Welcome to CHAT2EXPLODE!', font=('Arial', 24))
label.pack(pady=20)

# Create a button
button = tk.Button(window, text='Click Me!', command=handle_button_click)
button.pack()

# Create a text box
text_box = tk.Text(window, height=10, width=50)
text_box.pack(pady=10)

# Function to handle button click
def handle_button_click():
    input_text = text_box.get('1.0', 'end-1c')
    output_text = process_input(input_text)
    text_box.delete('1.0', 'end')
    text_box.insert('1.0', output_text)

# Function to process input
def process_input(input_text):
    # Add your code here to process the input
    processed_text = input_text.upper()
    return processed_text

# Start the GUI event loop
window.mainloop()


class TestProcessInput(unittest.TestCase):
    def test_process_input(self):
        input_text = 'hello'
        expected_output = 'HELLO'
        self.assertEqual(process_input(input_text), expected_output)

if __name__ == '__main__':
    unittest.main()
