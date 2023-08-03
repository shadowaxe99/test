import openai

openai.api_key = "YOUR_API_KEY"

class Chat2Code:

    def __init__(self):
        self.openai_engine = "text-davinci-003"

    def generate_code(self, chat):
        response = openai.Completion.create(
            engine=self.openai_engine,
            prompt=chat,
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.5,
        )

        generated_code = response["choices"][0]["text"]
        return generated_code

chat2code = Chat2Code()

while True:
    user_input = input("User: ")
    if user_input.lower() == "exit":
        break
    code = chat2code.generate_code(user_input)
    print("AI: ", code)
