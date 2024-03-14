const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/chat/completions";

const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const stopBtn = document.getElementById("stopBtn"); // This button does not have functionality in the provided code
const resultText = document.getElementById("resultText");

const generate = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                prompt: promptInput.value, // Fixed: Was incorrectly trying to send a 'messages' object
                max_tokens: 100, // You can adjust max_tokens as per your requirements
                temperature: 0.7, // Optional: Adjust the creativity of the response
            }),
        });
        const data = await response.json();
        console.log(data.choices[0].text); // Fixed: It should be 'text' instead of 'message.content'
        resultText.innerText = data.choices[0].text; // Ditto
    } catch (error) {
        console.error("Error:", error);
    }
};

generateBtn.addEventListener("click", generate);
promptInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        generate();
    }
});

