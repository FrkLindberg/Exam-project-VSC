
const sendBtn = document.getElementById("chat-sendBtn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  const response = await getBotReply(message);
  addMessage(response, "bot");
});

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotReply(userMessage) {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const apiKey = "YOUR_OPENAI_API_KEY"; // <<<< ERSTATT DENNE

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a nice farmer and a salesman that helps your customers with answering their questions in a kind way. Your website sells fresh seasonal farming products with the highets quality. You help the users/customers find and order local farm-fresh produce. The produce have different avalability for every season. Be friendly and informative, and help guide the customer during the ordering process. Your answers ar always less than 50 words, and avoid discussing unrelated topics."
        }
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content.trim();
}
