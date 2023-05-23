import { Configuration, OpenAIApi } from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export async function generateQuestionsWithStyle(subject, examBoard, qualificationLevel, style, topic) {
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const { question_style, subject, topic, exam_board, qualification } = req.body;

  const questions = await generateQuestionsWithStyle(subject, exam_board, qualification, question_style, topic);

  console.log(questions);

  res.status(200).json({ questions });
}
