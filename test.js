async function callOpenAI() {
    const prompt = "Hello, how are you?";
    const engine = "text-davinci-002";
    const maxTokens = 5;

    const response = await axios.post(
        'https://api.openai-proxy.com/v1/engines/' + engine + '/completions', {
            prompt: prompt,
            max_tokens: maxTokens
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + "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"
            }
        }
    );

    console.log(response.data.choices[0].text);
}