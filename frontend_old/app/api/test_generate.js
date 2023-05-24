
import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export async function generateQuestions(subject, examBoard, qualificationLevel, style, topic) {
  const questions = [];

  for (let i = 1; i <= 6; i++) {
    const questionPrompt = `Generate a ${style} ${subject} question for a ${qualificationLevel} ${examBoard} exam on the topic of ${topic}. {}`;
    const { data } = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `\n\nQ: ${questionPrompt}\nA:`,
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['{}'],
    });

    const question = data.choices[0].text;
    questions.push(question);
  }

  return questions;
                               
}

export default function handler(req, res) {
    // Get data submitted in request's body.
    const { style, subject, topic, examBoard, qualification } = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);
   
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.first || !body.last) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or last name not found' });
    }
   
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.last}` });
  }

  export { handler as GET};